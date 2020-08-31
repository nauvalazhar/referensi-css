import Head from 'next/head';
import Link from 'next/link';
import Finder from './Finder';
import ModalShare, { modalShareOpen } from './ModalShare';
import Menu from './Menu';
import { 
  initializeMatches, 
  highlightQuery,
  cleanMenu,
  buildTwitterURL
} from '../utils/helpers';
import Clipboard from 'clipboard';
const properties = require('../data/properties.json');

export default class LayoutSingle extends React.Component {
  constructor(props) {
    super(props);

    this.currentURL = process.env.site.url + '/property/' + props.property;
  }

  componentDidMount() {
    require('../utils/main');

    this.addClipboardAction();
  }

  addClipboardAction() {
    const exampleValues = document.querySelectorAll('.example-value');

    exampleValues.forEach(ex => {
      ex.addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const btnTitle = btn.getAttribute('title');
        navigator.clipboard.writeText(btn.getAttribute('data-clipboard-text'));

        // change title to 'copied' and add 'is-copied' className
        btn.setAttribute('title', 'Copied');
        btn.classList.add('is-copied');

        // after 500ms, set title to the original one and remove the 'is-copied' className
        setTimeout(() => {
          btn.setAttribute('title', btnTitle);
          btn.classList.remove('is-copied');
        }, 500);
      });
    });
  }

  copyToClipboard(e) {
    const btn = e.currentTarget;
    const btnTitle = btn.getAttribute('title');

    navigator.clipboard.writeText(this.currentURL);
    // change title to 'copied' and add 'is-copied' className
    btn.setAttribute('title', 'Copied');
    btn.classList.add('is-copied');

    // after 500ms, set title to the original one and remove the 'is-copied' className
    setTimeout(() => {
      btn.setAttribute('title', btnTitle);
      btn.classList.remove('is-copied');
    }, 500);
  }

  toggleAnimation(e) {
    const { property } = this.props;
    const btn = e.currentTarget;

    var targets = document.querySelectorAll('#' + property + ' .example-output-div');

    btn.classList.toggle('is-playing');

    Array.prototype.forEach.call(targets, (elbis, index) => {
      elbis.classList.toggle('is-animated');
    });
  }

  render() {
    const props = this.props;

    // find collection of current property
    const collection = ((properties, property) => properties.find(prop => prop.name == property))(properties, props.property)?.collection ?? false;

    const currentURL = this.currentURL;

    return (
      <React.Fragment>
        <Head>
          <title>{props.property} - {process.env.site.title}</title>
          <meta name="description" content={`Belajar bagaimana properti ${props.property} di CSS bekerja.`} />
          <meta property="og:url" content={currentURL} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${props.property} - ${process.env.site.title}`} />
          <meta property="og:image" content="/images/css-reference-share.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:description" content={`Belajar bagaimana properti ${props.property} di CSS bekerja.`} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mhdnauvalazhar" />
          <meta name="twitter:creator" content="@mhdnauvalazhar" />
          <meta name="twitter:title" content={`${props.property} - ${process.env.site.title}`} />
          <meta name="twitter:image" content="/images/css-reference-share.png" />
          <meta name="twitter:description" content={`Belajar bagaimana properti ${props.property} di CSS bekerja.`} />
        </Head>

        <Menu index={false} {...props} />

        <main className="main">
          <section className="properties properties--single">
            <section id={props.property} className="property">
              <header className="property-header">
                <h2 className="property-name">
                  <a href={`#${props.property}`}><span>#</span>{props.property}</a>
                </h2>
                <div className="property-description">
                  {props.description}
                </div>
                <nav className="property-links">
                  {collection &&
                    <Link href={`/collection/[collection]`} as={`/collection/${collection}`}><a className="property-collection">
                      In collection: <strong>{collection}</strong>
                    </a></Link>
                  }
                  <a onClick={this.copyToClipboard.bind(this)} className="property-links-direct" data-property-name={props.property} data-tooltip="Salin pranala ke halaman ini">
                    Pranala
                  </a>
                  <a onClick={modalShareOpen.bind(this)} className="property-share" data-tooltip="Bagikan di Twitter atau Facebook" data-property-name={props.property}>Share</a>
                  <a target="_blank" href={`http://caniuse.com/#search=${props.property}`} data-tooltip="Lihat dukungan peramban di Can I use" rel="external">Can I use</a>
                  <a target="_blank" href={props.mdn} data-tooltip="Lebih lengkap di Mozilla Developer Network" rel="external">MDN</a>
                </nav>

                {props.animation &&
                  <div className="property-animation">
                    <a onClick={this.toggleAnimation.bind(this)} className="button property-animation-toggle"></a>
                  </div>
                }
              </header>

              { props.children }
            </section>
          </section>
        </main>
        
        <ModalShare
          facebook={`https://www.facebook.com/sharer.php?u=${currentURL}`}
          twitter={buildTwitterURL(currentURL, props.property)}
          url={currentURL}
        />
      </React.Fragment>
    )
  }
}