import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationDirection = () => (
  <React.Fragment>
    <style>{`
        .animation-direction { animation-duration: 2s;animation-iteration-count: infinite; }
        .animation-direction.is-animated { animation-name: fadeAndMove; }
        #animation-direction-normal{ animation-direction:normal;}
        #animation-direction-reverse{ animation-direction:reverse;}
        #animation-direction-alternate{ animation-direction:alternate;}
        #animation-direction-alternate-reverse{ animation-direction:alternate-reverse;}
	    `}</style>
    <LayoutSingle
      property="animation-direction"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-direction"
      description=<React.Fragment>
        <p>Defines in which direction the animation is played.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-direction: normal;`}
        >
          <p>
            The animation is played <strong>forwards</strong>. When it reaches
            the end, it starts over at the first keyframe.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-direction  square square--plum"
            id="animation-direction-normal"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-direction: reverse;`}>
          <p>
            The animation is played <strong>backwards</strong>: begins at the
            last keyframe, finishes at the first keyframe.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-direction  square square--plum"
            id="animation-direction-reverse"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-direction: alternate;`}
        >
          <p>
            The animation is played <strong>forwards</strong> first, then{" "}
            <strong>backwards</strong>:
          </p>
          <ul>
            <li>starts at the first keyframe</li>
            <li>stops at the last keyframe</li>
            <li>starts again, but at the last keyframe</li>
            <li>stops at the first keyframe</li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-direction  square square--plum"
            id="animation-direction-alternate"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-direction: alternate-reverse;`}
        >
          <p>
            The animation is played <strong>backwards</strong> first, then{" "}
            <strong>forwards</strong>:
          </p>
          <ul>
            <li>starts at the last keyframe</li>
            <li>stops at the first keyframe</li>
            <li>starts again, but at the first keyframe</li>
            <li>stops at the last keyframe</li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-direction  square square--plum"
            id="animation-direction-alternate-reverse"
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

export default AnimationDirection;
