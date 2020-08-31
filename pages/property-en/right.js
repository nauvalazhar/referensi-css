import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Right = () => (
  <React.Fragment>
    <style>{`
        .right { background: #310736;height: 200px;position: relative; }
        .right p { color: #fff; }.right .natural { width: 200px; }.right .actual { animation-direction: alternate;animation-duration: 2s;animation-iteration-count: infinite;position: absolute;width: 200px; }
        #right-auto{ right:auto;}
        #right-auto .actual { animation-name: fadeIn;transform: translateY(-100%); }
        #right-80px .actual { animation-name: fadeIn;right: 80px;position: relative;transform: translateY(-100%); }
        #right--20px .actual { animation-name: fadeIn;right: -20px;transform: translateY(-100%); }
	    `}</style>
    <LayoutSingle
      property="right"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/right"
      description=<React.Fragment>
        <p>
          Defines the position of the element according to its{" "}
          <strong>right</strong> edge.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`right: auto;`}>
          <p>
            The element will remain in its <strong>natural</strong> position.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div right " id="right-auto">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`right: 80px;`}>
          <p>
            If the element is in position <strong>relative</strong>, the element
            will move <em>right</em> by the amount defined by the{" "}
            <strong>right</strong> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div right " id="right-80px">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`right: -20px;`}>
          <p>
            If the element is in position <strong>absolute</strong>, the element
            will position itself from the <em>right</em> of the first positioned{" "}
            <strong>ancestor</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div right " id="right--20px">
            <p>Parent container</p>
            <div className="natural">Natural position</div>
            <div className="actual">Actual position</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Right;
