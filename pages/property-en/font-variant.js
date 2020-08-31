import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FontVariant = () => (
  <React.Fragment>
    <style>{`
        .font-variant { font-size: 1.2em; }
        #font-variant-normal{ font-variant:normal;}
        #font-variant-small-caps{ font-variant:small-caps;}
	    `}</style>
    <LayoutSingle
      property="font-variant"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/font-variant"
      description=<React.Fragment>
        <p>Defines which glyph to use for each letter.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`font-variant: normal;`}
        >
          <p>
            Each letter uses its <strong>normal</strong> glyph.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-variant "
            id="font-variant-normal"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-variant: small-caps;`}>
          <p>
            Each letter uses its <strong>small capitalized</strong> version.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-variant "
            id="font-variant-small-caps"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FontVariant;
