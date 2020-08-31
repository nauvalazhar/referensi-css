import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationTimingFunction = () => (
  <React.Fragment>
    <style>{`
        .animation-timing-function { animation-duration: 3s;animation-fill-mode: forwards; }
        .animation-timing-function.is-animated { animation-name: moveRight; }
        #animation-timing-function-ease{ animation-timing-function:ease;}
        #animation-timing-function-ease-in{ animation-timing-function:ease-in;}
        #animation-timing-function-ease-out{ animation-timing-function:ease-out;}
        #animation-timing-function-ease-in-out{ animation-timing-function:ease-in-out;}
        #animation-timing-function-linear{ animation-timing-function:linear;}
        #animation-timing-function-step-start{ animation-timing-function:step-start;}
        #animation-timing-function-step-end{ animation-timing-function:step-end;}
        #animation-timing-function-steps4-end{ animation-timing-function:steps(4, end);}
	    `}</style>
    <LayoutSingle
      property="animation-timing-function"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-timing-function"
      description=<React.Fragment>
        <p>
          Defines how the values between the <em>start</em> and the <em>end</em>{" "}
          of the animation are calculated.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-timing-function: ease;`}
        >
          <p>
            The animation starts slowly, accelerates in the middle, and slows
            down at the end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: ease-in;`}
        >
          <p>
            The animation starts slowly, and accelerates gradually until the
            end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease-in"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: ease-out;`}
        >
          <p>
            The animation starts quickly, and decelerates gradually until the
            end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease-out"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: ease-in-out;`}
        >
          <p>
            Like <code>ease</code>, but more pronounced.
          </p>
          <p>
            The animation starts quickly, and decelerates gradually until the
            end.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease-in-out"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: linear;`}
        >
          <p>
            The animation has a <em>*constant speed</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-linear"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: step-start;`}
        >
          <p>
            The animation jumps <em>instantly</em> to the{" "}
            <strong>final state</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-step-start"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: step-end;`}
        >
          <p>
            The animation stays at the <strong>initial state</strong> until the
            end, when it <em>instantly</em> jumps to the{" "}
            <strong>final state</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-step-end"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: steps(4, end);`}
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
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-steps4-end"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default AnimationTimingFunction;
