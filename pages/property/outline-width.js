import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const OutlineWidth = () => (
  <React.Fragment>
    <style>{`
        .outline-width { outline-style: solid; }
        #outline-width-medium{ outline-width:medium;}
        #outline-width-1px{ outline-width:1px;}
	    `}</style>
    <LayoutSingle
      property="outline-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/outline-width"
      description=<React.Fragment>
        <p>Defines the width of the element's outlines.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`outline-width: medium;`}
        >
          <p>
            Defines the width of all outlines to <strong>medium</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-width "
            id="outline-width-medium"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`outline-width: 1px;`}>
          <p>
            Defines the width of all outlines to <strong>1px</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div outline-width "
            id="outline-width-1px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default OutlineWidth;
