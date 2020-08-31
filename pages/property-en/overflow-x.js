import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const OverflowX = () => (
  <React.Fragment>
    <style>{`
        .overflow-x .block { white-space: nowrap;width: 200px; }
        #overflow-x-visible .block { overflow-x: visible; }
        #overflow-x-hidden .block { overflow-x: hidden; }
        #overflow-x-scroll .block { overflow-x: scroll; }
        #overflow-x-auto .block { overflow-x: auto; }
	    `}</style>
    <LayoutSingle
      property="overflow-x"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/overflow-x"
      description=<React.Fragment>
        <p>
          Defines how overflowing content on the horizontal axis is displayed.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`overflow-x: visible;`}
        >
          <p>
            The overflowing content is <strong>visible</strong>, while the
            element itself stays at the specified width.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-x "
            id="overflow-x-visible"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow-x: hidden;`}>
          <p>
            The overflowing content is <strong>hidden</strong> and can not be
            accessed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-x "
            id="overflow-x-hidden"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow-x: scroll;`}>
          <p>
            The overflowing content is accessible thanks to a{" "}
            <strong>horizontal scrollbar</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div overflow-x "
            id="overflow-x-scroll"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow-x: auto;`}>
          <p>
            The browser decides whether to display a horizontal scrollbar or
            not.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div overflow-x " id="overflow-x-auto">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default OverflowX;
