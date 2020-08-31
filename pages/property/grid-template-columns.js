import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridTemplateColumns = () => (
  <React.Fragment>
    <style>{`
        .grid-template-columns { display: grid;padding: 0; }
        #grid-template-columns-none{ grid-template-columns:none;}
        #grid-template-columns-auto-auto-auto{ grid-template-columns:auto auto auto;}
        #grid-template-columns-80px-auto-1rem{ grid-template-columns:80px auto 1rem;}
        #grid-template-columns-40px-1fr-2fr{ grid-template-columns:40px 1fr 2fr;}
	    `}</style>
    <LayoutSingle
      property="grid-template-columns"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-template-columns"
      description=<React.Fragment>
        <p>
          Defines the columns of a <strong>grid container</strong>. You can
          specify the width of a column by using a keyword (like{" "}
          <code>auto</code>) or a length (like <code>10px</code>). The number of
          columns is determined by the number of <strong>values</strong> defined
          in the space-separated list.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-template-columns: none;`}
        >
          <p>No columns are defined, so you only have one.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-columns "
            id="grid-template-columns-none"
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
          declaration={`grid-template-columns: auto auto auto;`}
        >
          <p>
            You can use the keyword <code>auto</code> so that each column
            resizes itself automatically.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-columns "
            id="grid-template-columns-auto-auto-auto"
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
          declaration={`grid-template-columns: 80px auto 1rem;`}
        >
          <p>
            You can mix the <strong>units</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-columns "
            id="grid-template-columns-80px-auto-1rem"
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
          declaration={`grid-template-columns: 40px 1fr 2fr;`}
        >
          <p>
            You can use the <code>fr</code> <strong>flex unit</strong> to
            distribute the <strong>remaining space</strong> across all flex
            columns.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-columns "
            id="grid-template-columns-40px-1fr-2fr"
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
    </LayoutSingle>
  </React.Fragment>
);

export default GridTemplateColumns;
