import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationDelay = () => (
  <React.Fragment>
    <style>{`
        .animation-delay { animation-duration: 5s;animation-iteration-count: infinite; }
        .animation-delay.is-animated { animation-name: fadeAndMove; }
        #animation-delay-0s{ animation-delay:0s;}
        #animation-delay-12s{ animation-delay:1.2s;}
        #animation-delay-2400ms{ animation-delay:2400ms;}
        #animation-delay--500ms{ animation-delay:-500ms;}
	    `}</style>
    <LayoutSingle
      property="animation-delay"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-delay"
      description=<React.Fragment>
        <p>
          Defines how long the animation has to wait before{" "}
          <strong>starting</strong>. The animation will only be delayed on its{" "}
          <em>first</em> iteration.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-delay: 0s;`}
        >
          <p>
            The animation will wait <strong>zero seconds</strong>, and thus
            start right away.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay-0s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-delay: 1.2s;`}>
          <p>
            You can use <strong>decimal</strong> values in{" "}
            <strong>seconds</strong> with the keyword <code>s</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay-12s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-delay: 2400ms;`}>
          <p>
            You can use <strong>milliseconds</strong> instead of seconds, with
            the keyword <code>ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay-2400ms"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-delay: -500ms;`}>
          <p>
            You can use <strong>negative values</strong>: the animation will
            start as if it had <em>already been playing</em> for{" "}
            <code>500ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay--500ms"
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

export default AnimationDelay;
