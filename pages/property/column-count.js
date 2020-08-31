import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const ColumnCount = () => (
  <React.Fragment>
    <style>{`
        #column-count-auto{ column-count:auto;}
        #column-count-3{ column-count:3;}
        #column-count-3{ -moz-column-count: 3;-webkit-column-count: 3; }
	    `}</style>
    <LayoutSingle
      property="column-count"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/column-count"
      description=<React.Fragment>
        <p>Defines the number of columns of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`column-count: auto;`}
        >
          <p>
            Removes any columns from the element (unless another{" "}
            <code>column-</code> property was set).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div column-count "
            id="column-count-auto"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--beta">Foo bar</p>
            <p className="block block--pink">CSS Reference</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`column-count: 3;`}>
          <p>
            When using an <strong>integer</strong> value, the element will
            distribute its child elements across the number of columns defined.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div column-count " id="column-count-3">
            <p className="block block--alpha">Hello world</p>
            <p className="block block--beta">Foo bar</p>
            <p className="block block--pink">CSS Reference</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default ColumnCount;
