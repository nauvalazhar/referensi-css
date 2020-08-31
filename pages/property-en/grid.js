import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Grid = () => (
  <React.Fragment>
    <style>{`
        .grid { display: grid;padding: 0; }
        #grid-header-header-header-50px-sidebar-main-main-200px--100px-auto{ grid:"header header header" 50px "sidebar main main" 200px / 100px auto;}
        #grid-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--alpha { grid-area: header; }#grid-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--beta { grid-area: sidebar; }#grid-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--pink { grid-area: main; }
        #grid-200px-100px--auto-flow-30{ grid:200px 100px / auto-flow 30%;}
        #grid-auto-flow-50px--200px-100px{ grid:auto-flow 50px / 200px 100px;}
	    `}</style>
    <LayoutSingle
      property="grid"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/grid-template-rows`}>
              <a className="hash" data-property-name="grid-template-rows">
                grid-template-rows
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/grid-template-columns`}>
              <a className="hash" data-property-name="grid-template-columns">
                grid-template-columns
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/grid-template-areas`}>
              <a className="hash" data-property-name="grid-template-areas">
                grid-template-areas
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/grid-auto-rows`}>
              <a className="hash" data-property-name="grid-auto-rows">
                grid-auto-rows
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/grid-auto-columns`}>
              <a className="hash" data-property-name="grid-auto-columns">
                grid-auto-columns
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/grid-auto-flow`}>
              <a className="hash" data-property-name="grid-auto-flow">
                grid-auto-flow
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          declaration={`grid: "header header header" 50px "sidebar main main" 200px / 100px auto;`}
        >
          <p>
            You can use it as <code>grid-template</code> by setting all{" "}
            <strong>explicit</strong> rows, columns, and areas.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid "
            id="grid-header-header-header-50px-sidebar-main-main-200px--100px-auto"
          >
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
            <p className="block block--pink">Main</p>
            <p className="block block--purple">Other</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`grid: 200px 100px / auto-flow 30%;`}
        >
          <p>
            You can combine <code>grid-template-rows</code> with{" "}
            <code>grid-auto-columns</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid "
            id="grid-200px-100px--auto-flow-30"
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
            <p className="block block--purple">
              <strong>5.</strong> Five
            </p>
            <p className="block block--orange">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`grid: auto-flow 50px / 200px 100px;`}
        >
          <p>
            You can combine <code>grid-auto-rows</code> with{" "}
            <code>grid-template-columns</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid "
            id="grid-auto-flow-50px--200px-100px"
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
            <p className="block block--purple">
              <strong>5.</strong> Five
            </p>
            <p className="block block--orange">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Grid;
