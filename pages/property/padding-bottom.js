import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const PaddingBottom = () => (
  <React.Fragment>
    <style>{`
        .padding-bottom { background: hsl(0, 0%, 80%);border: 1em solid hsl(0, 0%, 80%);padding: 0; }
        .padding-bottom .block { border-radius: 0;padding: 0; }.padding-bottom .block--alpha { position: relative; }.padding-bottom .box { bottom: 0;left: 0;position: absolute;right: 0; }
        #padding-bottom-0 .box { display: none; }
        #padding-bottom-50px .block--alpha { padding-bottom: 50px; }#padding-bottom-50px .box { height: 50px; }#padding-bottom-50px .box:before { content: "50px"; }
        #padding-bottom-7em .block--alpha { padding-bottom: 7em; }#padding-bottom-7em .box { height: 7em; }#padding-bottom-7em .box:before { content: "7em"; }
        #padding-bottom-30 .block--alpha { padding-bottom: 30%; }#padding-bottom-30 .box { bottom: 1.2em;height: 60px;transform: rotate(-90deg) translateY(60px);transform-origin: bottom left;width: 30%; }#padding-bottom-30 .box:before { content: "30%"; }
	    `}</style>
    <LayoutSingle
      property="padding-bottom"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom"
      description=<React.Fragment>
        <p>
          Defines the space <strong>inside</strong> the element, on the{" "}
          <strong>bottom</strong> side.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`padding-bottom: 0;`}
        >
          <p>Removes any padding on the bottom.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-bottom "
            id="padding-bottom-0"
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
        <SectionExample.Property declaration={`padding-bottom: 50px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-bottom "
            id="padding-bottom-50px"
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
        <SectionExample.Property declaration={`padding-bottom: 7em;`}>
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
            className="example-output-div padding-bottom "
            id="padding-bottom-7em"
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
        <SectionExample.Property declaration={`padding-bottom: 30%;`}>
          <p>
            You can use <strong>percentage</strong> values.
            <br />
            The percentage is based on the <em>width</em> of the{" "}
            <em>element</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-bottom "
            id="padding-bottom-30"
          >
            <div className="block block--pink">First item</div>
            <div className="block block--alpha">
              <strong>Target </strong>
            </div>
            <div className="block block--yellow">Third item</div>
            <div className="box box--plum"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default PaddingBottom;
