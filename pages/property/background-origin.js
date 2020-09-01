import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundOrigin = () => (
  <React.Fragment>
    <style>{`
        .background-origin { background-image: url(/images/jt.png);background-repeat: no-repeat;background-size: 64px 64px;border: 4px dashed;padding: 2em; }
        .background-origin p { background-color: rgba(5, 255, 176, 0.5);padding: 1em; }
        #background-origin-padding-box{ background-origin:padding-box;}
        #background-origin-border-box{ background-origin:border-box;}
        #background-origin-content-box{ background-origin:content-box;}
	    `}</style>
    <LayoutSingle
      property="background-origin"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-origin"
      description=<React.Fragment>
        <p>Mendefinisikan asal gambar latar belakang.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-origin: padding-box;`}
        >
          <p>
            Gambar latar belakang dimulai di tepi <i>border</i>:
            dalam <i>padding</i> tetapi <em>tidak</em> dengan <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-origin "
            id="background-origin-padding-box"
          >
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-origin: border-box;`}>
          <p>
            Latar belakang gambar dimulai <strong>di bawah</strong> <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-origin "
            id="background-origin-border-box"
          >
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-origin: content-box;`}
        >
          <p>
            Latar belakang gambar hanya dimulai di tepi konten:{" "}
            itu tidak termasuk <i>padding</i>, maupun <i>border</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-origin "
            id="background-origin-content-box"
          >
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundOrigin;
