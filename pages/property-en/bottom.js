import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Bottom = () => (
  <React.Fragment>
    <style>{`
        .bottom { background: #310736;height: 200px;position: relative; }
        .bottom p { color: #fff; }.bottom .natural { width: 200px; }.bottom .actual { animation-direction: alternate;animation-duration: 2s;animation-iteration-count: infinite;position: absolute;width: 200px; }
        #bottom-auto{ bottom:auto;}
        #bottom-auto .actual { animation-name: fadeIn;transform: translateY(-100%); }
        #bottom-20px{ bottom:20px;}
        #bottom-20px .actual { animation-name: fadeIn;bottom: 20px;position: relative;transform: translateY(-100%); }
        #bottom-0{ bottom:0;}
        #bottom-0 .actual { bottom: 0; }
	    `}</style>
    <LayoutSingle
      property="bottom"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/bottom"
      description=<React.Fragment>
        <p>
          Defines the position of the element according to its{" "}
          <strong>bottom</strong> edge.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`bottom: auto;`}>
          <p>
            The element will remain in its <strong>natural</strong> position.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div bottom " id="bottom-auto">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`bottom: 20px;`}>
          <p>
            If the element is in position <strong>relative</strong>, the element
            will move <em>upwards</em> by the amount defined by the{" "}
            <strong>bottom</strong> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div bottom " id="bottom-20px">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`bottom: 0;`}>
          <p>
            If the element is in position <strong>absolute</strong>, the element
            will position itself from the <em>bottom</em> of the first
            positioned <strong>ancestor</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div bottom " id="bottom-0">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Bottom;
