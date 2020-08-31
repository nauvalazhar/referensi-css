import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AnimationTimingFunction = () => (
  <React.Fragment>
    <style>{`
        .animation-timing-function { animation-duration: 3s;animation-fill-mode: forwards; }
        .animation-timing-function.is-animated { animation-name: moveRight; }
        #animation-timing-function-ease{ animation-timing-function:ease;}
        #animation-timing-function-ease-in{ animation-timing-function:ease-in;}
        #animation-timing-function-ease-out{ animation-timing-function:ease-out;}
        #animation-timing-function-ease-in-out{ animation-timing-function:ease-in-out;}
        #animation-timing-function-linear{ animation-timing-function:linear;}
        #animation-timing-function-step-start{ animation-timing-function:step-start;}
        #animation-timing-function-step-end{ animation-timing-function:step-end;}
        #animation-timing-function-steps4-end{ animation-timing-function:steps(4, end);}
	    `}</style>
    <LayoutSingle
      property="animation-timing-function"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation-timing-function"
      description=<React.Fragment>
        <p>
          Mendefinisikan bagaimana nilai antara <em>awal</em> dan <em>akhir</em>{" "}
          animasi dihitung.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`animation-timing-function: ease;`}
        >
          <p>
            Animasi dimulai dengan lambat, dipercepat di tengah, dan melambat
            di bagian akhir.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: ease-in;`}
        >
          <p>
            Animasi dimulai dengan lambat, dan dipercepat secara bertahap hingga
            akhir.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease-in"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: ease-out;`}
        >
          <p>
            Animasi dimulai dengan cepat, dan melambat secara bertahap hingga
            akhir.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease-out"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: ease-in-out;`}
        >
          <p>
            Seperti <code>ease</code>, tetapi lebih jelas.
          </p>
          <p>
            Animasi dimulai dengan cepat, dan melambat secara bertahap hingga
            akhir.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-ease-in-out"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: linear;`}
        >
          <p>
            Animasi memiliki <em>* kecepatan konstan</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-linear"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: step-start;`}
        >
          <p>
            Animasi melompat <em>seketika</em> ke{" "}
            <strong>keadaan akhir</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-step-start"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: step-end;`}
        >
          <p>
            Animasi tetap pada <strong>keadaan awal</strong> sampai
            berakhir, saat <em>langsung</em> melompat ke {""}
            <strong>keadaan akhir</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-step-end"
          >
            Hello
            <br />
            World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`animation-timing-function: steps(4, end);`}
        >
          <p>
            Dengan menggunakan <code>step()</code> dan <strong>bilangan bulat</strong> sebgai nilainya, kamu
            dapat menentukan jumlah langkah tertentu sebelum mencapai akhir. 
            Status elemen <em>tidak</em> akan bervariasi secara bertahap, melainkan{" "}
            <strong>melompat</strong> dari satu <i>state</i> ke <i>state</i> yang lain dalam waktu terpisah.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div animation-timing-function  square square--plum"
            id="animation-timing-function-steps4-end"
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

export default AnimationTimingFunction;
