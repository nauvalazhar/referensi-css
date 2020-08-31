import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BorderTopRightRadius = () => (
  <React.Fragment>
    <style>{`
        .border-top-right-radius { border-top-color: #05ffb0;border-right-color: hsl(348, 100%, 61%);border-style: solid;border-width: 4px; }
        #border-top-right-radius-0{ border-top-right-radius:0;}
        #border-top-right-radius-20px{ border-top-right-radius:20px;}
        #border-top-right-radius-50{ border-top-right-radius:50%;}
        #border-top-right-radius-20px-50{ border-top-right-radius:20px 50%;}
	    `}</style>
    <LayoutSingle
      property="border-top-right-radius"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-top-right-radius"
      description=<React.Fragment>
        <p>
          Defines the <strong>radius</strong> of the top right corner.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-top-right-radius: 0;`}
        >
          <p>Removes any border radius.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-right-radius "
            id="border-top-right-radius-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-right-radius: 20px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-right-radius "
            id="border-top-right-radius-20px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-right-radius: 50%;`}>
          <p>
            You can use <strong>percentage</strong> values. In this example, the
            radius starts halfway on the <em>top</em> border, and ends halfway
            on the <em>right</em> border.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-right-radius "
            id="border-top-right-radius-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-top-right-radius: 20px 50%;`}
        >
          <p>
            If you set <strong>two values</strong>, the first one is for the{" "}
            <em>top</em> border, the second one for the <em>right</em> border.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-right-radius "
            id="border-top-right-radius-20px-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderTopRightRadius;
