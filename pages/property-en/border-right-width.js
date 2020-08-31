import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderRightWidth = () => (
  <React.Fragment>
    <style>{`
        .border-right-width { border-right-style: solid; }
        #border-right-width-0{ border-right-width:0;}
        #border-right-width-4px{ border-right-width:4px;}
	    `}</style>
    <LayoutSingle
      property="border-right-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-right-width"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-width`}>border-width</a>
          </code>
          , but for the <strong>right</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-right-width: 0;`}
        >
          <p>Removes the right border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-width "
            id="border-right-width-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-width: 4px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-width "
            id="border-right-width-4px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderRightWidth;
