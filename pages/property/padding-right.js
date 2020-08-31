import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const PaddingRight = () => (
  <React.Fragment>
    <style>{`
        .padding-right { background: hsl(0, 0%, 80%);border: 1em solid hsl(0, 0%, 80%);padding: 0; }
        .padding-right .block { border-radius: 0;padding-right: 0;text-align: right; }.padding-right .block--alpha { position: relative; }.padding-right .box { bottom: 0;right: 0;position: absolute;top: 0; }
        #padding-right-0 .box { display: none; }
        #padding-right-50px .block--alpha { padding-right: 50px; }#padding-right-50px .box { width: 50px; }#padding-right-50px .box:before { content: "50px"; }
        #padding-right-7em .block--alpha { padding-right: 7em; }#padding-right-7em .box { width: 7em; }#padding-right-7em .box:before { content: "7em"; }
        #padding-right-30 .block--alpha { padding-right: 30%; }#padding-right-30 .box { width: 30%; }#padding-right-30 .box:before { content: "30%"; }
	    `}</style>
    <LayoutSingle
      property="padding-right"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/padding-right"
      description=<React.Fragment>
        <p>
          Defines the space <strong>inside</strong> the element, on the{" "}
          <strong>right</strong> side.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`padding-right: 0;`}
        >
          <p>Removes any padding on the right.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-right "
            id="padding-right-0"
          >
            <div className="block block--pink">First item</div>
            <div className="block block--alpha">
              <strong>Target </strong>
              <div className="box box--plum"></div>
            </div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`padding-right: 50px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-right "
            id="padding-right-50px"
          >
            <div className="block block--pink">First item</div>
            <div className="block block--alpha">
              <strong>Target </strong>
              <div className="box box--plum"></div>
            </div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`padding-right: 7em;`}>
          <p>
            You can use <strong>(r)em</strong> values.
          </p>
          <p>
            The value is <strong>relative</strong> to the font size:
          </p>
          <ul>
            <li>
              <strong>em</strong>: relative to the <em>element</em>'s current
              font size
            </li>
            <li>
              <strong>rem</strong>: relative to <code>&lt;html&gt;</code> the{" "}
              <em>
                <strong>root</strong> element
              </em>
              's font size
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-right "
            id="padding-right-7em"
          >
            <div className="block block--pink">First item</div>
            <div className="block block--alpha">
              <strong>Target </strong>
              <div className="box box--plum"></div>
            </div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`padding-right: 30%;`}>
          <p>
            You can use <strong>percentage</strong> values.
            <br />
            The percentage is based on the <em>width</em> of the{" "}
            <em>element</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-right "
            id="padding-right-30"
          >
            <div className="block block--pink">First item</div>
            <div className="block block--alpha">
              <strong>Target </strong>
              <div className="box box--plum"></div>
            </div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default PaddingRight;
