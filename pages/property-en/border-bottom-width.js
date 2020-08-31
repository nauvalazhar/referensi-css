import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderBottomWidth = () => (
  <React.Fragment>
    <style>{`
        .border-bottom-width { border-bottom-style: solid; }
        #border-bottom-width-0{ border-bottom-width:0;}
        #border-bottom-width-4px{ border-bottom-width:4px;}
	    `}</style>
    <LayoutSingle
      property="border-bottom-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-width"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-width`}>border-width</a>
          </code>
          , but for the <strong>bottom</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-bottom-width: 0;`}
        >
          <p>Removes the bottom border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-width "
            id="border-bottom-width-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-width: 4px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-width "
            id="border-bottom-width-4px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderBottomWidth;
