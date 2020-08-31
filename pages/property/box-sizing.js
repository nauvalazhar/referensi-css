import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BoxSizing = () => (
  <React.Fragment>
    <style>{`
        .box-sizing .actual { border: 12px solid #310736;display: block;padding: 30px;position: relative;width: 200px; }.box-sizing span { background: hsl(48, 100%, 67%);display: block;padding: 5px 0; }.box-sizing .box { height: 23px;position: absolute;text-align: left;width: 200px; }.box-sizing .box:before { content: "200px"; }
        #box-sizing-content-box{ box-sizing:content-box;}
        #box-sizing-content-box .actual { box-sizing: content-box; }#box-sizing-content-box .box { left: 30px;top: 30px;width: 196px; }
        #box-sizing-border-box{ box-sizing:border-box;}
        #box-sizing-border-box .actual { box-sizing: border-box; }#box-sizing-border-box .box { height: 27px;left: -12px;top: 30px; }
	    `}</style>
    <LayoutSingle
      property="box-sizing"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/box-sizing"
      description=<React.Fragment>
        <p>
          Defines how the width and height of the element are calculated:
          whether they include the <em>padding</em> and <em>borders</em> or not.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`box-sizing: content-box;`}
        >
          <p>
            The <strong>width</strong> and <strong>height</strong> of the
            element only apply to the <strong>content</strong> of the element.
          </p>
          <p>For example, this element has</p>
          <ul>
            <li>
              <code>border-width: 12px</code>
            </li>
            <li>
              <code>padding: 30px</code>
            </li>
            <li>
              <code>width: 200px</code>
            </li>
          </ul>
          <p>
            The <em>full width</em> is 24px + 60px + 200px ={" "}
            <strong>284px</strong>.
          </p>
          <p>
            The content has the defined width. The box accomodates for those
            dimensions.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div box-sizing "
            id="box-sizing-content-box"
          >
            <div className="actual">
              <span>Hello world</span>
              <div className="box box--red"></div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`box-sizing: border-box;`}>
          <p>
            The <strong>width</strong> and <strong>height</strong> of the
            element apply to all parts of the element: the{" "}
            <strong>content</strong>, the <strong>padding</strong> and the{" "}
            <strong>borders</strong>.
          </p>
          <p>For example, this element has</p>
          <ul>
            <li>
              <code>border-width: 12px</code>
            </li>
            <li>
              <code>padding: 30px</code>
            </li>
            <li>
              <code>width: 200px</code>
            </li>
          </ul>
          <p>
            The <em>full width</em> is <strong>200px</strong>, no matter what.
          </p>
          <p>
            The box has the defined width. The content accomodates for those
            dimensions, and ends up being 200px - 60px - 24px ={" "}
            <strong>116px</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div box-sizing "
            id="box-sizing-border-box"
          >
            <div className="actual">
              <span>Hello world</span>
              <div className="box box--red"></div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BoxSizing;
