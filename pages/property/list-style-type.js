import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const ListStyleType = () => (
  <React.Fragment>
    <style>{`
        .list-style-type ul { margin-left: 1em; }
        #list-style-type-disc{ list-style-type:disc;}
        #list-style-type-disc ul { list-style-type: disc; }
        #list-style-type-circle{ list-style-type:circle;}
        #list-style-type-circle ul { list-style-type: circle; }
        #list-style-type-square{ list-style-type:square;}
        #list-style-type-square ul { list-style-type: square; }
        #list-style-type-decimal{ list-style-type:decimal;}
        #list-style-type-decimal ul { list-style-type: decimal; }
        #list-style-type-none{ list-style-type:none;}
        #list-style-type-none ul { list-style-type: none; }
	    `}</style>
    <LayoutSingle
      property="list-style-type"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/list-style-type"
      description=<React.Fragment>
        <p>
          Defines the <strong>type</strong> of a list item's{" "}
          <strong>bullet point</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`list-style-type: disc;`}
        >
          <p>
            The list items will use a <strong>disc</strong> as their bullet
            point.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-type "
            id="list-style-type-disc"
          >
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`list-style-type: circle;`}>
          <p>
            The list items will use a <strong>circle</strong> as their bullet
            point.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-type "
            id="list-style-type-circle"
          >
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`list-style-type: square;`}>
          <p>
            The list items will use a <strong>square</strong> as their bullet
            point.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-type "
            id="list-style-type-square"
          >
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`list-style-type: decimal;`}>
          <p>
            The list items will use a <strong>decimal</strong> as their bullet
            point.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-type "
            id="list-style-type-decimal"
          >
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`list-style-type: none;`}>
          <p>
            The list items will have <strong>no</strong> bullet point.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-type "
            id="list-style-type-none"
          >
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default ListStyleType;
