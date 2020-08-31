import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridColumnStart = () => (
  <React.Fragment>
    <style>{`
        .grid-column-start { display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 0; }
        #grid-column-start-auto{ grid-column-start:auto;}
        #grid-column-start-2{ grid-column-start:2;}
        #grid-column-start-2 .block--pink { grid-column-start: 2; }
        #grid-column-start-4{ grid-column-start:4;}
        #grid-column-start-4 .block--pink { grid-column-start: 4; }
	    `}</style>
    <LayoutSingle
      property="grid-column-start"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-column-start"
      description=<React.Fragment>
        <p>
          Defines the <strong>column start</strong> position of a{" "}
          <strong>grid item</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-column-start: auto;`}
        >
          <p>
            In this <strong>3-column setup</strong>, the grid item is
            automatically placed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-start "
            id="grid-column-start-auto"
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
        <SectionExample.Property declaration={`grid-column-start: 2;`}>
          <p>
            The target grid item is placed on the <strong>second</strong>{" "}
            column.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-start "
            id="grid-column-start-2"
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
        <SectionExample.Property declaration={`grid-column-start: 4;`}>
          <p>
            The target grid item is placed <em>outside</em> the grid, in an
            auto-generated <strong>fourth</strong> column.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-start "
            id="grid-column-start-4"
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

export default GridColumnStart;
