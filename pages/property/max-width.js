import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const MaxWidth = () => (
  <React.Fragment>
    <style>{`
        #max-width-150px .block { max-width: 150px; }
	    `}</style>
    <LayoutSingle
      property="max-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/max-width"
      description=<React.Fragment>
        <p>Defines the maximum width the element can be.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`max-width: none;`}
        >
          <p>
            The element has <strong>no limit</strong> in terms of width.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div max-width " id="max-width-none">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet. Pellentesque interdum, nisl nec interdum
              maximus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`max-width: 2000px;`}>
          <p>
            You can use <strong>numeric values</strong> like{" "}
            <strong>pixels</strong>, <strong>(r)em</strong>,{" "}
            <strong>percentages</strong>...
          </p>
          <p>
            If the <em>maximum</em> width is <strong>larger</strong> than the
            element's <em>actual</em> width, the max width has{" "}
            <strong>no effect</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div max-width " id="max-width-2000px">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet. Pellentesque interdum, nisl nec interdum
              maximus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`max-width: 150px;`}>
          <p>
            If the content does not fit within the maximum width, it will
            automatically change the <strong>height</strong> of the element to
            accomodate for the wrapping of the content.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div max-width " id="max-width-150px">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet. Pellentesque interdum, nisl nec interdum
              maximus, augue diam porttitor lorem, et sollicitudin felis neque
              sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default MaxWidth;
