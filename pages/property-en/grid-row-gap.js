import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridRowGap = () => (
  <React.Fragment>
    <style>{`
        .grid-row-gap { display: grid;grid-template-columns: auto auto auto;padding: 0; }
        #grid-row-gap-0{ grid-row-gap:0;}
        #grid-row-gap-10px{ grid-row-gap:10px;}
        #grid-row-gap-3rem{ grid-row-gap:3rem;}
	    `}</style>
    <LayoutSingle
      property="grid-row-gap"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-row-gap"
      description=<React.Fragment>
        <p>
          Defines the gutter between the rows of a{" "}
          <strong>grid container</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-row-gap: 0;`}
        >
          <p>Removes the gap.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row-gap " id="grid-row-gap-0">
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row-gap: 10px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-row-gap "
            id="grid-row-gap-10px"
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
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row-gap: 3rem;`}>
          <p>
            You can use <strong>(r)em</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-row-gap "
            id="grid-row-gap-3rem"
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
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridRowGap;
