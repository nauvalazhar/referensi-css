import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const OutlineStyle = () => (
  <React.Fragment>
    <style>{`
        .outline-style { padding: 1em;outline-width: 4px; }
        #outline-style-none{ outline-style:none;}
        #outline-style-dotted{ outline-style:dotted;}
        #outline-style-dashed{ outline-style:dashed;}
        #outline-style-solid{ outline-style:solid;}
        #outline-style-double{ outline-style:double;}
        #outline-style-groove{ outline-style:groove;}
	    `}</style>
    <LayoutSingle
      property="outline-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/outline-style"
      description=<React.Fragment>
        <p>Defines the style of the element's outlines.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`outline-style: none;`}
        >
          <p>Removes the element's outlines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-style "
            id="outline-style-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`outline-style: dotted;`}>
          <p>Turns the outline into a sequence of dots.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-style "
            id="outline-style-dotted"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`outline-style: dashed;`}>
          <p>Turns the outline into a sequence of dashes.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-style "
            id="outline-style-dashed"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`outline-style: solid;`}>
          <p>Turns the outline into a solid line.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-style "
            id="outline-style-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`outline-style: double;`}>
          <p>Splits the outline into two lines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-style "
            id="outline-style-double"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`outline-style: groove;`}>
          <p>Sets an inset style to the outlines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-style "
            id="outline-style-groove"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default OutlineStyle;
