import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const JustifyContent = () => (
  <React.Fragment>
    <style>{`
        .justify-content { background: hsl(48, 100%, 67%);background: #310736;display: flex;padding: 0; }
        #justify-content-flex-start{ justify-content:flex-start;}
        #justify-content-flex-end{ justify-content:flex-end;}
        #justify-content-center{ justify-content:center;}
        #justify-content-space-between{ justify-content:space-between;}
        #justify-content-space-around{ justify-content:space-around;}
	    `}</style>
    <LayoutSingle
      property="justify-content"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/justify-content"
      description=<React.Fragment>
        <p>
          Defines how flexbox/grid items are aligned according to the{" "}
          <strong>main</strong> axis, within a flexbox/grid container.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`justify-content: flex-start;`}
        >
          <p>
            The flexbox/grid items are pushed towards the <strong>start</strong>{" "}
            of the container's main axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div justify-content "
            id="justify-content-flex-start"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`justify-content: flex-end;`}>
          <p>
            The flexbox/grid items are pushed towards the <strong>end</strong>{" "}
            of the container's main axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div justify-content "
            id="justify-content-flex-end"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`justify-content: center;`}>
          <p>
            The flexbox/grid items are <strong>centered</strong> along the
            container's main axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div justify-content "
            id="justify-content-center"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`justify-content: space-between;`}
        >
          <p>
            The remaining space is distributed <strong>between</strong> the
            flexbox/grid items.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div justify-content "
            id="justify-content-space-between"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`justify-content: space-around;`}>
          <p>
            The remaining space is distributed <strong>around</strong> the
            flexbox/grid items: this adds space <em>before</em> the first item
            and <em>after</em> the last one.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div justify-content "
            id="justify-content-space-around"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default JustifyContent;
