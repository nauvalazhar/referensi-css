import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TransitionDelay = () => (
  <React.Fragment>
    <style>{`
        .transition-delay { padding: 0; }
        .transition-delay:hover .square { background: hsl(348, 100%, 61%);color: #fff;transform: translateX(200%); }
        .transition-delay .square { transition-duration: 1s;transition-timing-function: linear;transition-property: background transform; }
        #transition-delay-12s .square { transition-delay: 1.2s; }
        #transition-delay-2400ms .square { transition-delay: 2400ms; }
        #transition-delay--500ms .square { transition-delay: -500ms; }
	    `}</style>
    <LayoutSingle
      property="transition-delay"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/transition-delay"
      description=<React.Fragment>
        <p>
          Defines how long the transition has to wait before{" "}
          <strong>starting</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`transition-delay: 0s;`}
        >
          <p>
            The transition will wait <strong>zero seconds</strong>, and thus
            start right away.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-delay "
            id="transition-delay-0s"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition-delay: 1.2s;`}>
          <p>
            You can use <strong>decimal</strong> values in{" "}
            <strong>seconds</strong> with the keyword <code>s</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-delay "
            id="transition-delay-12s"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition-delay: 2400ms;`}>
          <p>
            You can use <strong>milliseconds</strong> instead of seconds, with
            the keyword <code>ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-delay "
            id="transition-delay-2400ms"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition-delay: -500ms;`}>
          <p>
            You can use <strong>negative values</strong>: the transition will
            start as if it had <em>already been playing</em> for{" "}
            <code>500ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-delay "
            id="transition-delay--500ms"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TransitionDelay;
