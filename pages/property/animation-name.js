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
          Mendefinisikan <i>keyframe</i> animasi yang akan digunakan.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-name: none;`}
        >
          <p>Bila tidak ada nama animasi yang didefinisikan, tidak ada animasi yang dimainkan.</p>
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
            Bila sebuah nama didefinisikan, cocok dengan sebuah <i>keyframe</i>, dengan itu
            nama tersebut akan digunakan.
          </p>
          <p>
            Misalnya, animasi <code>fadeIn</code> terlihat seperti ini:
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
            Contoh lain: animasi <code>moveRight</code>:
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
