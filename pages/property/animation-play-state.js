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
        <p>Menentukan apakah animasi sedang dimainkan atau tidak.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-play-state: running;`}
        >
          <p>
            Bila <code>animation-duration</code> dan{" "}
            <code>animation-name</code> didefinisikan, animasi akan dimulai
            bermain secara otomatis.
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
            Animasi disetel sebagai jeda pada <i>keyframe</i> pertama.
          </p>
          <p>            
            Ini berbeda dengan tidak memiliki{" "}
            <code>animation-duration</code> atau <code>animation-name</code>.{" "}
            Jika animasi dijeda, gaya yang diterapkan adalah gaya{" "}
            <i>keyframe</i> pertama, dan <strong>bukan</strong> gaya bawaan.
          </p>
          <p>            
            Dalam contoh ini, bujur sangkar terlihat secara bawaan, tetapi di
            <i>keyframe</i> pertama dari <code>fadeAndMove</code>, <code>opacity</code>{" "}
            disetel ke <code>0</code>. Saat dijeda, animasi akan "macet"
            pada <i>keyframe</i> pertama ini, dan karenanya tidak akan terlihat.
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
