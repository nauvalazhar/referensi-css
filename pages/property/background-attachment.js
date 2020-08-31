import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundAttachment = () => (
  <React.Fragment>
    <style>{`
        .background-attachment { background-image: url(/images/landscape.jpg);background-position: center center;background-size: cover;height: 200px; }
        .background-attachment p { background: white;padding: 0.8em 1em; }
        #background-attachment-scroll{ background-attachment:scroll;}
        #background-attachment-fixed{ background-attachment:fixed;}
	    `}</style>
    <LayoutSingle
      property="background-attachment"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-attachment"
      description=<React.Fragment>
        <p>
          Defines <em>how</em> the background image will behave when scrolling
          the page.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-attachment: scroll;`}
        >
          <p>
            The background image will scroll with the page. It will also
            position and resize itself according to the element it's applied to.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-attachment "
            id="background-attachment-scroll"
          >
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-attachment: fixed;`}>
          <p>
            The background image will <em>not</em> scroll with the page, and
            remain positioned according to the viewport. It will also position
            and resize itself according to the viewport. As a result, the
            background image will probably only be partially visible.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-attachment "
            id="background-attachment-fixed"
          >
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundAttachment;
