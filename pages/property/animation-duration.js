import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationDuration = () => (
  <React.Fragment>
    <style>{`
        .animation-duration { animation-iteration-count: infinite; }
        .animation-duration.is-animated { animation-name: fadeAndMove; }
        #animation-duration-0s{ animation-duration:0s;}
        #animation-duration-12s{ animation-duration:1.2s;}
        #animation-duration-2400ms{ animation-duration:2400ms;}
	    `}</style>
    <LayoutSingle
      property="animation-duration"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-duration"
      description=<React.Fragment>
        <p>Mendefinisikan berapa lama animasi berlangsung.</p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-duration: 0s;`}
        >
          <p>
            Nilai bawaannya adalah <strong>nol detik</strong>: animasi
            tidak akan dimainkan.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-duration  square square--plum"
            id="animation-duration-0s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-duration: 1.2s;`}>
          <p>
            Kamu dapat menggunakan nilai <strong>desimal</strong> dalam{" "}
            <strong>detik</strong> dengan kata kunci <code>s</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-duration  square square--plum"
            id="animation-duration-12s"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`animation-duration: 2400ms;`}>
          <p>
            Kamu dapat menggunakan <strong>milidetik</strong> daripada detik, dengan{" "}
            kata kunci <code>ms</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-duration  square square--plum"
            id="animation-duration-2400ms"
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

export default AnimationDuration;
