import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const GridRow = () => (
  <React.Fragment>
    <style>{`
        .grid-row { display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 0; }
        #grid-row-auto-auto{ grid-row:auto auto;}
        #grid-row-1--3{ grid-row:1 / 3;}
        #grid-row-1--3 .block--pink { grid-row: 1 / 3; }
        #grid-row-span-3{ grid-row:span 3;}
        #grid-row-span-3 .block--pink { grid-row: span 3; }
        #grid-row-1--span-4{ grid-row:1 / span 4;}
        #grid-row-1--span-4 .block--pink { grid-row: 1 / span 4; }
        #grid-row-header{ grid-row:header;}
        #grid-row-header{ grid-template-columns: 3fr 70fr;grid-template-rows: 50px 200px 50px;grid-template-areas: "header header header" "sidebar main main" "sidebar main main" "sidebar footer footer"; }
        #grid-row-header .block--alpha { grid-area: header; }#grid-row-header .block--beta { grid-area: sidebar; }#grid-row-header .block--yellow { grid-area: main; }#grid-row-header .block--purple { grid-area: footer; }#grid-row-header .block--pink { grid-row: header; }
	    `}</style>
    <LayoutSingle
      property="grid-row"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-row"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/grid-row-start`}>
              <a className="hash" data-property-name="grid-row-start">
                grid-row-start
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/grid-row-end`}>
              <a className="hash" data-property-name="grid-row-end">
                grid-row-end
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-row: auto auto;`}
        >
          <p>The grid item's row start and end are automatically set.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row " id="grid-row-auto-auto">
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row: 1 / 3;`}>
          <p>
            The grid item starts before the first row and ends just before the
            third one.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row " id="grid-row-1--3">
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row: span 3;`}>
          <p>
            The grid item spans <strong>3 rows</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row " id="grid-row-span-3">
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row: 1 / span 4;`}>
          <p>
            The grid items starts before the first row and spans for{" "}
            <strong>4 rows</strong>, creating a new one in the process.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row " id="grid-row-1--span-4">
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
            <p className="block block--alpha">Item</p>
            <p className="block block--beta">Item</p>
            <p className="block block--yellow">Item</p>
            <p className="block block--purple">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-row: header;`}>
          <p>
            You can use an <strong>area name</strong> to "copy" its row start
            and end positions.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-row " id="grid-row-header">
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
            <p className="block block--yellow">Main</p>
            <p className="block block--purple">Footer</p>
            <p className="block block--pink">
              <strong>Target</strong>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridRow;
