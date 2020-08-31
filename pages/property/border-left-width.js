import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderLeftWidth = () => (
  <React.Fragment>
    <style>{`
        .border-left-width { border-left-style: solid; }
        #border-left-width-0{ border-left-width:0;}
        #border-left-width-4px{ border-left-width:4px;}
	    `}</style>
    <LayoutSingle
      property="border-left-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-left-width"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-width`}>border-width</a>
          </code>
          , but for the <strong>left</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-left-width: 0;`}
        >
          <p>Removes the left border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-width "
            id="border-left-width-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-width: 4px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-width "
            id="border-left-width-4px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderLeftWidth;
