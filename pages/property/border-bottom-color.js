import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderBottomColor = () => (
  <React.Fragment>
    <style>{`
        .border-bottom-color { border-bottom-style: solid;border-bottom-width: 4px; }
        #border-bottom-color-transparent{ border-bottom-color:transparent;}
        #border-bottom-color-red{ border-bottom-color:red;}
        #border-bottom-color-05ffb0{ border-bottom-color:#05ffb0;}
	    `}</style>
    <LayoutSingle
      property="border-bottom-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-color"
      description=<React.Fragment>
        <p>
          Seperti{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-color`}>border-color</a>
          </code>
          , tapi untuk <i>border</i> bagian bawah saja.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-color: transparent;`}
        >
          <p>
            Menerapkan warna <strong>transparan</strong> ke <i>border</i> bagian bawah.
            Bagian bawah <i>border</i> akan tetap menggunakan spasi yang didefinisikan {" "}
            oleh nilai <code>border-width</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-color "
            id="border-bottom-color-transparent"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-color: red;`}>
          <p>
            Kamu dapat menggunakan satu dari{" "}
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
            className="example-output-div border-bottom-color "
            id="border-bottom-color-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-color: #05ffb0;`}>
          <p>
            Kamu dapat menggunakan kode warna <strong>heksadesimal</strong>,{" "}
            <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>,{" "}
            <code>hsla()</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-color "
            id="border-bottom-color-05ffb0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderBottomColor;
