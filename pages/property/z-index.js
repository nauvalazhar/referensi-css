import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const ZIndex = () => (
  <React.Fragment>
    <style>{`
        .z-index { height: 100px;padding: 0; }
        .z-index .block { height: 100%;left: 0;position: absolute;width: 25%; }.z-index .block--alpha { height: 50%;width: 100%; }.z-index .block--pink { height: 60%;left: 20%;top: 20%;width: 60%; }.z-index .block--beta { height: 60%;left: 40%;top: 40%;width: 60%; }.z-index .block--yellow { left: 70%;width: 20%; }
        #z-index-1 .block--pink { z-index: 1; }
        #z-index--1 .block--pink { z-index: -1; }
	    `}</style>
    <LayoutSingle
      property="z-index"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/z-index"
      description=<React.Fragment>
        <p>
          Defines the <strong>order</strong> of the elements on the{" "}
          <strong>z-axis</strong>. It only works on <strong>positioned</strong>{" "}
          elements (anything apart from <code>static</code>).
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`z-index: auto;`}
        >
          <p>
            The order is defined by the order in the <strong>HTML code</strong>:
          </p>
          <ul>
            <li>first in the code = behind</li>
            <li>last in the code = in front</li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div z-index " id="z-index-auto">
            <div className="block block--alpha">One</div>
            <div className="block block--pink">
              Two
              <br />
              <strong>Target</strong>
            </div>
            <div className="block block--beta">Three</div>
            <div className="block block--yellow">Four</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`z-index: 1;`}>
          <p>
            The z-index value is <strong>relative</strong> to the other ones.
            The target element is move in <strong>front</strong> of its
            siblings.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div z-index " id="z-index-1">
            <div className="block block--alpha">One</div>
            <div className="block block--pink">
              Two
              <br />
              <strong>Target</strong>
            </div>
            <div className="block block--beta">Three</div>
            <div className="block block--yellow">Four</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`z-index: -1;`}>
          <p>
            You can use <strong>negative values</strong>. The target element is
            move in <strong>behind</strong> its siblings.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div z-index " id="z-index--1">
            <div className="block block--alpha">One</div>
            <div className="block block--pink">
              Two
              <br />
              <strong>Target</strong>
            </div>
            <div className="block block--beta">Three</div>
            <div className="block block--yellow">Four</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default ZIndex;
