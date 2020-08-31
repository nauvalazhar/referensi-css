import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BorderStyle = () => (
  <React.Fragment>
    <style>{`
        .border-style { padding: 1em;border-width: 4px; }
        #border-style-none{ border-style:none;}
        #border-style-dotted{ border-style:dotted;}
        #border-style-dashed{ border-style:dashed;}
        #border-style-solid{ border-style:solid;}
        #border-style-double{ border-style:double;}
        #border-style-groove{ border-style:groove;}
	    `}</style>
    <LayoutSingle
      property="border-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-style"
      description=<React.Fragment>
        <p>Defines the style of the element's borders.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-style: none;`}
        >
          <p>Removes the element's borders.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-style "
            id="border-style-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-style: dotted;`}>
          <p>Turns the border into a sequence of dots.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-style "
            id="border-style-dotted"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-style: dashed;`}>
          <p>Turns the border into a sequence of dashes.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-style "
            id="border-style-dashed"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-style: solid;`}>
          <p>Turns the border into a solid line.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-style "
            id="border-style-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-style: double;`}>
          <p>Splits the border into two lines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-style "
            id="border-style-double"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-style: groove;`}>
          <p>Sets an inset style to the borders.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-style "
            id="border-style-groove"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderStyle;
