import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const LetterSpacing = () => (
  <React.Fragment>
    <style>{`
        #letter-spacing-normal{ letter-spacing:normal;}
        #letter-spacing-2px{ letter-spacing:2px;}
        #letter-spacing-01em{ letter-spacing:0.1em;}
	    `}</style>
    <LayoutSingle
      property="letter-spacing"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing"
      description=<React.Fragment>
        <p>Defines the spacing between the characters of a block of text.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`letter-spacing: normal;`}
        >
          <p>
            The spacing between the characters is <strong>normal</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div letter-spacing "
            id="letter-spacing-normal"
          >
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`letter-spacing: 2px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div letter-spacing "
            id="letter-spacing-2px"
          >
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`letter-spacing: 0.1em;`}>
          <p>
            You can use <strong>em</strong> values: this allows the spacing to
            remain <em>relative</em> to the font-size.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div letter-spacing "
            id="letter-spacing-01em"
          >
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default LetterSpacing;
