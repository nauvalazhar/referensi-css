import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundPosition = () => (
  <React.Fragment>
    <style>{`
        .background-position { background-image: url(/images/jt.png);background-repeat: no-repeat;background-size: 64px 64px;height: 150px; }
        #background-position-0-0{ background-position:0% 0%;}
        #background-position-bottom-right{ background-position:bottom right;}
        #background-position-center-center{ background-position:center center;}
	    `}</style>
    <LayoutSingle
      property="background-position"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-position"
      description=<React.Fragment>
        <p>Defines the position of the background image.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-position: 0% 0%;`}
        >
          <p>
            The background image will be positioned at <strong>0%</strong> on
            the horizontal axis and <strong>0%</strong> on the vertical axis,
            which means the top left corner of the element.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-position "
            id="background-position-0-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-position: bottom right;`}
        >
          <p>
            You can use a combination of <strong>position keywords</strong>:{" "}
            <code>center</code>, <code>top</code>, <code>bottom</code>,{" "}
            <code>left</code> and <code>right</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-position "
            id="background-position-bottom-right"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-position: center center;`}
        >
          <p>
            The background image will be positioned in the center of the
            element.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-position "
            id="background-position-center-center"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundPosition;
