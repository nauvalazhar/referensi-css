import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const MinWidth = () => (
  <React.Fragment>
    <style>{`
        .min-width .block { display: inline-block;vertical-align: top; }
        #min-width-300px .block { min-width: 300px; }
        #min-width-5px .block { min-width: 5px; }
	    `}</style>
    <LayoutSingle
      property="min-width"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/min-width"
      description=<React.Fragment>
        <p>Defines the minimum width of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`min-width: 0;`}>
          <p>
            The element has <strong>no minimum</strong> width.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div min-width " id="min-width-0">
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`min-width: 300px;`}>
          <p>
            You can use <strong>numeric values</strong> like{" "}
            <strong>pixels</strong>, <strong>(r)em</strong>,{" "}
            <strong>percentages</strong>...
          </p>
          <p>
            If the <em>minimum</em> width is <strong>larger</strong> than the
            element's <em>actual</em> width, the min width will be applied.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div min-width " id="min-width-300px">
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`min-width: 5px;`}>
          <p>
            If the <em>minimum</em> width is <strong>smaller</strong> than the
            element's <em>actual</em> width, the min width has{" "}
            <strong>no effect</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div min-width " id="min-width-5px">
            <p className="block block--alpha">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default MinWidth;
