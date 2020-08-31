import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TransitionTimingFunction = () => (
  <React.Fragment>
    <style>{`
        .transition-timing-function { padding: 0; }
        .transition-timing-function:hover .square { background: hsl(348, 100%, 61%);color: #fff;transform: translateX(200%); }
        .transition-timing-function .square { transition-duration: 1s;transition-property: all; }
        #transition-timing-function-ease .square { transition-timing-function: ease; }
        #transition-timing-function-ease-in .square { transition-timing-function: ease-in; }
        #transition-timing-function-ease-out .square { transition-timing-function: ease-out; }
        #transition-timing-function-ease-in-out .square { transition-timing-function: ease-in-out; }
        #transition-timing-function-linear .square { transition-timing-function: linear; }
        #transition-timing-function-step-start .square { transition-timing-function: step-start; }
        #transition-timing-function-step-end .square { transition-timing-function: step-end; }
        #transition-timing-function-steps4-end .square { transition-timing-function: steps(4, end); }
	    `}</style>
    <LayoutSingle
      property="transition-timing-function"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function"
      description=<React.Fragment>
        <p>
          Defines how the values between the <em>start</em> and the <em>end</em>{" "}
          of the transition are calculated.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`transition-timing-function: ease;`}
        >
          <p>
            The transition starts slowly, accelerates in the middle, and slows
            down at the end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-ease"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-timing-function: ease-in;`}
        >
          <p>
            The transition starts slowly, and accelerates gradually until the
            end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-ease-in"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-timing-function: ease-out;`}
        >
          <p>
            The transition starts quickly, and decelerates gradually until the
            end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-ease-out"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-timing-function: ease-in-out;`}
        >
          <p>
            Like <code>ease</code>, but more pronounced.
          </p>
          <p>
            The transition starts quickly, and decelerates gradually until the
            end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-ease-in-out"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-timing-function: linear;`}
        >
          <p>
            The transition has a <em>*constant speed</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-linear"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-timing-function: step-start;`}
        >
          <p>
            The transition jumps <em>instantly</em> to the{" "}
            <strong>final state</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-step-start"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-timing-function: step-end;`}
        >
          <p>
            The transition stays at the <strong>initial state</strong> until the
            end, when it <em>instantly</em> jumps to the{" "}
            <strong>final state</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-step-end"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-timing-function: steps(4, end);`}
        >
          <p>
            By using <code>steps()</code> with an <strong>integer</strong>, you
            can define a specific <em>number</em> of steps before reaching the
            end. The state of the element will <em>not</em> vary gradually, but
            rather <strong>jump</strong> from state to state in separate
            instants.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-timing-function "
            id="transition-timing-function-steps4-end"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TransitionTimingFunction;
