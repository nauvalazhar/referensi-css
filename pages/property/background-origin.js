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
        <p>Defines the origin of the background image.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-origin: padding-box;`}
        >
          <p>
            The background image starts at the <em>edge</em> of the border:
            within padding but <em>not</em> the border.
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
            The background image starts <strong>under</strong> the border.
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
            The background image only starts at the edge of the <em>content</em>
            : it doesn't include the padding, nor the border.
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
