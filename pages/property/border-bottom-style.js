import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderBottomStyle = () => (
  <React.Fragment>
    <style>{`
        .border-bottom-style { border-bottom-width: 4px; }
        #border-bottom-style-none{ border-bottom-style:none;}
        #border-bottom-style-dotted{ border-bottom-style:dotted;}
        #border-bottom-style-dashed{ border-bottom-style:dashed;}
        #border-bottom-style-solid{ border-bottom-style:solid;}
        #border-bottom-style-double{ border-bottom-style:double;}
        #border-bottom-style-groove{ border-bottom-style:groove;}
	    `}</style>
    <LayoutSingle
      property="border-bottom-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-style`}>border-style</a>
          </code>
          , but for the <strong>bottom</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-bottom-style: none;`}
        >
          <p>Removes the bottom border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-style "
            id="border-bottom-style-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-style: dotted;`}>
          <p>Turns the bottom border into a sequence of dots.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-style "
            id="border-bottom-style-dotted"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-style: dashed;`}>
          <p>Turns the bottom border into a sequence of dashes.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-style "
            id="border-bottom-style-dashed"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-style: solid;`}>
          <p>Turns the bottom border into a solid line.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-style "
            id="border-bottom-style-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-style: double;`}>
          <p>Splits the bottom border into two lines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-style "
            id="border-bottom-style-double"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-style: groove;`}>
          <p>Sets an inset style to the bottom border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-style "
            id="border-bottom-style-groove"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderBottomStyle;
