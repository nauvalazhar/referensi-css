import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderRightStyle = () => (
  <React.Fragment>
    <style>{`
        .border-right-style { border-right-width: 4px; }
        #border-right-style-none{ border-right-style:none;}
        #border-right-style-dotted{ border-right-style:dotted;}
        #border-right-style-dashed{ border-right-style:dashed;}
        #border-right-style-solid{ border-right-style:solid;}
        #border-right-style-double{ border-right-style:double;}
        #border-right-style-groove{ border-right-style:groove;}
	    `}</style>
    <LayoutSingle
      property="border-right-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-right-style"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-style`}>border-style</a>
          </code>
          , but for the <strong>right</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-right-style: none;`}
        >
          <p>Removes the right border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-style "
            id="border-right-style-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-style: dotted;`}>
          <p>Turns the right border into a sequence of dots.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-style "
            id="border-right-style-dotted"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-style: dashed;`}>
          <p>Turns the right border into a sequence of dashes.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-style "
            id="border-right-style-dashed"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-style: solid;`}>
          <p>Turns the right border into a solid line.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-style "
            id="border-right-style-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-style: double;`}>
          <p>Splits the right border into two lines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-style "
            id="border-right-style-double"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-style: groove;`}>
          <p>Sets an inset style to the right border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-style "
            id="border-right-style-groove"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderRightStyle;
