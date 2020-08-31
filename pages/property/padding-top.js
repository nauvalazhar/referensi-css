import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const PaddingTop = () => (
  <React.Fragment>
    <style>{`
        .padding-top { background: hsl(0, 0%, 80%);border: 1em solid hsl(0, 0%, 80%);padding: 0; }
        .padding-top .block { border-radius: 0;padding: 0; }.padding-top .block--alpha { position: relative; }.padding-top .box { left: 0;position: absolute;right: 0;top: 0; }
        #padding-top-0 .box { display: none; }
        #padding-top-50px .block--alpha { padding-top: 50px; }#padding-top-50px .box { height: 50px; }#padding-top-50px .box:before { content: "50px"; }
        #padding-top-7em .block--alpha { padding-top: 7em; }#padding-top-7em .box { height: 7em; }#padding-top-7em .box:before { content: "7em"; }
        #padding-top-30 .block--alpha { padding-top: 30%; }#padding-top-30 .box { height: 60px;top: 1.2em;transform: rotate(-90deg) translateX(-100%);transform-origin: top left;width: 30%; }#padding-top-30 .box:before { content: "30%"; }
	    `}</style>
    <LayoutSingle
      property="padding-top"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/padding-top"
      description=<React.Fragment>
        <p>
          Defines the space <strong>inside</strong> the element, on the{" "}
          <strong>top</strong> side.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`padding-top: 0;`}
        >
          <p>Removes any padding on the top.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div padding-top " id="padding-top-0">
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
        <SectionExample.Property declaration={`padding-top: 50px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div padding-top "
            id="padding-top-50px"
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
        <SectionExample.Property declaration={`padding-top: 7em;`}>
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
          <div className="example-output-div padding-top " id="padding-top-7em">
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
        <SectionExample.Property declaration={`padding-top: 30%;`}>
          <p>
            You can use <strong>percentage</strong> values.
            <br />
            The percentage is based on the <em>width</em> of the{" "}
            <em>element</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div padding-top " id="padding-top-30">
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

export default PaddingTop;
