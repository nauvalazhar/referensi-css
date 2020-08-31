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
        <p>Defines the size of the background image.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-size: auto auto;`}
        >
          <p>
            The background image will retain its <strong>original</strong> size.
          </p>
          <p>
            For example, this background image is{" "}
            <strong>960px by 640px</strong> large. Its aspect ratio is{" "}
            <strong>3 by 2</strong>. It's bigger than its container (which is
            150px high) and will thus be <strong>clipped</strong>.
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
            You can specify a size in <strong>pixels</strong>:
          </p>
          <ul>
            <li>
              the first value is the <strong>horizontal</strong> size
            </li>
            <li>
              the second is the <strong>vertical</strong> size
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
            You can use <strong>percentage</strong> values as well. Beware that
            this can alter the <strong>aspect ratio</strong> of the background
            image, and lead to unexpected results.
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
            The keyword <code>contain</code> will resize the background image to
            make sure it remains <strong>fully visible</strong>.
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
            The keyword <code>cover</code> will resize the background image to
            make sure the element is <strong>fully covered</strong>.
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
