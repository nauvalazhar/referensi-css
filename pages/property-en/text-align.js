import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TextAlign = () => (
  <React.Fragment>
    <style>{`
        #text-align-left{ text-align:left;}
        #text-align-right{ text-align:right;}
        #text-align-center{ text-align:center;}
        #text-align-justify{ text-align:justify;}
	    `}</style>
    <LayoutSingle
      property="text-align"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/text-align"
      description=<React.Fragment>
        <p>
          Defines how the text content of the element is horizontally aligned.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`text-align: left;`}>
          <p>
            The text content is aligned to the <strong>left</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div text-align " id="text-align-left">
            <p className="block block--alpha">
              <strong>Hello world</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-align: right;`}>
          <p>
            The text content is aligned to the <strong>right</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div text-align " id="text-align-right">
            <p className="block block--alpha">
              <strong>Hello world</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-align: center;`}>
          <p>
            The text content is <strong>centered</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-align "
            id="text-align-center"
          >
            <p className="block block--alpha">
              <strong>Hello world</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-align: justify;`}>
          <p>
            The text content is <strong>justified</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-align "
            id="text-align-justify"
          >
            <p className="block block--alpha">
              <strong>Hello world</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TextAlign;
