import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const WordSpacing = () => (
  <React.Fragment>
    <style>{`
        #word-spacing-normal{ word-spacing:normal;}
        #word-spacing-5px{ word-spacing:5px;}
        #word-spacing-2em{ word-spacing:2em;}
	    `}</style>
    <LayoutSingle
      property="word-spacing"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/word-spacing"
      description=<React.Fragment>
        <p>Defines the spacing between words of a block of text.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`word-spacing: normal;`}
        >
          <p>
            The spacing between the characters is <strong>normal</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div word-spacing "
            id="word-spacing-normal"
          >
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`word-spacing: 5px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div word-spacing "
            id="word-spacing-5px"
          >
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`word-spacing: 2em;`}>
          <p>
            You can use <strong>em</strong> values: this allows the spacing to
            remain <em>relative</em> to the font-size.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div word-spacing "
            id="word-spacing-2em"
          >
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default WordSpacing;
