import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FontStyle = () => (
  <React.Fragment>
    <style>{`
        .font-style { font-size: 1.2em; }
        #font-style-normal{ font-style:normal;}
        #font-style-italic{ font-style:italic;}
        #font-style-oblique{ font-style:oblique;}
	    `}</style>
    <LayoutSingle
      property="font-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/font-style"
      description=<React.Fragment>
        <p>Defines how much the text is slanted.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`font-style: normal;`}
        >
          <p>
            The text is <strong>not</strong> slanted.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-style "
            id="font-style-normal"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-style: italic;`}>
          <p>
            Use the <strong>italic</strong> version of the font: the letters are
            slightly slanted.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-style "
            id="font-style-italic"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-style: oblique;`}>
          <p>
            Use the <strong>oblique</strong> version of the font: the letters
            are more slanted than italic.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-style "
            id="font-style-oblique"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FontStyle;
