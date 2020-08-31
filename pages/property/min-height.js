import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const MinHeight = () => (
  <React.Fragment>
    <style>{`
        .min-height .block { max-width: 400px; }
        #min-height-200px .block { min-height: 200px; }
        #min-height-5px .block { min-height: 5px; }
	    `}</style>
    <LayoutSingle
      property="min-height"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/min-height"
      description=<React.Fragment>
        <p>Defines the minimum height of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`min-height: 0;`}
        >
          <p>
            The element has <strong>no minimum</strong> height.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div min-height " id="min-height-0">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet. Pellentesque interdum, nisl nec interdum
              minimus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`min-height: 200px;`}>
          <p>
            You can use <strong>numeric values</strong> like{" "}
            <strong>pixels</strong>, <strong>(r)em</strong>,{" "}
            <strong>percentages</strong>...
          </p>
          <p>
            If the <em>minimum</em> height is <strong>larger</strong> than the
            element's <em>actual</em> height, the min height will be applied.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div min-height " id="min-height-200px">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet. Pellentesque interdum, nisl nec interdum
              minimus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`min-height: 5px;`}>
          <p>
            If the <em>minimum</em> height is <strong>smaller</strong> than the
            element's <em>actual</em> height, the min height has{" "}
            <strong>no effect</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div min-height " id="min-height-5px">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet. Pellentesque interdum, nisl nec interdum
              minimus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default MinHeight;
