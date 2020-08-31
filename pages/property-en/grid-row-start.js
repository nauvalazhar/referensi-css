import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridRowStart = () => (
  <React.Fragment>
    <style>{`
        .grid-row-start { display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 0; }
        #grid-row-start-auto{ grid-row-start:auto;}
        #grid-row-start-2{ grid-row-start:2;}
        #grid-row-start-2 .block--pink { grid-row-start: 2; }
        #grid-row-start-3{ grid-row-start:3;}
        #grid-row-start-3 .block--pink { grid-row-start: 3; }
	    `}</style>
    <LayoutSingle
      property="grid-row-start"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-row-start"
      description=<React.Fragment>
        <p>
          Defines the <strong>row start</strong> position of a{" "}
          <strong>grid item</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-row-start: auto;`}
        >
          <p>
            In this <strong>3-column setup</strong>, the grid item is
            automatically placed on the first row.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-row-start "
            id="grid-row-start-auto"
          >
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--orange">Item</p>
            <p className="block block--purple">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row-start: 2;`}>
          <p>
            The target grid item is placed on the <strong>second</strong> row.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-row-start "
            id="grid-row-start-2"
          >
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--orange">Item</p>
            <p className="block block--purple">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row-start: 3;`}>
          <p>
            The target grid item is placed <em>outside</em> the grid, in an
            auto-generated <strong>third</strong> row.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-row-start "
            id="grid-row-start-3"
          >
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--orange">Item</p>
            <p className="block block--purple">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridRowStart;
