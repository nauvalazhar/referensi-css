import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridTemplateRows = () => (
  <React.Fragment>
    <style>{`
        .grid-template-rows { display: grid;grid-template-columns: auto auto;padding: 0; }
        #grid-template-rows-none{ grid-template-rows:none;}
        #grid-template-rows-120px-auto-3rem{ grid-template-rows:120px auto 3rem;}
        #grid-template-rows-20px-1fr-2fr{ grid-template-rows:20px 1fr 2fr;}
	    `}</style>
    <LayoutSingle
      property="grid-template-rows"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-template-rows"
      description=<React.Fragment>
        <p>
          Defines the rows of a <strong>grid container</strong>. You can specify
          the width of a row by using a keyword (like <code>auto</code>) or a
          length (like <code>10px</code>). The number of rows is determined by
          the number of <strong>values</strong> defined in the space-separated
          list.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-template-rows: none;`}
        >
          <p>No rows are defined.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-rows "
            id="grid-template-rows-none"
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
          declaration={`grid-template-rows: 120px auto 3rem;`}
        >
          <p>
            You can mix the <strong>units</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-rows "
            id="grid-template-rows-120px-auto-3rem"
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
          declaration={`grid-template-rows: 20px 1fr 2fr;`}
        >
          <p>
            You can use the <code>fr</code> <strong>flex unit</strong> to
            distribute the <strong>remaining space</strong> across all flex
            rows.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-rows "
            id="grid-template-rows-20px-1fr-2fr"
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

export default GridTemplateRows;
