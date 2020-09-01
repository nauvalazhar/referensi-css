import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BorderBottomRightRadius = () => (
  <React.Fragment>
    <style>{`
        .border-bottom-right-radius { border-bottom-color: #05ffb0;border-right-color: hsl(348, 100%, 61%);border-style: solid;border-width: 4px; }
        #border-bottom-right-radius-0{ border-bottom-right-radius:0;}
        #border-bottom-right-radius-20px{ border-bottom-right-radius:20px;}
        #border-bottom-right-radius-50{ border-bottom-right-radius:50%;}
        #border-bottom-right-radius-20px-50{ border-bottom-right-radius:20px 50%;}
	    `}</style>
    <LayoutSingle
      property="border-bottom-right-radius"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-right-radius"
      description=<React.Fragment>
        <p>
          Menentukan <strong>radius</strong> sudut kanan bawah.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-bottom-right-radius: 0;`}
        >
          <p>Menghapus <i>border radius</i> apa pun.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-right-radius "
            id="border-bottom-right-radius-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-right-radius: 20px;`}
        >
          <p>
            Kamu dapat menggunakan nilai <strong>piksel</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-right-radius "
            id="border-bottom-right-radius-20px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-right-radius: 50%;`}
        >
          <p>
            Kamu dapat menggunakan nilai <strong>persentase</strong>. Dalam contoh ini,{" "}
            radius mulai setengah jalan di <em>bawah</em> <i>border</i>, dan berakhir{" "}
            setengah jalan di <em>kanan</em> <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-right-radius "
            id="border-bottom-right-radius-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-right-radius: 20px 50%;`}
        >
          <p>
            Bila kamu mengatur 2 nilai, nilai yang pertama adalah untuk bagian <i>bawah</i> <i>border</i>,{" "}
            nilai yang kedua adalah untuk bagian <i>kanan border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-right-radius "
            id="border-bottom-right-radius-20px-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderBottomRightRadius;
