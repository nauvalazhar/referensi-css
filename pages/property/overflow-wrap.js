import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const OverflowWrap = () => (
  <React.Fragment>
    <style>{`
        .overflow-wrap { font-family: "Source Code Pro", monospace;width: 18em; }
        #overflow-wrap-normal{ overflow-wrap:normal;}
        #overflow-wrap-break-word{ overflow-wrap:break-word;}
	    `}</style>
    <LayoutSingle
      property="overflow-wrap"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/overflow-wrap"
      description=<React.Fragment>
        <p>Defines if words should break when reaching the end of a line.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`overflow-wrap: normal;`}
        >
          <p>
            Words with no space will <strong>not</strong> break. Sequences of
            uninterrupted characters will be displayed on a single line.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-wrap  block block--alpha"
            id="overflow-wrap-normal"
          >
            Thequickbrownfoxjumpsoverthelazydog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow-wrap: break-word;`}>
          <p>
            Words with no space will <strong>break</strong> as soon as they
            reach the end of a line.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-wrap  block block--alpha"
            id="overflow-wrap-break-word"
          >
            Thequickbrownfoxjumpsoverthelazydog
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default OverflowWrap;
