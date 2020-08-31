import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationName = () => (
  <React.Fragment>
    <style>{`
        .animation-name { animation-iteration-count: infinite; }
        .animation-name.is-animated { animation-duration: 2s; }
        #animation-name-none{ animation-name:none;}
        #animation-name-fadein{ animation-name:fadeIn;}
        #animation-name-moveright{ animation-name:moveRight;}
	    `}</style>
    <LayoutSingle
      property="animation-name"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-name"
      description=<React.Fragment>
        <p>
          Defines <em>which</em> animation keyframes to use.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-name: none;`}
        >
          <p>If no animation name is specified, no animation is played.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-name  square square--plum"
            id="animation-name-none"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-name: fadeIn;`}>
          <p>
            If a name is specified, the <strong>keyframes</strong> matching that
            name will be used.
          </p>
          <p>
            For example, the <code>fadeIn</code> animation looks like this:
          </p>
          <p></p>
          <pre>{`@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`}</pre>
          <p></p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-name  square square--plum"
            id="animation-name-fadein"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-name: moveRight;`}>
          <p>
            Another example: the <code>moveRight</code> animation:
          </p>
          <p></p>
          <pre>{`@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}`}</pre>
          <p></p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-name  square square--plum"
            id="animation-name-moveright"
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

export default AnimationName;
