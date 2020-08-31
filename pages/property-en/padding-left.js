import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const PaddingLeft = () => (
  <React.Fragment>
    <style>{`
        .padding-left { background: hsl(0, 0%, 80%);border: 1em solid hsl(0, 0%, 80%);padding: 0; }
        .padding-left .block { border-radius: 0;padding-left: 0; }.padding-left .block--alpha { position: relative; }.padding-left .box { bottom: 0;left: 0;position: absolute;top: 0; }
        #padding-left-0 .box { display: none; }
        #padding-left-50px .block--alpha { padding-left: 50px; }#padding-left-50px .box { width: 50px; }#padding-left-50px .box:before { content: "50px"; }
        #padding-left-7em .block--alpha { padding-left: 7em; }#padding-left-7em .box { width: 7em; }#padding-left-7em .box:before { content: "7em"; }
        #padding-left-30 .block--alpha { padding-left: 30%; }#padding-left-30 .box { width: 30%; }#padding-left-30 .box:before { content: "30%"; }
	    `}</style>
    <LayoutSingle
      property="padding-left"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/padding-left"
      description=<React.Fragment>
        <p>
          Defines the space <strong>inside</strong> the element, on the{" "}
          <strong>left</strong> side.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`padding-left: 0;`}
        >
          <p>Removes any padding on the left.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div padding-left " id="padding-left-0">
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
        <SectionExample.Property declaration={`padding-left: 50px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-left "
            id="padding-left-50px"
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
        <SectionExample.Property declaration={`padding-left: 7em;`}>
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
            className="example-output-div padding-left "
            id="padding-left-7em"
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
        <SectionExample.Property declaration={`padding-left: 30%;`}>
          <p>
            You can use <strong>percentage</strong> values.
            <br />
            The percentage is based on the <em>width</em> of the{" "}
            <em>element</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-left "
            id="padding-left-30"
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

export default PaddingLeft;
