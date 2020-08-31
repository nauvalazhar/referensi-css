import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const GridTemplate = () => (
  <React.Fragment>
    <style>{`
        .grid-template { display: grid;grid-template-columns: auto auto auto;padding: 0; }
        #grid-template-none{ grid-template:none;}
        #grid-template-200px-1fr--100px-auto-3rem{ grid-template:200px 1fr / 100px auto 3rem;}
        #grid-template-header-header-header-50px-sidebar-main-main-200px--100px-auto{ grid-template:"header header header" 50px "sidebar main main" 200px / 100px auto;}
        #grid-template-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--alpha { grid-area: header; }#grid-template-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--beta { grid-area: sidebar; }#grid-template-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--pink { grid-area: main; }
	    `}</style>
    <LayoutSingle
      property="grid-template"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-template"
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
          and{" "}
          <code className="shorthand">
            <Link href={`/property/grid-template-area`}>
              <a className="hash" data-property-name="grid-template-area">
                grid-template-area
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
          declaration={`grid-template: none;`}
        >
          <p>No rows, columns, or areas are defined.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template "
            id="grid-template-none"
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
        <SectionExample.Property
          declaration={`grid-template: 200px 1fr / 100px auto 3rem;`}
        >
          <p>
            You can define <strong>rows</strong> first, <strong>columns</strong>{" "}
            second, by splitting them with a slash <code>/</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template "
            id="grid-template-200px-1fr--100px-auto-3rem"
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
        <SectionExample.Property
          declaration={`grid-template: "header header header" 50px "sidebar main main" 200px / 100px auto;`}
        >
          <p>
            You can define both <strong>areas</strong> <em>and</em>{" "}
            <strong>rows</strong> and <strong>columns</strong> dimensions. In
            this case, each set of areas have a row size attached to it. The
            first row is <code>50px</code> high, the second one is{" "}
            <code>200px</code> high. The sidebar column is <code>100px</code>{" "}
            wide, while the main column's width is set to <code>auto</code> and
            takes up the remaining width.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template "
            id="grid-template-header-header-header-50px-sidebar-main-main-200px--100px-auto"
          >
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
            <p className="block block--pink">Main</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridTemplate;
