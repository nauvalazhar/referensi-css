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
        <p>Mendefinisikan berapa kali animasi dimainkan.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-iteration-count: 1;`}
        >
          <p>
            Animasi hanya akan diputar <strong>sekali</strong>.
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
            Anda dapat menggunakan <strong>nilai integer</strong> untuk mendefinisikan{" "}
            <em>frekuensi tertentu</em> animasi akan diputar.
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
            Dengan menggunakan kata kunci <code>infinite</code>, animasi akan diputar
            tanpa batas (ya, tidak akan pernah berhenti).
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
