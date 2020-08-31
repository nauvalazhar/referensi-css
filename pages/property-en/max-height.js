import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const MaxHeight = () => (
  <React.Fragment>
    <style>{`
        .max-height { max-width: 400px; }
        #max-height-100px .block { max-height: 100px; }
	    `}</style>
    <LayoutSingle
      property="max-height"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/max-height"
      description=<React.Fragment>
        <p>Defines the maximum height the element can be.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`max-height: none;`}
        >
          <p>
            The element has <strong>no limit</strong> in terms of height.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div max-height " id="max-height-none">
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
        <SectionExample.Property declaration={`max-height: 2000px;`}>
          <p>
            You can use <strong>numeric values</strong> like{" "}
            <strong>pixels</strong>, <strong>(r)em</strong>,{" "}
            <strong>percentages</strong>...
          </p>
          <p>
            If the <em>maximum</em> height is <strong>larger</strong> than the
            element's <em>actual</em> height, the max height has{" "}
            <strong>no effect</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div max-height "
            id="max-height-2000px"
          >
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
        <SectionExample.Property declaration={`max-height: 100px;`}>
          <p>
            If the content does not fit within the maximum height, it will{" "}
            <strong>overflow</strong>. How the container will handle this
            overflowing content is defined by the{" "}
            <code className="shorthand">
              <a href={`http://cssreference.io/#overflow`}>overflow</a>
            </code>{" "}
            property.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div max-height " id="max-height-100px">
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

export default MaxHeight;
