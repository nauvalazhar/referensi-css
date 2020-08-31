import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Left = () => (
  <React.Fragment>
    <style>{`
        .left { background: #310736;height: 200px;position: relative; }
        .left p { color: #fff; }.left .natural { width: 200px; }.left .actual { animation-direction: alternate;animation-duration: 2s;animation-iteration-count: infinite;position: absolute;width: 200px; }
        #left-auto{ left:auto;}
        #left-auto .actual { animation-name: fadeIn;transform: translateY(-100%); }
        #left-80px .actual { animation-name: fadeIn;left: 80px;position: relative;transform: translateY(-100%); }
        #left--20px .actual { animation-name: fadeIn;left: -20px;transform: translateY(-100%); }
	    `}</style>
    <LayoutSingle
      property="left"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/left"
      description=<React.Fragment>
        <p>
          Defines the position of the element according to its{" "}
          <strong>left</strong> edge.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`left: auto;`}>
          <p>
            The element will remain in its <strong>natural</strong> position.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div left " id="left-auto">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`left: 80px;`}>
          <p>
            If the element is in position <strong>relative</strong>, the element
            will move <em>left</em> by the amount defined by the{" "}
            <strong>left</strong> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div left " id="left-80px">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`left: -20px;`}>
          <p>
            If the element is in position <strong>absolute</strong>, the element
            will position itself from the <em>left</em> of the first positioned{" "}
            <strong>ancestor</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div left " id="left--20px">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Left;
