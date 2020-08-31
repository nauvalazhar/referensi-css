import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TextDecoration = () => (
  <React.Fragment>
    <style>{`
        #text-decoration-none{ text-decoration:none;}
        #text-decoration-underline{ text-decoration:underline;}
	    `}</style>
    <LayoutSingle
      property="text-decoration"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/text-decoration"
      description=<React.Fragment>
        <p>Defines how the text content of the element is decorated.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`text-decoration: none;`}
        >
          <p>Removes any text decoration.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-decoration "
            id="text-decoration-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-decoration: underline;`}>
          <p>Underlines the text content.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-decoration "
            id="text-decoration-underline"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TextDecoration;
