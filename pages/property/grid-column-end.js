import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridColumnEnd = () => (
  <React.Fragment>
    <style>{`
        .grid-column-end { display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 0; }
        #grid-column-end-auto{ grid-column-end:auto;}
        #grid-column-end-2{ grid-column-end:2;}
        #grid-column-end-2 .block--pink { grid-column-end: 2; }
        #grid-column-end-1{ grid-column-end:1;}
        #grid-column-end-1 .block--pink { grid-column-end: 1; }
	    `}</style>
    <LayoutSingle
      property="grid-column-end"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-column-end"
      description=<React.Fragment>
        <p>
          Defines the <strong>column end</strong> position of a{" "}
          <strong>grid item</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-column-end: auto;`}
        >
          <p>
            In this <strong>3-column setup</strong>, the grid item is
            automatically placed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-end "
            id="grid-column-end-auto"
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
        <SectionExample.Property declaration={`grid-column-end: 2;`}>
          <p>
            The target grid item ends just before the <strong>second</strong>{" "}
            column.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-end "
            id="grid-column-end-2"
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
        <SectionExample.Property declaration={`grid-column-end: 1;`}>
          <p>
            The target grid item ends just before the <strong>first</strong>{" "}
            column, which automatically creates a <em>fourth</em> column.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-end "
            id="grid-column-end-1"
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

export default GridColumnEnd;
