import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Height = () => (
  <React.Fragment>
    <style>{`
        .height { max-width: 400px; }
        #height-100px .block { height: 100px; }
	    `}</style>
    <LayoutSingle
      property="height"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/height"
      description=<React.Fragment>
        <p>Defines the height of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`height: auto;`}>
          <p>
            The element will <strong>automatically</strong> adjust its height to
            allow its content to be displayed correctly.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div height " id="height-auto">
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
        <SectionExample.Property declaration={`height: 100px;`}>
          <p>
            You can use <strong>numeric values</strong> like{" "}
            <strong>pixels</strong>, <strong>(r)em</strong>,{" "}
            <strong>percentages</strong>...
          </p>
          <p>
            If the content does not fit within the specified height, it will{" "}
            <strong>overflow</strong>. How the container will handle this
            overflowing content is defined by the{" "}
            <code className="shorthand">
              <a href={`http://cssreference.io/#overflow`}>overflow</a>
            </code>{" "}
            property.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div height " id="height-100px">
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

export default Height;
