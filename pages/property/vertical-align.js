import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const VerticalAlign = () => (
  <React.Fragment>
    <style>{`
        .vertical-align .va-span { display: inline;padding: 0 0.25em; }.vertical-align .va-image { height: 32px;width: 32px; }
        #vertical-align-baseline .va-image { vertical-align: baseline; }
        #vertical-align-sub .va-image { vertical-align: sub; }
        #vertical-align-super .va-image { vertical-align: super; }
        #vertical-align-text-top .va-image { vertical-align: text-top; }
        #vertical-align-text-bottom .va-image { vertical-align: text-bottom; }
        #vertical-align-middle .va-image { vertical-align: middle; }
        #vertical-align-top .va-image { vertical-align: top; }
        #vertical-align-bottom .va-image { vertical-align: bottom; }
	    `}</style>
    <LayoutSingle
      property="vertical-align"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/vertical-align"
      description=<React.Fragment>
        <p>Defines how an inline or table-cell element aligns vertically.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: baseline;`}>
          <p>
            The element is aligned with the <strong>baseline</strong> of the
            parent.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-baseline"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: sub;`}>
          <p>
            The element is aligned with the <strong>subscript baseline</strong>{" "}
            of the parent.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-sub"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: super;`}>
          <p>
            The element is aligned with the{" "}
            <strong>superscript baseline</strong> of the parent.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-super"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: text-top;`}>
          <p>
            The element is aligned with the <strong>top</strong> of the parent's
            element <strong>font</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-text-top"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: text-bottom;`}>
          <p>
            The element is aligned with the <strong>bottom</strong> of the
            parent's element <strong>font</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-text-bottom"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: middle;`}>
          <p>
            The element is aligned with the <strong>baseline</strong>{" "}
            <em>plus</em> half the <strong>x-height</strong> of the parent.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-middle"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: top;`}>
          <p>
            The element is aligned with the <strong>top</strong> of the{" "}
            <strong>line</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-top"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`vertical-align: bottom;`}>
          <p>
            The element is aligned with the <strong>bottom</strong> of the{" "}
            <strong>line</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div vertical-align "
            id="vertical-align-bottom"
          >
            <p className="block">
              <span className="block block--alpha va-span">
                Some text before
              </span>{" "}
              <img className="va-image" src="/images/jt.png" />{" "}
              <span className="block block--alpha va-span">
                some text after
              </span>
              .
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default VerticalAlign;
