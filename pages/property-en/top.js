import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Top = () => (
  <React.Fragment>
    <style>{`
        .top { background: #310736;height: 200px;position: relative; }
        .top p { color: #fff; }.top .natural { width: 200px; }.top .actual { animation-direction: alternate;animation-duration: 2s;animation-iteration-count: infinite;position: absolute;width: 200px; }
        #top-auto{ top:auto;}
        #top-auto .actual { animation-name: fadeIn;transform: translateY(-100%); }
        #top-20px{ top:20px;}
        #top-20px .actual { animation-name: fadeIn;position: relative;top: 20px;transform: translateY(-100%); }
        #top-0{ top:0;}
        #top-0 .actual { top: 0; }
	    `}</style>
    <LayoutSingle
      property="top"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/top"
      description=<React.Fragment>
        <p>Defines the position of the element according to its top edge.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`top: auto;`}>
          <p>
            The element will remain in its <strong>natural</strong> position.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div top " id="top-auto">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`top: 20px;`}>
          <p>
            If the element is in position <strong>relative</strong>, the element
            will move <em>downwards</em> by the amount defined by the{" "}
            <strong>top</strong> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div top " id="top-20px">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`top: 0;`}>
          <p>
            If the element is in position <strong>absolute</strong>, the element
            will position itself from the <em>top</em> of the first positioned{" "}
            <strong>ancestor</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div top " id="top-0">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Top;
