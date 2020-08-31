import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationIterationCount = () => (
  <React.Fragment>
    <style>{`
        .animation-iteration-count { animation-duration: 2s; }
        .animation-iteration-count.is-animated { animation-name: fadeAndMove; }
        #animation-iteration-count-1{ animation-iteration-count:1;}
        #animation-iteration-count-2{ animation-iteration-count:2;}
        #animation-iteration-count-infinite{ animation-iteration-count:infinite;}
	    `}</style>
    <LayoutSingle
      property="animation-iteration-count"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-iteration-count"
      description=<React.Fragment>
        <p>Defines how many times the animation is played.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-iteration-count: 1;`}
        >
          <p>
            The animation will only play <strong>once</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-iteration-count  square square--plum"
            id="animation-iteration-count-1"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-iteration-count: 2;`}>
          <p>
            You can use <strong>integer values</strong> to define a{" "}
            <em>specific</em> amount of times the animation will play.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-iteration-count  square square--plum"
            id="animation-iteration-count-2"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-iteration-count: infinite;`}
        >
          <p>
            By using the keyword <code>infinite</code>, the animation will play
            indefinitely.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-iteration-count  square square--plum"
            id="animation-iteration-count-infinite"
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

export default AnimationIterationCount;
