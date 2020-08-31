import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TextOverflow = () => (
  <React.Fragment>
    <style>{`
        .text-overflow { display: flex; }
        .text-overflow .block { overflow: hidden;white-space: nowrap;width: 5em; }
        #text-overflow-clip{ text-overflow:clip;}
        #text-overflow-clip .block { text-overflow: clip; }
        #text-overflow-ellipsis{ text-overflow:ellipsis;}
        #text-overflow-ellipsis .block { text-overflow: ellipsis; }
	    `}</style>
    <LayoutSingle
      property="text-overflow"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/text-overflow"
      description=<React.Fragment>
        <p>Defines how the hidden text content behaves if it's overflowing.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`text-overflow: clip;`}
        >
          <p>
            The text content is <strong>clipped</strong> and not accessible.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-overflow "
            id="text-overflow-clip"
          >
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-overflow: ellipsis;`}>
          <p>
            The overflowing content is replaced by an <strong>ellipsis</strong>:{" "}
            <code>…</code>
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-overflow "
            id="text-overflow-ellipsis"
          >
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TextOverflow;
