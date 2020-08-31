import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Overflow = () => (
  <React.Fragment>
    <style>{`
        .overflow { height: 120px;overflow: hidden;padding: 0; }
        .overflow .block { height: 80px;width: 240px; }.overflow .block span { display: block;white-space: nowrap; }
        #overflow-visible .block { overflow: visible; }
        #overflow-hidden .block { overflow: hidden; }
        #overflow-scroll .block { overflow: scroll; }
        #overflow-auto .block { overflow: auto; }
	    `}</style>
    <LayoutSingle
      property="overflow"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/overflow"
      description=<React.Fragment>
        <p>
          Defines how overflowing content on both horizontal and vertical axis
          is displayed.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`overflow: visible;`}
        >
          <p>
            The overflowing content is <strong>visible</strong>, while the
            element itself stays at the specified height.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div overflow " id="overflow-visible">
            <p className="block block--alpha">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span>
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              </span>
              <span>
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut.
              </span>
              <span>
                Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
                sit amet.
              </span>
              <span>
                Pellentesque interdum, nisl nec interdum maximus, augue diam
                porttitor lorem, et sollicitudin felis neque sit amet erat.
              </span>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow: hidden;`}>
          <p>
            The overflowing content is <strong>hidden</strong> and can not be
            accessed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div overflow " id="overflow-hidden">
            <p className="block block--alpha">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span>
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              </span>
              <span>
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut.
              </span>
              <span>
                Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
                sit amet.
              </span>
              <span>
                Pellentesque interdum, nisl nec interdum maximus, augue diam
                porttitor lorem, et sollicitudin felis neque sit amet erat.
              </span>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow: scroll;`}>
          <p>
            The overflowing content is accessible thanks to a{" "}
            <strong>vertical scrollbar</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div overflow " id="overflow-scroll">
            <p className="block block--alpha">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span>
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              </span>
              <span>
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut.
              </span>
              <span>
                Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
                sit amet.
              </span>
              <span>
                Pellentesque interdum, nisl nec interdum maximus, augue diam
                porttitor lorem, et sollicitudin felis neque sit amet erat.
              </span>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`overflow: auto;`}>
          <p>
            The browser decides whether to display a vertical scrollbar or not.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div overflow " id="overflow-auto">
            <p className="block block--alpha">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span>
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              </span>
              <span>
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut.
              </span>
              <span>
                Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
                sit amet.
              </span>
              <span>
                Pellentesque interdum, nisl nec interdum maximus, augue diam
                porttitor lorem, et sollicitudin felis neque sit amet erat.
              </span>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Overflow;
