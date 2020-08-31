import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TransitionDuration = () => (
  <React.Fragment>
    <style>{`
        .transition-duration { padding: 0; }
        .transition-duration:hover .square { background: hsl(348, 100%, 61%);color: #fff;transform: translateX(200%); }
        .transition-duration .square { transition-timing-function: linear;transition-property: background transform; }
        #transition-duration-0s .square { transition-duration: 0s; }
        #transition-duration-12s .square { transition-duration: 1.2s; }
        #transition-duration-2400ms .square { transition-duration: 2400ms; }
	    `}</style>
    <LayoutSingle
      property="transition-duration"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/transition-duration"
      description=<React.Fragment>
        <p>Defines how long the transition lasts.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`transition-duration: 0s;`}
        >
          <p>
            The transition will last <strong>zero seconds</strong>, and is thus{" "}
            <strong>instant</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-duration "
            id="transition-duration-0s"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition-duration: 1.2s;`}>
          <p>
            You can use <strong>decimal</strong> values in{" "}
            <strong>seconds</strong> with the keyword <code>s</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-duration "
            id="transition-duration-12s"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition-duration: 2400ms;`}>
          <p>
            You can use <strong>milliseconds</strong> instead of seconds, with
            the keyword <code>ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-duration "
            id="transition-duration-2400ms"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TransitionDuration;
