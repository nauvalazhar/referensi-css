import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationFillMode = () => (
  <React.Fragment>
    <style>{`
        .animation-fill-mode { animation-delay: 1s;animation-duration: 2s;animation-iteration-count: 1;animation-name: kf-animation-fill-mode;animation-play-state: paused; }
        .animation-fill-mode.is-animated { animation-play-state: running; }
        #animation-fill-mode-none{ animation-fill-mode:none;}
        #animation-fill-mode-forwards{ animation-fill-mode:forwards;}
        #animation-fill-mode-backwards{ animation-fill-mode:backwards;}
        #animation-fill-mode-both{ animation-fill-mode:both;}
	    `}</style>
    <LayoutSingle
      property="animation-fill-mode"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-fill-mode"
      description=<React.Fragment>
        <p>
          Defines what happens <strong>before</strong> an animation starts and{" "}
          <strong>after</strong> it ends. The fill mode allows to tell the
          browser if the animation’s styles should also be applied{" "}
          <em>outside</em> of the animation.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-fill-mode: none;`}
        >
          <p>
            The <em>animation</em> styles do not affect the <em>default</em>{" "}
            style: the element is set to its default state before the animation
            starts, and returns to that default state after the animation ends.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-fill-mode  square square--pink"
            id="animation-fill-mode-none"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-fill-mode: forwards;`}>
          <p>
            The last styles applied at the end of the animation are retained{" "}
            <em>afterwards</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-fill-mode  square square--pink"
            id="animation-fill-mode-forwards"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-fill-mode: backwards;`}
        >
          <p>
            The animation's styles will already be applied <em>before</em> the
            animation actually starts.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-fill-mode  square square--pink"
            id="animation-fill-mode-backwards"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-fill-mode: both;`}>
          <p>
            The styles are applied <em>before</em> and <em>after</em> the
            animation plays.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-fill-mode  square square--pink"
            id="animation-fill-mode-both"
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

export default AnimationFillMode;
