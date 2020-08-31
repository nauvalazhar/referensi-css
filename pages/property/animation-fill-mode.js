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
          Mendefinisikan apa yang terjadi <strong>sebelum</strong> animasi dimulai dan{" "}
          <strong>setelah</strong> animasi berakhir. Properti ini memungkinkan untuk memberi tahu
          peramban jika gaya animasi juga harus diterapkan <em>di luar</em> animasi.
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
            Gaya <em>animasi</em> tidak memengaruhi <em>default style</em>:{" "}
            elemen disetel ke keadaan bawaannya sebelum animasi{" "}
            dimulai, dan kembali ke status bawaan tersebut setelah animasi berakhir.
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
            Gaya terakhir yang diterapkan di akhir animasi dipertahankan{" "}
            <em>setelahnya</em> (setelah animasi berakhir).
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
            Gaya animasi akan diterapkan <em>sebelum</em>{" "}
            animasi benar-benar dimulai.
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
            Gaya diterapkan <em>sebelum</em> dan <em>setelah</em> animasi dimainkan.
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
