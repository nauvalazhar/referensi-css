import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BorderRadius = () => (
  <React.Fragment>
    <style>{`
        .border-radius { border: 4px solid #05ffb0; }
        #border-radius-0{ border-radius:0;}
        #border-radius-20px{ border-radius:20px;}
        #border-radius-50{ border-radius:50%;}
        #border-radius-20px-50{ border-radius:20px 50%;}
	    `}</style>
    <LayoutSingle
      property="border-radius"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-radius"
      description=<React.Fragment>
        <p>
          Defines the <strong>radius</strong> of the element's corners.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-radius: 0;`}
        >
          <p>Removes any border radius.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-radius "
            id="border-radius-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-radius: 20px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-radius "
            id="border-radius-20px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-radius: 50%;`}>
          <p>
            You can use <strong>percentage</strong> values. In this example, the
            radius starts halfway through each border.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-radius "
            id="border-radius-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-radius: 20px 50%;`}>
          <p>
            If you set <strong>two values</strong>, the first one is for the{" "}
            <em>top</em> and <em>bottom</em> borders, the second one for the{" "}
            <em>left</em> and <em>right</em> borders.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-radius "
            id="border-radius-20px-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderRadius;
