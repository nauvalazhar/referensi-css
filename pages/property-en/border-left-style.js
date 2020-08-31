import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderLeftStyle = () => (
  <React.Fragment>
    <style>{`
        .border-left-style { border-left-width: 4px; }
        #border-left-style-none{ border-left-style:none;}
        #border-left-style-dotted{ border-left-style:dotted;}
        #border-left-style-dashed{ border-left-style:dashed;}
        #border-left-style-solid{ border-left-style:solid;}
        #border-left-style-double{ border-left-style:double;}
        #border-left-style-groove{ border-left-style:groove;}
	    `}</style>
    <LayoutSingle
      property="border-left-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-left-style"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-style`}>border-style</a>
          </code>
          , but for the <strong>left</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-left-style: none;`}
        >
          <p>Removes the left border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-style "
            id="border-left-style-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-style: dotted;`}>
          <p>Turns the left border into a sequence of dots.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-style "
            id="border-left-style-dotted"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-style: dashed;`}>
          <p>Turns the left border into a sequence of dashes.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-style "
            id="border-left-style-dashed"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-style: solid;`}>
          <p>Turns the left border into a solid line.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-style "
            id="border-left-style-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-style: double;`}>
          <p>Splits the left border into two lines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-style "
            id="border-left-style-double"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-style: groove;`}>
          <p>Sets an inset style to the left border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-style "
            id="border-left-style-groove"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderLeftStyle;
