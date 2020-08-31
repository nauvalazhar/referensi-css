import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridRowEnd = () => (
  <React.Fragment>
    <style>{`
        .grid-row-end { display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 0; }
        #grid-row-end-auto{ grid-row-end:auto;}
        #grid-row-end-3{ grid-row-end:3;}
        #grid-row-end-3 .block--pink { grid-row-end: 3; }
        #grid-row-end-4{ grid-row-end:4;}
        #grid-row-end-4 .block--pink { grid-row-end: 4; }
	    `}</style>
    <LayoutSingle
      property="grid-row-end"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-row-end"
      description=<React.Fragment>
        <p>
          Defines the <strong>row end</strong> position of a{" "}
          <strong>grid item</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-row-end: auto;`}
        >
          <p>
            In this <strong>3-column setup</strong>, the grid item is
            automatically placed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-row-end "
            id="grid-row-end-auto"
          >
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
            <p className="block block--orange">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row-end: 3;`}>
          <p>
            The target grid item ends just before the <strong>third</strong>{" "}
            row.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row-end " id="grid-row-end-3">
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
            <p className="block block--orange">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row-end: 4;`}>
          <p>
            The target grid item ends just before the <strong>fourth</strong>{" "}
            row, which automatically creates a <em>third</em> row.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row-end " id="grid-row-end-4">
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
            <p className="block block--orange">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridRowEnd;
