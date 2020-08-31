import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const WillChange = () => (
  <React.Fragment>
    <style>{`
        #will-change-auto{ will-change:auto;}
        #will-change-scroll-position{ will-change:scroll-position;}
        #will-change-contents{ will-change:contents;}
        #will-change-box-shadow{ will-change:box-shadow;}
	    `}</style>
    <LayoutSingle
      property="will-change"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/will-change"
      description=<React.Fragment>
        <p>
          Defines which properties are expected to change in the future (either
          through CSS or JavaScript).
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`will-change: auto;`}
        >
          <p>
            <strong>Doesn't</strong> tell the browser to optimize <em>any</em>{" "}
            property.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div will-change "
            id="will-change-auto"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`will-change: scroll-position;`}>
          <p>
            Tells the browser to optimize for the element's{" "}
            <strong>scroll position</strong>, as it might change in the future.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div will-change "
            id="will-change-scroll-position"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`will-change: contents;`}>
          <p>
            Tells the browser to optimize for the element's{" "}
            <strong>contents</strong>, as it might change in the future.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div will-change "
            id="will-change-contents"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`will-change: box-shadow;`}>
          <p>
            You can specify any other CSS <strong>property</strong>. For
            example, this tells the browser to optimize for the element's{" "}
            <strong>box-shadow</strong>, as it might change in the future.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div will-change "
            id="will-change-box-shadow"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default WillChange;
