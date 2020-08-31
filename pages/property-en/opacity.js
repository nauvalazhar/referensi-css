import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Opacity = () => (
  <React.Fragment>
    <style>{`
        .opacity { background: #310736;padding: 1em; }
        #opacity-0 .block { opacity: 0; }
        #opacity-03 .block { opacity: 0.3; }
	    `}</style>
    <LayoutSingle
      property="opacity"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/opacity"
      description=<React.Fragment>
        <p>Defines how opaque the element is.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`opacity: 1;`}>
          <p>
            The element is <strong>fully opaque</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div opacity " id="opacity-1">
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`opacity: 0;`}>
          <p>
            The element is <strong>fully transparent</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div opacity " id="opacity-0">
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`opacity: 0.3;`}>
          <p>
            Any value between <strong>0</strong> (zero) and <strong>1</strong>{" "}
            (one) will make the element <strong>semi transparent</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div opacity " id="opacity-03">
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Opacity;
