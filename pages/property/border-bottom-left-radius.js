import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BorderBottomLeftRadius = () => (
  <React.Fragment>
    <style>{`
        .border-bottom-left-radius { border-bottom-color: #05ffb0;border-left-color: hsl(348, 100%, 61%);border-style: solid;border-width: 4px; }
        #border-bottom-left-radius-0{ border-bottom-left-radius:0;}
        #border-bottom-left-radius-20px{ border-bottom-left-radius:20px;}
        #border-bottom-left-radius-50{ border-bottom-left-radius:50%;}
        #border-bottom-left-radius-20px-50{ border-bottom-left-radius:20px 50%;}
	    `}</style>
    <LayoutSingle
      property="border-bottom-left-radius"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-left-radius"
      description=<React.Fragment>
        <p>
          Menentukan <strong>radius</strong> sudut kiri bawah.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-bottom-left-radius: 0;`}
        >
          <p>Menghapus <i>border radius</i> apa pun.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-left-radius "
            id="border-bottom-left-radius-0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-left-radius: 20px;`}
        >
          <p>
            Kamu dapat menggunakan nilai <strong>piksel</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-left-radius "
            id="border-bottom-left-radius-20px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-left-radius: 50%;`}
        >
          <p>
            Kamu dapat menggunakan nilai <strong>persentase</strong>. Dalam contoh ini,{" "}
            radius mulai setengah jalan di <em>bawah</em> <i>border</i>, dan berakhir{" "}
            setengah jalan di <em>kiri</em> <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-left-radius "
            id="border-bottom-left-radius-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-left-radius: 20px 50%;`}
        >
          <p>
            Bila kamu mengatur 2 nilai, nilai yang pertama adalah untuk bagian <i>bawah</i> <i>border</i>,{" "}
            nilai yang kedua adalah untuk bagian <i>kiri border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-left-radius "
            id="border-bottom-left-radius-20px-50"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderBottomLeftRadius;
