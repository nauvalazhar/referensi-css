import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const ColumnWidth = () => (
  <React.Fragment>
    <style>{`
        #column-width-auto{ column-width:auto;}
        #column-width-10px{ column-width:10px;}
        #column-width-10px{ -moz-column-width: 10px;-webkit-column-width: 10px; }
	    `}</style>
    <LayoutSingle
      property="column-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/column-width"
      description=<React.Fragment>
        <p>Defines the number of columns of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`column-width: auto;`}
        >
          <p>
            The element will <strong>not</strong> distribute its child elements
            into columns, unlesse a{" "}
            <code className="shorthand">
              <a href={`http://cssreference.io/#column-count`}>column-count</a>
            </code>{" "}
            value is defined. In that case, the column width will be infered
            from the column count.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div column-width "
            id="column-width-auto"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--beta">Foo bar</p>
            <p className="block block--pink">CSS Reference</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`column-width: 10px;`}>
          <p>
            You can use <strong>pixel</strong> values for the column width.
          </p>
          <p>
            The number of columns will be the minimum needed to distribute all
            the content across the element.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div column-width "
            id="column-width-10px"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--beta">Foo bar</p>
            <p className="block block--pink">CSS Reference</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default ColumnWidth;
