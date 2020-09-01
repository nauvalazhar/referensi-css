import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BackgroundColor = () => (
  <React.Fragment>
    <style>{`
        #background-color-transparent{ background-color:transparent;}
        #background-color-red{ background-color:red;}
        #background-color-05ffb0{ background-color:#05ffb0;}
        #background-color-rgb50-115-220{ background-color:rgb(50, 115, 220);}
        #background-color-rgba50-115-220-03{ background-color:rgba(50, 115, 220, 0.3);}
        #background-color-hsl14-100-53{ background-color:hsl(14, 100%, 53%);}
        #background-color-hsla14-100-53-06{ background-color:hsla(14, 100%, 53%, 0.6);}
	    `}</style>
    <LayoutSingle
      property="background-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-color"
      description=<React.Fragment>
        <p>Mendefinisikan warna latar belakang elemen.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-color: transparent;`}
        >
          <p>
            Secara bawaan, warna latar belakang adalah <strong>transparan</strong>,{" "}
            pada dasarnya berarti tidak ada warna latar belakang.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-transparent"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-color: red;`}>
          <p>
            Kamu dapat menggunakan salah satu dari{" "}
            <strong>
              <a
                href={`https://developer.mozilla.org/en-US/docs/Web/CSS/color_value`}
              >
                140+ nama warna
              </a>
            </strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-red"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-color: #05ffb0;`}>
          <p>
            Kamu dapat menggunakan kode warna <strong>hexadecimal</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-05ffb0"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: rgb(50, 115, 220);`}
        >
          <p>
            Kamu dapat menggunakan kode warna <strong>rgb()</strong>:
          </p>
          <ul>
            <li>
              nilai pertama untuk <code>merah</code>
            </li>
            <li>
              nilai kedua untuk <code>hijau</code>
            </li>
            <li>
              nilai ketiga untuk <code>biru</code>
            </li>
          </ul>
          <p>
            Masing-masing dari mereka dapat memiliki nilai dari <strong>0</strong> hingga <strong>255</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-rgb50-115-220"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: rgba(50, 115, 220, 0.3);`}
        >
          <p>
            Kamu dapat menggunakan kode warna <strong>rgba()</strong>:
          </p>
          <ul>
            <li>
              3 nilai pertama untuk <code>rgb</code>
            </li>
            <li>
              nilai keempat untuk <code>alpha</code> <i>channel</i> dan mendefinisikan{" "}
              transparansi dari warna
            </li>
          </ul>
          <p>
            Nilai <i>alpha</i> dapat diisi <strong>0</strong> (transparan) hingga satu <strong>1</strong> (buram).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-rgba50-115-220-03"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: hsl(14, 100%, 53%);`}
        >
          <p>
            Kamu dapat menggunakan kode warna <strong>hsl</strong>:
          </p>
          <ul>
            <li>
              nilai pertama untuk <code>hue</code> dan dapat diisi dari <strong>0</strong>{" "}
              hingga <strong>359</strong>
            </li>
            <li>
              nilai kedua untuk <code>saturation</code> dan dapat diisi{" "}
              <strong>0%</strong> hingga <strong>100%</strong>
            </li>
            <li>
              nilai keempat untuk <code>luminosity</code> dan dapat diisi{" "}
              <strong>0%</strong> hingga <strong>100%</strong>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-hsl14-100-53"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: hsla(14, 100%, 53%, 0.6);`}
        >
          <p>
            Kamu dapat menggunakan kode warna <strong>hsla()</strong>:
          </p>
          <ul>
            <li>
              3 nilai pertama untuk <code>hsl</code>
            </li>
            <li>
              nilai keempat untuk <code>alpha</code> <i>channel</i> dan mendefinisikan{" "}
              tingkat transparansi dari warna
            </li>
          </ul>
          <p>
            Nilai <i>alpha</i> dapat diisi dari <strong>0</strong> (transparan) hingga{" "}
            satu <strong>1</strong> (buram).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-hsla14-100-53-06"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundColor;
