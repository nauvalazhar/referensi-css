import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const OverflowY = () => (
  <React.Fragment>
    <style>{`
        .overflow-y .block { height: 80px;width: 240px; }
        #overflow-y-visible .block { overflow-y: visible; }
        #overflow-y-hidden .block { overflow-y: hidden; }
        #overflow-y-scroll .block { overflow-y: scroll; }
        #overflow-y-auto .block { overflow-y: auto; }
	    `}</style>
    <LayoutSingle
      property="overflow-y"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/overflow-y"
      description=<React.Fragment>
        <p>
          Defines how overflowing content on the vertical axis is displayed.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`overflow-y: visible;`}
        >
          <p>
            The overflowing content is <strong>visible</strong>, while the
            element itself stays at the specified height.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-y "
            id="overflow-y-visible"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow-y: hidden;`}>
          <p>
            The overflowing content is <strong>hidden</strong> and can not be
            accessed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-y "
            id="overflow-y-hidden"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow-y: scroll;`}>
          <p>
            The overflowing content is accessible thanks to a{" "}
            <strong>vertical scrollbar</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-y "
            id="overflow-y-scroll"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow-y: auto;`}>
          <p>
            The browser decides whether to display a vertical scrollbar or not.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div overflow-y " id="overflow-y-auto">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default OverflowY;
