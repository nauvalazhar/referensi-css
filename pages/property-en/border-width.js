import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BorderWidth = () => (
  <React.Fragment>
    <style>{`
        .border-width { border-style: solid; }
        #border-width-1px{ border-width:1px;}
        #border-width-2px-0{ border-width:2px 0;}
	    `}</style>
    <LayoutSingle
      property="border-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-width"
      description=<React.Fragment>
        <p>Defines the width of the element's borders.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`border-width: 1px;`}>
          <p>
            Defines the width of <strong>all</strong> borders to 1px.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-width "
            id="border-width-1px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-width: 2px 0;`}>
          <p>
            Defines the top and bottom borders to 2px, the left and right to 0.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-width "
            id="border-width-2px-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderWidth;
