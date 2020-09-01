import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundRepeat = () => (
  <React.Fragment>
    <style>{`
        .background-repeat { background-image: url(/images/jt.png);background-size: 64px 64px;height: 150px; }
        #background-repeat-repeat{ background-repeat:repeat;}
        #background-repeat-repeat-x{ background-repeat:repeat-x;}
        #background-repeat-repeat-y{ background-repeat:repeat-y;}
        #background-repeat-no-repeat{ background-repeat:no-repeat;}
	    `}</style>
    <LayoutSingle
      property="background-repeat"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-repeat"
      description=<React.Fragment>
        <p>
          Mendefinisikan bagaimana gambar latar berulang di seluruh latar belakang elemen,{" "}
          mulai dari posisi latar belakang.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-repeat: repeat;`}
        >
          <p>
            Gambar latar akan mengulang keduanya:{" "}
            secara horizontal dan secara vertikal.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-repeat"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-repeat: repeat-x;`}>
          <p>
            Gambar latar hanya akan berulang secara <strong>horizontal</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-repeat-x"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-repeat: repeat-y;`}>
          <p>
            Gambar latar hanya akan berulang secara <strong>vertikal</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-repeat-y"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-repeat: no-repeat;`}>
          <p>
            Gambar latar hanya akan muncul <strong>sekali</strong> (tidak diulang).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-no-repeat"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundRepeat;
