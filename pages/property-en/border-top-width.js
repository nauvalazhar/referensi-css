import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderTopWidth = () => (
  <React.Fragment>
    <style>{`
        .border-top-width { border-top-style: solid; }
        #border-top-width-0{ border-top-width:0;}
        #border-top-width-4px{ border-top-width:4px;}
	    `}</style>
    <LayoutSingle
      property="border-top-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-top-width"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-width`}>border-width</a>
          </code>
          , but for the <strong>top</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-top-width: 0;`}
        >
          <p>Removes the top border.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-width "
            id="border-top-width-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-width: 4px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-width "
            id="border-top-width-4px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderTopWidth;
