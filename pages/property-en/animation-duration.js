import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationDuration = () => (
  <React.Fragment>
    <style>{`
        .animation-duration { animation-iteration-count: infinite; }
        .animation-duration.is-animated { animation-name: fadeAndMove; }
        #animation-duration-0s{ animation-duration:0s;}
        #animation-duration-12s{ animation-duration:1.2s;}
        #animation-duration-2400ms{ animation-duration:2400ms;}
	    `}</style>
    <LayoutSingle
      property="animation-duration"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-duration"
      description=<React.Fragment>
        <p>Defines how long the animation lasts.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-duration: 0s;`}
        >
          <p>
            The default value is <strong>zero seconds</strong>: the animation
            will simply not play.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-duration  square square--plum"
            id="animation-duration-0s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-duration: 1.2s;`}>
          <p>
            You can use <strong>decimal</strong> values in{" "}
            <strong>seconds</strong> with the keyword <code>s</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-duration  square square--plum"
            id="animation-duration-12s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-duration: 2400ms;`}>
          <p>
            You can use <strong>milliseconds</strong> instead of seconds, with
            the keyword <code>ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-duration  square square--plum"
            id="animation-duration-2400ms"
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

export default AnimationDuration;
