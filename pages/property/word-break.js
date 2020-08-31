import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const WordBreak = () => (
  <React.Fragment>
    <style>{`
        .word-break { font-family: "Source Code Pro", monospace;width: 18em; }
        #word-break-normal{ word-break:normal;}
        #word-break-break-all{ word-break:break-all;}
	    `}</style>
    <LayoutSingle
      property="word-break"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/word-break"
      description=<React.Fragment>
        <p>Defines how words should break when reaching the end of a line.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`word-break: normal;`}
        >
          <p>
            Words with no space will <strong>not</strong> break. Sequences of
            uninterrupted characters will be displayed on a single line.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div word-break  block block--alpha"
            id="word-break-normal"
          >
            Thequickbrownfoxjumpsoverthelazydog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`word-break: break-all;`}>
          <p>
            Words with no space will <strong>break</strong> as soon as they
            reach the end of a line.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div word-break  block block--alpha"
            id="word-break-break-all"
          >
            Thequickbrownfoxjumpsoverthelazydog
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default WordBreak;
