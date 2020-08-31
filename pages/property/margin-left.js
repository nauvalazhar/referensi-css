import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const MarginLeft = () => (
  <React.Fragment>
    <style>{`
        .margin-left { background: hsl(0, 0%, 80%);border: 1em solid hsl(0, 0%, 80%);padding: 0; }
        .margin-left .block { border-radius: 0; }.margin-left .block--alpha { position: relative; }.margin-left .box { bottom: 0;left: 0;position: absolute;top: 0;transform: translateX(-100%); }
        #margin-left-0 .box { display: none; }
        #margin-left-50px .block--alpha { margin-left: 50px; }#margin-left-50px .box { width: 50px; }#margin-left-50px .box:before { content: "50px"; }
        #margin-left-7em .block--alpha { margin-left: 7em; }#margin-left-7em .box { width: 7em; }#margin-left-7em .box:before { content: "7em"; }
        #margin-left-30 .block--alpha { margin-left: 30%; }#margin-left-30 .box { height: 2.4em;left: 0;top: 3.2em;transform: none;width: 30%; }#margin-left-30 .box:before { content: "30%"; }
        #margin-left-auto .block--alpha { margin-left: auto;width: 200px; }#margin-left-auto .box { height: 2.4em;left: 0;right: 200px;top: 3.2em;transform: none;width: auto; }#margin-left-auto .box:before { content: "auto"; }
	    `}</style>
    <LayoutSingle
      property="margin-left"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/margin-left"
      description=<React.Fragment>
        <p>
          Defines the space <strong>outside</strong> the element, on the{" "}
          <strong>left</strong> side.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`margin-left: 0;`}
        >
          <p>Removes any margin on the left.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin-left " id="margin-left-0">
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
        <SectionExample.Property declaration={`margin-left: 50px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div margin-left "
            id="margin-left-50px"
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
        <SectionExample.Property declaration={`margin-left: 7em;`}>
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
          <div className="example-output-div margin-left " id="margin-left-7em">
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
        <SectionExample.Property declaration={`margin-left: 30%;`}>
          <p>
            You can use <strong>percentage</strong> values.
            <br />
            The percentage is based on the <em>width</em> of the{" "}
            <em>container</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin-left " id="margin-left-30">
            <div className="block block--pink">First item</div>
            <div className="block block--alpha">
              <strong>Target </strong>
            </div>
            <div className="box box--plum"></div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`margin-left: auto;`}>
          <p>
            The <strong>auto</strong> keyword will give the left side a share of
            the <strong>remaining space</strong>.
          </p>
          <p>
            When combined with <code>margin-right: auto</code>, it will{" "}
            <strong>center</strong> the element, if a fixed width is defined.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div margin-left "
            id="margin-left-auto"
          >
            <div className="block block--pink">First item</div>
            <div className="block block--alpha">
              <strong>Target</strong>
              <br />
              width: 200px
            </div>
            <div className="box box--plum"></div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default MarginLeft;
