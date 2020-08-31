const fs = require('fs')
const prettier = require("prettier");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let file = process.argv[2];
let path = `pages/property/${file}/index.html`

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

function camelCase(input) { 
    return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    }).replace(/^./, function(str){ return str.toUpperCase(); });
}

function jsx(str) {
	str = str
		.replace(/<a (.+?)href="{{site\.url}}(.+?)"(.+?)>((.|\n)*?)<\/a>/g, `<Link href={\`$2\`}><a $1$3>$4</a></Link>`)
		.replace(/href="(.+?)"/g, "href={`$1`}")
		.replace(/{{site\.url}}/g, '')
		.replace(/class=/g, "className=")
		.replace(/<br>/g, "<br />")
		.replace(/<pre>((.|\n)*?)<\/pre>/g, '<pre>{`$1`}</pre>')
		.replace(/<img(.+?)>/g, '<img$1/>');

	return str;
}

const template = (data) => (`
import LayoutSingle from '../../components/LayoutSingle';
import SectionExample from '../../components/SectionExample';
${data.links > 0 ?
	`import Link from 'next/link';`
: ''}

const ${data.class} = () => (
<React.Fragment>
	${ data.styles.length ? `
	    <style>{\`
${data.styles}
	    \`}</style>` : '' }
	  <LayoutSingle
	    property="${data.property}"
	    mdn="${data.mdn}"
	    description=${data.description}
	    ${data.animation ? 'animation={true}' : ''}
	  >

	    ${data.examples.map(example => (
		    `<SectionExample>
		      <SectionExample.Property
		        ${example.isDefault ? 'isDefault={true}' : ''}
		        ${example.fixedToggle ? 'fixedToggle={true}' : ''}
		        declaration={\`${example.declaration}\`}
		      >
		        ${example.description}
		      </SectionExample.Property>

		      <SectionExample.Preview>
		        ${example.preview}
		      </SectionExample.Preview>
		    </SectionExample>`
	    )).join('\n\n')}
	  </LayoutSingle>
</React.Fragment>
);

export default ${data.class};
`);

getDirectories('data/raw-property').forEach(file => {
	path = `data/raw-property/${file}/index.html`;

	fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
		const dom = new JSDOM(data);
		const select = dom.window.document.querySelector.bind(dom.window.document);
		const selectAll = dom.window.document.querySelectorAll.bind(dom.window.document);

		// get all styles
		const styles = ((styles) => Array.prototype.map.call(styles, s => (' '.repeat(8)) + s.innerHTML).join('\n'))(selectAll('style'));

		// examples block
		const examples = ((examples) => Array.prototype.map.call(examples, e => ({
			isDefault: e.querySelector('.example-default') ? true : false,
			fixedToggle: e.querySelector('.example-fixed') ? true : false,
			declaration: e.querySelector('.example-value').innerHTML.trim(),
			description: jsx(e.querySelector('.example-description').innerHTML.trim()),
			preview: jsx(e.querySelector('.example-preview .example-output').innerHTML.trim()).replace(/{/g, '{`{`}')
		})))(selectAll('section.example'));

		const details = {};

		details.class = camelCase(file);
		details.property = select('section.property').getAttribute('id');
		details.animation = select('.property-animation') ? true : false;
		details.mdn = select('.property-links a[href*="developer.mozilla"]').getAttribute('href');
		details.description = "<React.Fragment>" + jsx(select('.property-description').innerHTML.trim()) + "</React.Fragment>";
		details.links = selectAll('.property-description a[href], .example-description a[href]').length;
		details.styles = styles;
		details.examples = examples;

		const templateOutput = template(details);

		console.log(details)

		const content = prettier.format(templateOutput, {
			parser: 'babel',
			jsxBracketSameLine: false,
			arrowParens: 'avoid'
		});

		console.log(content)

		fs.writeFileSync(`pages/property/${file}.js`, content);
	    console.log(`The pages/property/${file}.js file was created! Run: rm -rf pages/property/${file}`);
		// console.log(dom.window.document.querySelector('.property-collection').innerHTML);
	})
});
