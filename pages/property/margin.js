import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Margin = () => (
  <React.Fragment>
    <style>{`
        .margin { background: hsl(0, 0%, 80%);border: 1em solid hsl(0, 0%, 80%);padding: 0; }
        .margin .block { border-radius: 0; }.margin .square { align-items: center;border-radius: 0;display: flex;height: auto;justify-content: center;width: auto; }.margin .container { align-items: stretch;display: flex; }.margin .block--alpha { flex-grow: 1;flex-shrink: 1; }
        #margin-0 .box { display: none; }
        #margin-30px .square--top { height: 30px; }#margin-30px .square--top:before { content: "30px"; }#margin-30px .square--bottom { height: 30px; }#margin-30px .square--bottom:before { content: "30px"; }#margin-30px .square--left:before { content: "30px";width: 30px; }#margin-30px .square--right:before { content: "30px";width: 30px; }
        #margin-30px-60px .square--top { height: 30px; }#margin-30px-60px .square--top:before { content: "30px"; }#margin-30px-60px .square--bottom { height: 30px; }#margin-30px-60px .square--bottom:before { content: "30px"; }#margin-30px-60px .square--left:before { content: "60px";width: 60px; }#margin-30px-60px .square--right:before { content: "60px";width: 60px; }
        #margin-30px-60px-45px .square--top { height: 30px; }#margin-30px-60px-45px .square--top:before { content: "30px"; }#margin-30px-60px-45px .square--bottom { height: 45px; }#margin-30px-60px-45px .square--bottom:before { content: "45px"; }#margin-30px-60px-45px .square--left:before { content: "60px";width: 60px; }#margin-30px-60px-45px .square--right:before { content: "60px";width: 60px; }
        #margin-30px-60px-45px-85px .square--top { height: 30px; }#margin-30px-60px-45px-85px .square--top:before { content: "30px"; }#margin-30px-60px-45px-85px .square--bottom { height: 45px; }#margin-30px-60px-45px-85px .square--bottom:before { content: "45px"; }#margin-30px-60px-45px-85px .square--left:before { content: "85px";width: 85px; }#margin-30px-60px-45px-85px .square--right:before { content: "60px";width: 60px; }
	    `}</style>
    <LayoutSingle
      property="margin"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/margin"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/margin-top`}>
              <a className="hash" data-property-name="margin-top">
                margin-top
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/margin-right`}>
              <a className="hash" data-property-name="margin-right">
                margin-right
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/margin-bottom`}>
              <a className="hash" data-property-name="margin-bottom">
                margin-bottom
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/margin-left`}>
              <a className="hash" data-property-name="margin-left">
                margin-left
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`margin: 0;`}>
          <p>Removes all margins.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin " id="margin-0">
            <div className="block block--pink">First item</div>
            <div className="square square--top"></div>
            <div className="container">
              <div className="square square--left"></div>
              <div className="block block--alpha">
                <strong>Target </strong>
              </div>
              <div className="square square--right"></div>
            </div>
            <div className="square square--bottom"></div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`margin: 30px;`}>
          <p>
            When using <strong>1</strong> value, the margin is set for{" "}
            <strong>all 4 sides</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin " id="margin-30px">
            <div className="block block--pink">First item</div>
            <div className="square square--top"></div>
            <div className="container">
              <div className="square square--left"></div>
              <div className="block block--alpha">
                <strong>Target </strong>
              </div>
              <div className="square square--right"></div>
            </div>
            <div className="square square--bottom"></div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`margin: 30px 60px;`}>
          <p>
            When using <strong>2</strong> values:
          </p>
          <ul>
            <li>
              the <strong>first</strong> value is for{" "}
              <strong>top/bottom</strong>
            </li>
            <li>
              the <strong>second</strong> value is for{" "}
              <strong>right/left</strong>
            </li>
          </ul>
          <p>
            To remember the <strong>order</strong> think about the values you{" "}
            <strong>haven't defined</strong>.
          </p>
          <p>
            If you enter <strong>2</strong> values (top/right), you{" "}
            <em>omit</em> setting bottom and left. Because bottom is the
            vertical counterpart of top, it will use top’s value. And because
            left is the horizontal counterpart of right, it will use right’s
            value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div margin " id="margin-30px-60px">
            <div className="block block--pink">First item</div>
            <div className="square square--top"></div>
            <div className="container">
              <div className="square square--left"></div>
              <div className="block block--alpha">
                <strong>Target </strong>
              </div>
              <div className="square square--right"></div>
            </div>
            <div className="square square--bottom"></div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`margin: 30px 60px 45px;`}>
          <p>
            When using <strong>3</strong> values:
          </p>
          <ul>
            <li>
              the <strong>first</strong> value is for <strong>top</strong>
            </li>
            <li>
              the <strong>second</strong> value is for{" "}
              <strong>right/left</strong>
            </li>
            <li>
              the <strong>third</strong> value is for <strong>bottom</strong>
            </li>
          </ul>
          <p>
            To remember the <strong>order</strong> think about the values you{" "}
            <strong>haven't defined</strong>.
          </p>
          <p>
            If you enter <strong>3</strong> values (top/right/bottom), you omit
            setting left. As right’s counterpart, it will use its value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div margin "
            id="margin-30px-60px-45px"
          >
            <div className="block block--pink">First item</div>
            <div className="square square--top"></div>
            <div className="container">
              <div className="square square--left"></div>
              <div className="block block--alpha">
                <strong>Target </strong>
              </div>
              <div className="square square--right"></div>
            </div>
            <div className="square square--bottom"></div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`margin: 30px 60px 45px 85px;`}>
          <p>
            When using <strong>4</strong> values:
          </p>
          <ul>
            <li>
              the <strong>first</strong> value is for <strong>top</strong>
            </li>
            <li>
              the <strong>second</strong> value is for <strong>right</strong>
            </li>
            <li>
              the <strong>third</strong> value is for <strong>bottom</strong>
            </li>
            <li>
              the <strong>fourth</strong> value is for <strong>left</strong>
            </li>
          </ul>
          <p>
            To remember the <strong>order</strong>, start at the{" "}
            <strong>top</strong> and go <strong>clockwise</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div margin "
            id="margin-30px-60px-45px-85px"
          >
            <div className="block block--pink">First item</div>
            <div className="square square--top"></div>
            <div className="container">
              <div className="square square--left"></div>
              <div className="block block--alpha">
                <strong>Target </strong>
              </div>
              <div className="square square--right"></div>
            </div>
            <div className="square square--bottom"></div>
            <div className="block block--yellow">Third item</div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Margin;
