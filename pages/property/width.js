import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Width = () => (
  <React.Fragment>
    <style>{`
        #width-auto{ width:auto;}
        #width-240px{ width:240px;}
        #width-50{ width:50%;}
	    `}</style>
    <LayoutSingle
      property="width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/width"
      description=<React.Fragment>
        <p>Defines the width of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`width: auto;`}>
          <p>
            The element will <strong>automatically</strong> adjust its width to
            allow its content to be displayed correctly.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div width  block block--alpha"
            id="width-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`width: 240px;`}>
          <p>
            You can use <strong>numeric values</strong> like{" "}
            <strong>pixels</strong>, <strong>(r)em</strong>,{" "}
            <strong>percentages</strong>...
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div width  block block--alpha"
            id="width-240px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`width: 50%;`}>
          <p>
            If you use <strong>percentages</strong>, the value is relative to
            the container's width.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div width  block block--alpha"
            id="width-50"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Width;
