import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundPosition = () => (
  <React.Fragment>
    <style>{`
        .background-position { background-image: url(/images/jt.png);background-repeat: no-repeat;background-size: 64px 64px;height: 150px; }
        #background-position-0-0{ background-position:0% 0%;}
        #background-position-bottom-right{ background-position:bottom right;}
        #background-position-center-center{ background-position:center center;}
	    `}</style>
    <LayoutSingle
      property="background-position"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-position"
      description=<React.Fragment>
        <p>Mendefinisikan posisi gambar latar.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-position: 0% 0%;`}
        >
          <p>
            Warna latar belakang akan diposisikan <strong>0%</strong> pada{" "}
            sumbu horizontal dan <strong>0%</strong> pada sumbu vertikal,{" "}
            yang berarti pojok kiri atas elemen.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-position "
            id="background-position-0-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-position: bottom right;`}
        >
          <p>
            Kamu dapat menggunakan kombinasi kata kunci posisi:{" "}
            <code>center</code>, <code>top</code>, <code>bottom</code>,{" "}
            <code>left</code> dan <code>right</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-position "
            id="background-position-bottom-right"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-position: center center;`}
        >
          <p>
            Gambar latar akan diposisikan di tengah elemen.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-position "
            id="background-position-center-center"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundPosition;
