import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const MarginTop = () => (
  <React.Fragment>
    <style>{`
        .margin-top { background: hsl(0, 0%, 80%);padding: 1em; }
        .margin-top .block { border-radius: 0; }.margin-top .block--alpha { position: relative; }.margin-top .box { left: 0;position: absolute;right: 0;top: 0;transform: translateY(-100%); }
        #margin-top-0 .box { display: none; }
        #margin-top-30px .block--alpha { margin-top: 30px; }#margin-top-30px .box { height: 30px; }#margin-top-30px .box:before { content: "30px"; }
        #margin-top-2em .block--alpha { margin-top: 2em; }#margin-top-2em .box { height: 2em; }#margin-top-2em .box:before { content: "2em"; }
        #margin-top-10 .block--alpha { margin-top: 10%; }#margin-top-10 .box { height: 100%;transform: rotate(-90deg);transform-origin: top left;width: 10%; }#margin-top-10 .box:before { content: "10%"; }
	    `}</style>
    <LayoutSingle
      property="margin-top"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/margin-top"
      description=<React.Fragment>
        <p>
          Defines the space <strong>outside</strong> the element, on the{" "}
          <strong>top</strong> side.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`margin-top: 0;`}
        >
          <p>Removes any margin at the top.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin-top " id="margin-top-0">
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
        <SectionExample.Property declaration={`margin-top: 30px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin-top " id="margin-top-30px">
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
        <SectionExample.Property declaration={`margin-top: 2em;`}>
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
          <div className="example-output-div margin-top " id="margin-top-2em">
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
        <SectionExample.Property declaration={`margin-top: 10%;`}>
          <p>
            You can use <strong>percentage</strong> values.
            <br />
            The percentage is based on the <em>width</em> of the{" "}
            <em>container</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin-top " id="margin-top-10">
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

export default MarginTop;
