import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const MarginRight = () => (
  <React.Fragment>
    <style>{`
        .margin-right { background: hsl(0, 0%, 80%);border: 1em solid hsl(0, 0%, 80%);padding: 0; }
        .margin-right .block { border-radius: 0; }.margin-right .block--alpha { position: relative; }.margin-right .box { bottom: 0;position: absolute;right: 0;top: 0;transform: translateX(100%); }
        #margin-right-0 .box { display: none; }
        #margin-right-50px .block--alpha { margin-right: 50px; }#margin-right-50px .box { width: 50px; }#margin-right-50px .box:before { content: "50px"; }
        #margin-right-7em .block--alpha { margin-right: 7em; }#margin-right-7em .box { width: 7em; }#margin-right-7em .box:before { content: "7em"; }
        #margin-right-30 .block--alpha { margin-right: 30%; }#margin-right-30 .box { height: 2.4em;right: 0;top: 3.2em;transform: none;width: 30%; }#margin-right-30 .box:before { content: "30%"; }
        #margin-right-auto .block--alpha { margin-right: auto;width: 200px; }#margin-right-auto .box { height: 2.4em;left: 200px;right: 0;top: 3.2em;transform: none;width: auto; }#margin-right-auto .box:before { content: "auto"; }
	    `}</style>
    <LayoutSingle
      property="margin-right"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/margin-right"
      description=<React.Fragment>
        <p>
          Defines the space <strong>outside</strong> the element, on the{" "}
          <strong>right</strong> side.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`margin-right: 0;`}
        >
          <p>Removes any margin on the right.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin-right " id="margin-right-0">
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
        <SectionExample.Property declaration={`margin-right: 50px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div margin-right "
            id="margin-right-50px"
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
        <SectionExample.Property declaration={`margin-right: 7em;`}>
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
            className="example-output-div margin-right "
            id="margin-right-7em"
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
        <SectionExample.Property declaration={`margin-right: 30%;`}>
          <p>
            You can use <strong>percentage</strong> values.
            <br />
            The percentage is based on the <em>width</em> of the{" "}
            <em>container</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div margin-right "
            id="margin-right-30"
          >
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
        <SectionExample.Property declaration={`margin-right: auto;`}>
          <p>
            The <strong>auto</strong> keyword will give the right side a share
            of the <strong>remaining space</strong>.
          </p>
          <p>
            When combined with <code>margin-left: auto</code>, it will{" "}
            <strong>center</strong> the element, if a fixed width is defined.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div margin-right "
            id="margin-right-auto"
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

export default MarginRight;
