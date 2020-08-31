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
        <p>Mendefinisikan ke arah mana animasi dimainkan.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-direction: normal;`}
        >
          <p>
            Animasi dimainkan ke depan. Saat mencapai bagian akhir, animasi dimulai lagi{" "}
            pada <i>keyframe</i> pertama.
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
            Animasi dimainkan mundur: dimulai pada <i>keyframe</i> terakhir, selesai pada <i>keyframe</i>{" "} 
            pertama.
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
            Animasi dimainkan maju terlebih dahulu, lalu mundur:
          </p>
          <ul>
            <li>dimulai dari <i>keyframe</i> pertama</li>
            <li>berhenti di <i>keyframe</i> terakhir</li>
            <li>mulai lagi, tetapi pada <i>keyframe</i> terakhir</li>
            <li>berhenti di <i>keyframe</i> pertama</li>
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
            Animasi dimainkan mundur terlebih dahulu, kemudian maju:
          </p>
          <ul>
            <li>dimulai dari <i>keyframe</i> terakhir</li>
            <li>berhenti di <i>keyframe</i> pertama</li>
            <li>mulai lagi, tetapi pada <i>keyframe</i> pertama</li>
            <li>berhenti di <i>keyframe</i> terakhir</li>
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
