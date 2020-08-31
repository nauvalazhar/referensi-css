import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridAutoColumns = () => (
  <React.Fragment>
    <style>{`
        .grid-auto-columns { display: grid;padding: 0; }
        #grid-auto-columns-auto{ grid-auto-columns:auto;}
        #grid-auto-columns-100px{ grid-auto-columns:100px;}
        #grid-auto-columns-100px{ grid-template-areas: "header header header" "sidebar main main";grid-template-columns: 50px 200px; }
        #grid-auto-columns-100px .block--alpha { grid-area: header; }#grid-auto-columns-100px .block--beta { grid-area: sidebar; }#grid-auto-columns-100px .block--pink { grid-area: main; }
	    `}</style>
    <LayoutSingle
      property="grid-auto-columns"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-columns"
      description=<React.Fragment>
        <p>
          Defines the size of grid columns that were created <em>implicitly</em>
          : it means that <code>grid-auto-columns</code> targets the columns
          that were <em>not</em> defined with <code>grid-template-columns</code>{" "}
          or <code>grid-template-areas</code>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-auto-columns: auto;`}
        >
          <p>
            The implicity-created columns have an <code>auto</code> size.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-auto-columns "
            id="grid-auto-columns-auto"
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
        <SectionExample.Property declaration={`grid-auto-columns: 100px;`}>
          <p>
            Here we combine{" "}
            <code>
              grid-template-areas: "header header header" "sidebar main main"
            </code>{" "}
            with <code>grid-template-columns: 50px 200px</code>.
          </p>
          <p>
            In this situation, the <code>grid-template-areas</code> defines{" "}
            <strong>3 columns</strong>, while the{" "}
            <code>grid-template-columns</code> only defines <strong>2</strong>{" "}
            column widths.
          </p>
          <p>
            As a result, the third column width takes its value from the{" "}
            <code>grid-auto-columns</code> property: <code>100px</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-auto-columns "
            id="grid-auto-columns-100px"
          >
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
            <p className="block block--pink">Main</p>
            <p className="block block--yellow">50px</p>
            <p className="block block--purple">200px</p>
            <p className="block block--orange">100px</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridAutoColumns;
