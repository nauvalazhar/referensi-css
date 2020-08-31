import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const GridColumn = () => (
  <React.Fragment>
    <style>{`
        .grid-column { display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 0; }
        #grid-column-auto-auto{ grid-column:auto auto;}
        #grid-column-1--3{ grid-column:1 / 3;}
        #grid-column-1--3 .block--pink { grid-column: 1 / 3; }
        #grid-column-span-3{ grid-column:span 3;}
        #grid-column-span-3 .block--pink { grid-column: span 3; }
        #grid-column-1--span-4{ grid-column:1 / span 4;}
        #grid-column-1--span-4 .block--pink { grid-column: 1 / span 4; }
        #grid-column-main{ grid-column:main;}
        #grid-column-main{ grid-template-columns: 3fr 70fr;grid-template-rows: 50px 200px 50px;grid-template-areas: "header header header" "sidebar main main" "sidebar main main" "sidebar footer footer"; }
        #grid-column-main .block--alpha { grid-area: header; }#grid-column-main .block--beta { grid-area: sidebar; }#grid-column-main .block--yellow { grid-area: main; }#grid-column-main .block--purple { grid-area: footer; }#grid-column-main .block--pink { grid-column: main; }
	    `}</style>
    <LayoutSingle
      property="grid-column"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-column"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/grid-column-start`}>
              <a className="hash" data-property-name="grid-column-start">
                grid-column-start
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/grid-column-end`}>
              <a className="hash" data-property-name="grid-column-end">
                grid-column-end
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
          declaration={`grid-column: auto auto;`}
        >
          <p>The grid item's column start and end are automatically set.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column "
            id="grid-column-auto-auto"
          >
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
        <SectionExample.Property declaration={`grid-column: 1 / 3;`}>
          <p>
            The grid item starts before the first column and ends just before
            the third one.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column "
            id="grid-column-1--3"
          >
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
        <SectionExample.Property declaration={`grid-column: span 3;`}>
          <p>
            The grid item spans <strong>3 columns</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column "
            id="grid-column-span-3"
          >
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
        <SectionExample.Property declaration={`grid-column: 1 / span 4;`}>
          <p>
            The grid items starts before the first column and spans for{" "}
            <strong>4 columns</strong>, creating a new one in the process.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column "
            id="grid-column-1--span-4"
          >
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
        <SectionExample.Property declaration={`grid-column: main;`}>
          <p>
            You can use an <strong>area name</strong> to "copy" its column start
            and end positions.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column "
            id="grid-column-main"
          >
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

export default GridColumn;
