import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const GridArea = () => (
  <React.Fragment>
    <style>{`
        .grid-area { display: grid;grid-template-columns: 1fr 1fr 1fr;padding: 0; }
        #grid-area-auto{ grid-area:auto;}
        #grid-area-main{ grid-area:main;}
        #grid-area-main{ grid-template-columns: 3fr 70fr;grid-template-rows: 50px 200px 50px;grid-template-areas: "header header header" "sidebar main main" "sidebar main main" "sidebar footer footer"; }
        #grid-area-main .block--alpha { grid-area: header; }#grid-area-main .block--beta { grid-area: sidebar; }#grid-area-main .block--purple { grid-area: footer; }#grid-area-main .block--pink { grid-row: main; }
	    `}</style>
    <LayoutSingle
      property="grid-area"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-area"
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
          <code className="shorthand">
            <Link href={`/property/grid-column-start`}>
              <a className="hash" data-property-name="grid-column-start">
                grid-column-start
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/grid-row-end`}>
              <a className="hash" data-property-name="grid-row-end">
                grid-row-end
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
          declaration={`grid-area: auto;`}
        >
          <p>
            The grid item's column and row starts and ends are automatically
            set.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-area " id="grid-area-auto">
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
        <SectionExample.Property declaration={`grid-area: main;`}>
          <p>
            You can use an <strong>area name</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-area " id="grid-area-main">
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
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

export default GridArea;
