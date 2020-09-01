import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundSize = () => (
  <React.Fragment>
    <style>{`
        .background-size { background-image: url(/images/landscape.jpg);background-repeat: no-repeat;height: 150px;padding: 0; }
        #background-size-auto-auto{ background-size:auto auto;}
        #background-size-120px-80px{ background-size:120px 80px;}
        #background-size-100-50{ background-size:100% 50%;}
        #background-size-contain{ background-size:contain;}
        #background-size-cover{ background-size:cover;}
	    `}</style>
    <LayoutSingle
      property="background-size"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-size"
      description=<React.Fragment>
        <p>Mendefinisikan ukuran gambar latar.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-size: auto auto;`}
        >
          <p>
            Gambar latar akan mempertahankan ukuran aslinya.
          </p>
          <p>
            Contohnya, gambar latar ini sebesar <strong>960px x 640px</strong>.{" "}
            Rasio aspeknya adalah <strong>3 x 2</strong>. Ini lebih besar dari <i>container</i>-nya{" "}
            (yang tingginya 150px) dan dengan demikian akan <strong>dipotong</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-size "
            id="background-size-auto-auto"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-size: 120px 80px;`}>
          <p>
            Kamu dapat menentukan ukuran gambar latar dalam <strong>piksel</strong>.
          </p>
          <ul>
            <li>
              nilai pertama adalah ukuran horizontal
            </li>
            <li>
              nilai kedua adalah ukuran vertikal
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-size "
            id="background-size-120px-80px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-size: 100% 50%;`}>
          <p>
            Kamu juga dapat menggunakan nilai <strong>persentase</strong>.{" "}
            Waspadalah ini dapat mengubah rasio aspek gambar latar, {" "}
            dan mengarah pada hasil yang tidak terduga.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-size "
            id="background-size-100-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-size: contain;`}>
          <p>
            Kata kunci <code>contain</code> akan mengubah ukuran gambar latar {" "}
            untuk memastikan terlihat sepenuhnya.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-size "
            id="background-size-contain"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-size: cover;`}>
          <p>
            Kata kunci <code>cover</code> akan mengubah ukuran gambar latar {" "}
            untuk memastikan elemen ditutup sepenuhnya.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-size "
            id="background-size-cover"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundSize;
