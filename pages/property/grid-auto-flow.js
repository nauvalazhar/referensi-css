import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridAutoFlow = () => (
  <React.Fragment>
    <style>{`
        .grid-auto-flow { display: grid;grid-template-columns: 1fr 1fr;padding: 0; }
        .grid-auto-flow .two-wide { grid-column: span 2; }.grid-auto-flow .four-tall { grid-row: span 4; }
        #grid-auto-flow-row{ grid-auto-flow:row;}
        #grid-auto-flow-column{ grid-auto-flow:column;}
        #grid-auto-flow-dense{ grid-auto-flow:dense;}
	    `}</style>
    <LayoutSingle
      property="grid-auto-flow"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-flow"
      description=<React.Fragment>
        <p>
          Defines the position of auto-generated <strong>grid items</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-auto-flow: row;`}
        >
          <p>
            In this <strong>two-columns</strong> setup, the second grid item is
            two-columns wide, the third item is four-rows tall.
          </p>
          <p>
            The other grid items are placed on additional <strong>rows</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-auto-flow "
            id="grid-auto-flow-row"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="two-wide block block--beta">
              <strong>2.</strong> Two: <strong>2 columns wide</strong>
            </p>
            <p className="four-tall block block--pink">
              <strong>3.</strong> Three: <strong>4 rows tall</strong>
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
            <p className="block block--alpha">
              <strong>7.</strong> Seven
            </p>
            <p className="block block--beta">
              <strong>8.</strong> Eight
            </p>
            <p className="block block--yellow">
              <strong>9.</strong> Nine
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-auto-flow: column;`}>
          <p>
            The other grid items are placed on additional{" "}
            <strong>columns</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-auto-flow "
            id="grid-auto-flow-column"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="two-wide block block--beta">
              <strong>2.</strong> Two: <strong>2 columns wide</strong>
            </p>
            <p className="four-tall block block--pink">
              <strong>3.</strong> Three: <strong>4 rows tall</strong>
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
            <p className="block block--alpha">
              <strong>7.</strong> Seven
            </p>
            <p className="block block--beta">
              <strong>8.</strong> Eight
            </p>
            <p className="block block--yellow">
              <strong>9.</strong> Nine
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-auto-flow: dense;`}>
          <p>
            The <strong>dense</strong> algorithm tries to place all other grid
            items in order to fill all the "holes" in the grid.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-auto-flow "
            id="grid-auto-flow-dense"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="two-wide block block--beta">
              <strong>2.</strong> Two: <strong>2 columns wide</strong>
            </p>
            <p className="four-tall block block--pink">
              <strong>3.</strong> Three: <strong>4 rows tall</strong>
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
            <p className="block block--alpha">
              <strong>7.</strong> Seven
            </p>
            <p className="block block--beta">
              <strong>8.</strong> Eight
            </p>
            <p className="block block--yellow">
              <strong>9.</strong> Nine
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridAutoFlow;
