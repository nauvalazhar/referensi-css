import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationDelay = () => (
  <React.Fragment>
    <style>{`
        .animation-delay { animation-duration: 5s;animation-iteration-count: infinite; }
        .animation-delay.is-animated { animation-name: fadeAndMove; }
        #animation-delay-0s{ animation-delay:0s;}
        #animation-delay-12s{ animation-delay:1.2s;}
        #animation-delay-2400ms{ animation-delay:2400ms;}
        #animation-delay--500ms{ animation-delay:-500ms;}
	    `}</style>
    <LayoutSingle
      property="animation-delay"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-delay"
      description=<React.Fragment>
        <p>
          Mendefinisikan berapa lama animasi harus menunggu sebelum memulai. Animasi hanya akan{" "}
          ditunda pada iterasi pertamanya.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-delay: 0s;`}
        >
          <p>
            Animasi akan menunggu <b>nol detik</b>, dan dengan demikian segera dimulai.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay-0s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-delay: 1.2s;`}>
          <p>
            Kamu dapat menggunakan nilai <strong>desimal</strong> dalam detik dengan kata kunci{" "}
            <code>s</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay-12s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-delay: 2400ms;`}>
          <p>
            Kamu dapat menggunakan <strong>mili detik</strong> daripada <strong>detik</strong>,{" "}
            dengan kata kunci <code>ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay-2400ms"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-delay: -500ms;`}>
          <p>
            Kamu dapat menggunakan <strong>nilai negatif</strong>: animasi{" "}
            akan dimulai seolah-olah telah diputar selama <code>500ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-delay  square square--plum"
            id="animation-delay--500ms"
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

export default AnimationDelay;
