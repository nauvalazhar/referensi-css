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
          Defines how far the background should <strong>extend</strong> within
          the element.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-clip: border-box;`}
        >
          <p>
            The background extends completely throughout the element, even{" "}
            <strong>under</strong> the border.
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
            The background only extends to the <em>edge</em> of the border: it
            includes the padding but <em>not</em> the border.
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
            The background only extends to the edge of the <em>content</em>: it
            doesn't include the padding, nor the border.
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
