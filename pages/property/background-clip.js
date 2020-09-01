import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundClip = () => (
  <React.Fragment>
    <style>{`
        .background-clip { background: #05ffb0;border: 4px dashed;padding: 2em; }
        #background-clip-border-box{ background-clip:border-box;}
        #background-clip-padding-box{ background-clip:padding-box;}
        #background-clip-content-box{ background-clip:content-box;}
	    `}</style>
    <LayoutSingle
      property="background-clip"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-clip"
      description=<React.Fragment>
        <p>
          Mendefinisikan seberapa jauh latar belakang harus <strong>diperluas</strong> dalam elemen.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-clip: border-box;`}
        >
          <p>
            Latar belakang meluas sepenuhnya ke seluruh elemen, bahkan{" "}
            <strong>di bawah</strong> <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-clip "
            id="background-clip-border-box"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-clip: padding-box;`}>
          <p>
            Latar belakang hanya akan meluas ke tepi <i>border</i>: itu termasuk <i>padding</i>{" "}
            tapi <strong>tidak</strong> dengan <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-clip "
            id="background-clip-padding-box"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-clip: content-box;`}>
          <p>
            Latar belakang hanya meluas ke tepi konten: itu tidak termasuk <i>padding</i>,{" "}
            maupun <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-clip "
            id="background-clip-content-box"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundClip;
