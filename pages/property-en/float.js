import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Float = () => (
  <React.Fragment>
    <style>{`
        #float-none .block--alpha { float: none; }
        #float-left .block--alpha { float: left; }
        #float-right .block--alpha { float: right; }
	    `}</style>
    <LayoutSingle
      property="float"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/float"
      description=<React.Fragment>
        <p>
          Pushes the element to either the <strong>left</strong> or{" "}
          <strong>right</strong> side. The following siblings will{" "}
          <strong>wrap around</strong> the floating element
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`float: none;`}>
          <p>
            Removes any previously defined <code>float</code> value. The element
            will remain in the natural flow of the page.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div float " id="float-none">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
            <p className="block block--alpha">Target element</p>
            <p className="block">
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
              sit amet. Pellentesque interdum, nisl nec interdum maximus, augue
              diam porttitor lorem, et sollicitudin felis neque sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`float: left;`}>
          <p>
            Moves the element to the <strong>left</strong> side of its
            container. The following elements will wrap around it and fill the
            space remaining on the right.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div float " id="float-left">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
            <p className="block block--alpha">Target element</p>
            <p className="block">
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
              sit amet. Pellentesque interdum, nisl nec interdum maximus, augue
              diam porttitor lorem, et sollicitudin felis neque sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`float: right;`}>
          <p>
            Moves the element to the <strong>right</strong> side of its
            container. The following elements will wrap around it and fill the
            space remaining on the left.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div float " id="float-right">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
            <p className="block block--alpha">Target element</p>
            <p className="block">
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
              sit amet. Pellentesque interdum, nisl nec interdum maximus, augue
              diam porttitor lorem, et sollicitudin felis neque sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Float;
