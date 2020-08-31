import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TextIndent = () => (
  <React.Fragment>
    <style>{`
        #text-indent-0{ text-indent:0;}
        #text-indent-40px{ text-indent:40px;}
        #text-indent--2em{ text-indent:-2em;}
	    `}</style>
    <LayoutSingle
      property="text-indent"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/text-indent"
      description=<React.Fragment>
        <p>Defines the indentation of the element's first line of text.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`text-indent: 0;`}
        >
          <p>
            The text is <strong>not</strong> indented.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div text-indent " id="text-indent-0">
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-indent: 40px;`}>
          <p>
            You can use <strong>numeric values</strong> like{" "}
            <strong>pixels</strong>, <strong>(r)em</strong>,{" "}
            <strong>percentages</strong>...
          </p>
          <p>
            Notice how only the <em>first</em> line is indented.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-indent "
            id="text-indent-40px"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-indent: -2em;`}>
          <p>
            You can also use <strong>negative</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-indent "
            id="text-indent--2em"
          >
            <p className="block block--alpha">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TextIndent;
