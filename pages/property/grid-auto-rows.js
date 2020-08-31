import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridAutoRows = () => (
  <React.Fragment>
    <style>{`
        .grid-auto-rows { display: grid;padding: 0; }
        #grid-auto-rows-auto{ grid-auto-rows:auto;}
        #grid-auto-rows-100px{ grid-auto-rows:100px;}
        #grid-auto-rows-100px{ grid-template-areas: "header header header" "sidebar main main" "footer footer footer";grid-template-rows: 50px 200px; }
        #grid-auto-rows-100px .block--alpha { grid-area: header; }#grid-auto-rows-100px .block--beta { grid-area: sidebar; }#grid-auto-rows-100px .block--pink { grid-area: main; }#grid-auto-rows-100px .block--yellow { grid-area: footer; }
	    `}</style>
    <LayoutSingle
      property="grid-auto-rows"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-rows"
      description=<React.Fragment>
        <p>
          Defines the size of grid rows that were created <em>implicitly</em>:
          it means that <code>grid-auto-rows</code> targets the rows that were{" "}
          <em>not</em> defined with <code>grid-template-rows</code> or{" "}
          <code>grid-template-areas</code>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-auto-rows: auto;`}
        >
          <p>
            The implicity-created rows have an <code>auto</code> size.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-auto-rows "
            id="grid-auto-rows-auto"
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
        <SectionExample.Property declaration={`grid-auto-rows: 100px;`}>
          <p>
            Here we combine{" "}
            <code>
              grid-template-areas: "header header header" "sidebar main main"
              "footer footer footer"
            </code>{" "}
            with <code>grid-template-rows: 50px 200px</code>.
          </p>
          <p>
            In this situation, the <code>grid-template-areas</code> defines{" "}
            <strong>3 rows</strong>, while the <code>grid-template-rows</code>{" "}
            only defines <strong>2</strong> row heights.
          </p>
          <p>
            As a result, the third row height (the footer) takes its value from
            the <code>grid-auto-rows</code> property: <code>100px</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-auto-rows "
            id="grid-auto-rows-100px"
          >
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
            <p className="block block--pink">Main</p>
            <p className="block block--yellow">Footer: 100px high</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridAutoRows;
