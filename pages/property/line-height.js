import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const LineHeight = () => (
  <React.Fragment>
    <style>{`
        #line-height-normal{ line-height:normal;}
        #line-height-16{ line-height:1.6;}
        #line-height-16 .block { line-height: 1.6; }
        #line-height-30px{ line-height:30px;}
        #line-height-30px .block { line-height: 30px; }
        #line-height-08em{ line-height:0.8em;}
        #line-height-08em .block { line-height: 0.8em; }
	    `}</style>
    <LayoutSingle
      property="line-height"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/line-height"
      description=<React.Fragment>
        <p>Defines the height of a single line of text.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`line-height: normal;`}
        >
          <p>
            Reverts to the <strong>default</strong> value of the browser.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div line-height "
            id="line-height-normal"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`line-height: 1.6;`}>
          <p>
            You can use <strong>unitless</strong> values: the line height will
            be relative to the font size.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div line-height " id="line-height-16">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`line-height: 30px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div line-height "
            id="line-height-30px"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`line-height: 0.8em;`}>
          <p>
            You can use <strong>em</strong> values: like with unitless values,
            the line height will be relative to the font size.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div line-height "
            id="line-height-08em"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default LineHeight;
