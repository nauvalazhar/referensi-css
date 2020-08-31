import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationPlayState = () => (
  <React.Fragment>
    <style>{`
        .animation-play-state { animation-duration: 2s;animation-iteration-count: infinite; }
        .animation-play-state.is-animated { animation-name: fadeAndMove; }
        #animation-play-state-running{ animation-play-state:running;}
        #animation-play-state-paused{ animation-play-state:paused;}
	    `}</style>
    <LayoutSingle
      property="animation-play-state"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-play-state"
      description=<React.Fragment>
        <p>Defines if an animation is playing or not.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-play-state: running;`}
        >
          <p>
            If the <code>animation-duration</code> and{" "}
            <code>animation-name</code> are defined, the animation will start
            playing automatically.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-play-state  square square--plum"
            id="animation-play-state-running"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-play-state: paused;`}>
          <p>
            The animation is set paused at the <strong>first keyframe</strong>.
          </p>
          <p>
            This is different than having either no{" "}
            <code>animation-duration</code> or <code>animation-name</code> at
            all. If the animation is paused, the style applied is that of the{" "}
            <em>first</em> keyframe, and <strong>not</strong> the default style.
          </p>
          <p>
            In this example, the square is visible by default, but the on the
            first keyframe of <code>fadeAndMove</code>, the <code>opacity</code>{" "}
            is set to <code>0</code>. When paused, the animation will be "stuck"
            on this first keyframe, and will thus be invisible.
          </p>
          <p></p>
          <pre>{`@keyframes fadeAndMove {
  from {
    opacity: 0;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}`}</pre>
          <p></p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-play-state  square square--plum"
            id="animation-play-state-paused"
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

export default AnimationPlayState;
