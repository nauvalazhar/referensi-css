import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderTopStyle = () => (
  <React.Fragment>
    <style>{`
        .border-top-style { border-top-width: 4px; }
        #border-top-style-none{ border-top-style:none;}
        #border-top-style-dotted{ border-top-style:dotted;}
        #border-top-style-dashed{ border-top-style:dashed;}
        #border-top-style-solid{ border-top-style:solid;}
        #border-top-style-double{ border-top-style:double;}
        #border-top-style-groove{ border-top-style:groove;}
	    `}</style>
    <LayoutSingle
      property="border-top-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-top-style"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-style`}>border-style</a>
          </code>
          , but for the <strong>top</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-top-style: none;`}
        >
          <p>Removes the top border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-style "
            id="border-top-style-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-style: dotted;`}>
          <p>Turns the top border into a sequence of dots.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-style "
            id="border-top-style-dotted"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-style: dashed;`}>
          <p>Turns the top border into a sequence of dashes.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-style "
            id="border-top-style-dashed"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-style: solid;`}>
          <p>Turns the top border into a solid line.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-style "
            id="border-top-style-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-style: double;`}>
          <p>Splits the top border into two lines.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-style "
            id="border-top-style-double"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-style: groove;`}>
          <p>Sets an inset style to the top border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-style "
            id="border-top-style-groove"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderTopStyle;
