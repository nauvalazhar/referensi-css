import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridColumnGap = () => (
  <React.Fragment>
    <style>{`
        .grid-column-gap { display: grid;grid-template-columns: auto auto auto;padding: 0; }
        #grid-column-gap-0{ grid-column-gap:0;}
        #grid-column-gap-10px{ grid-column-gap:10px;}
        #grid-column-gap-3rem{ grid-column-gap:3rem;}
        #grid-column-gap-20{ grid-column-gap:20%;}
	    `}</style>
    <LayoutSingle
      property="grid-column-gap"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-column-gap"
      description=<React.Fragment>
        <p>
          Defines the gutter between the columns of a{" "}
          <strong>grid container</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-column-gap: 0;`}
        >
          <p>Removes the gap.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-gap "
            id="grid-column-gap-0"
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
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-column-gap: 10px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-gap "
            id="grid-column-gap-10px"
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
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-column-gap: 3rem;`}>
          <p>
            You can use <strong>(r)em</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-gap "
            id="grid-column-gap-3rem"
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
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-column-gap: 20%;`}>
          <p>
            You can use <strong>percentage</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-column-gap "
            id="grid-column-gap-20"
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
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridColumnGap;
