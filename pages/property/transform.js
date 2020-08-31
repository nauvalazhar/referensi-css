import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Transform = () => (
  <React.Fragment>
    <style>{`
        .transform { display: flex; }
        .transform .natural { height: 75px;position: absolute;width: 75px; }.transform .actual { height: 75px;position: relative;width: 75px; }
        #transform-none .actual:before { content: "no transform"; }
        #transform-translatex40px .actual { transform: translateX(40px); }#transform-translatex40px .actual:before { content: "translateX"; }
        #transform-translatey20px .actual { transform: translateY(20px); }#transform-translatey20px .actual:before { content: "translateY"; }
        #transform-translatey100 .actual { transform: translateY(100%); }#transform-translatey100 .actual:before { content: "translateY"; }
        #transform-translate20px--10 .actual { transform: translate(20px, -10%); }#transform-translate20px--10 .actual:before { content: "translate"; }
        #transform-scalex15 .actual { transform: scaleX(1.5); }#transform-scalex15 .actual:before { content: "scaleX"; }
        #transform-scaley04 .actual { transform: scaleY(0.4); }#transform-scaley04 .actual:before { content: "scaleY"; }
        #transform-scaley-2 .actual { transform: scaleY(-2); }#transform-scaley-2 .actual:before { content: "scaleY"; }
        #transform-scale08-08 .actual { transform: scale(0.8, 0.8); }#transform-scale08-08 .actual:before { content: "scale"; }
        #transform-rotate45deg .actual { transform: rotate(45deg); }#transform-rotate45deg .actual:before { content: "rotate"; }
        #transform-skewx15deg .actual { transform: skewX(15deg); }#transform-skewx15deg .actual:before { content: "skewX"; }
        #transform-skewy45deg .actual { transform: skewY(45deg); }#transform-skewy45deg .actual:before { content: "skewY"; }
        #transform-skew10deg--20deg .actual { transform: skew(10deg, -20deg); }#transform-skew10deg--20deg .actual:before { content: "skew"; }
        #transform-rotate5deg-scale11-11-translate-20-30px .actual { transform: rotate(5deg) scale(1.1, 1.1) translate(-20%, 30px); }#transform-rotate5deg-scale11-11-translate-20-30px .actual:before { content: "multi"; }
	    `}</style>
    <LayoutSingle
      property="transform"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/transform"
      description=<React.Fragment>
        <p>Defines how the element is transformed.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`transform: none;`}
        >
          <p>Removes any transformation.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div transform " id="transform-none">
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: translateX(40px);`}>
          <p>
            Move the element on the <strong>horizontal</strong> axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-translatex40px"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: translateY(20px);`}>
          <p>
            Move the element on the <strong>vertical</strong> axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-translatey20px"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: translateY(100%);`}>
          <p>
            You can use <strong>percentage</strong> values: the percentage is
            relative to the <strong>element itself</strong>, and not the parent.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-translatey100"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transform: translate(20px, -10%);`}
        >
          <p>
            You can use <code>translate()</code> with{" "}
            <strong>two values</strong>:
          </p>
          <ul>
            <li>
              the first value is for the <strong>horizontal</strong> axis
            </li>
            <li>
              the second value is for the <strong>vertical</strong> axis
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-translate20px--10"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: scaleX(1.5);`}>
          <p>
            Scale the element on the <strong>horizontal</strong> axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-scalex15"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: scaleY(0.4);`}>
          <p>
            Scale the element on the <strong>vertical</strong> axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-scaley04"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: scaleY(-2);`}>
          <p>
            You can use <strong>negative</strong> values: it will invert the
            element.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-scaley-2"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: scale(0.8, 0.8);`}>
          <p>
            You can use <code>scale()</code> with <strong>two values</strong>:
          </p>
          <ul>
            <li>
              the first value is for the <strong>horizontal</strong> axis
            </li>
            <li>
              the second value is for the <strong>vertical</strong> axis
            </li>
          </ul>
          <p>
            By using the same value for both, you can{" "}
            <strong>scale proportionally</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-scale08-08"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: rotate(45deg);`}>
          <p>Rotate the element.</p>
          <p>You can use:</p>
          <ul>
            <li>
              <strong>degrees</strong> from <code>0</code> to{" "}
              <code>360deg</code>
            </li>
            <li>
              <strong>gradians</strong> from <code>0</code> to{" "}
              <code>400grad</code>
            </li>
            <li>
              <strong>radians</strong> from <code>0</code> to <code>2πrad</code>
            </li>
            <li>
              <strong>turns</strong> from <code>0</code> to <code>1turn</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-rotate45deg"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: skewX(15deg);`}>
          <p>
            Skew the element on the <strong>horizontal</strong> axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-skewx15deg"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform: skewY(45deg);`}>
          <p>
            Skew the element on the <strong>vertical</strong> axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-skewy45deg"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transform: skew(10deg, -20deg);`}
        >
          <p>
            You can use <code>skew()</code> with <strong>two values</strong>:
          </p>
          <ul>
            <li>
              the first value is for the <strong>horizontal</strong> axis
            </li>
            <li>
              the second value is for the <strong>vertical</strong> axis
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-skew10deg--20deg"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transform: rotate(5deg) scale(1.1, 1.1) translate(-20%, 30px);`}
        >
          <p>
            You can combine <strong>multiple</strong> transformations by
            separating them with a space.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform "
            id="transform-rotate5deg-scale11-11-translate-20-30px"
          >
            <p className="natural">Natural position</p>
            <p className="actual"></p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Transform;
