import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const ColumnGap = () => (
  <React.Fragment>
    <style>{`
        .column-gap { column-count: 3;-moz-column-count: 3;-webkit-column-count: 3; }
        #column-gap-normal{ column-gap:normal;}
        #column-gap-2px{ column-gap:2px;}
        #column-gap-2px{ -moz-column-gap: 2px;-webkit-column-gap: 2px; }
	    `}</style>
    <LayoutSingle
      property="column-gap"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/column-gap"
      description=<React.Fragment>
        <p>Defines the gap between the columns of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`column-gap: normal;`}
        >
          <p>
            The gap between the columns is set to the browser's{" "}
            <strong>default</strong> value, which usually is{" "}
            <strong>1em</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div column-gap "
            id="column-gap-normal"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--beta">Foo bar</p>
            <p className="block block--pink">CSS Reference</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`column-gap: 2px;`}>
          <p>
            You can use <strong>pixel</strong> values for the gap.
          </p>
          <p>
            Note that the gap only appears <em>between</em> columns, and not on
            the exterior sides of the edge columns.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div column-gap " id="column-gap-2px">
            <p className="block block--alpha">Hello world</p>
            <p className="block block--beta">Foo bar</p>
            <p className="block block--pink">CSS Reference</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default ColumnGap;
