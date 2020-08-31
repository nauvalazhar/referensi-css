import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const TransformOrigin = () => (
  <React.Fragment>
    <style>{`
        .transform-origin.is-animated .block--alpha { animation-name: rotateFull; }
        .transform-origin .block { height: 100px;width: 100px; }.transform-origin .block--container { padding: 0;position: relative; }.transform-origin .block--alpha { align-items: center;animation-duration: 5s;animation-iteration-count: infinite;animation-timing-function: linear;display: flex;justify-content: center; }.transform-origin .origin { background: hsl(348, 100%, 61%);border-radius: 290486px;height: 10px;margin: -5px 0 0 -5px;position: absolute;width: 10px; }
        #transform-origin-50-50-0{ transform-origin:50% 50% 0;}
        #transform-origin-50-50-0 .origin { left: 50%;top: 50%; }
        #transform-origin-20px-70{ transform-origin:20px 70%;}
        #transform-origin-20px-70 .origin { left: 20px;top: 70%; }#transform-origin-20px-70 .block--alpha { transform-origin: 20px 70%; }
        #transform-origin-top-right{ transform-origin:top right;}
        #transform-origin-top-right .origin { left: 100%;top: 0; }#transform-origin-top-right .block--alpha { transform-origin: top right; }
        #transform-origin-center-bottom{ transform-origin:center bottom;}
        #transform-origin-center-bottom .origin { left: 50%;top: 100%; }#transform-origin-center-bottom .block--alpha { transform-origin: center bottom; }
	    `}</style>
    <LayoutSingle
      property="transform-origin"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/transform-origin"
      description=<React.Fragment>
        <p>
          Defines the origin for transformations defined by the{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#transform`}>transform</a>
          </code>{" "}
          property.
        </p>
      </React.Fragment>
      animation={true}
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`transform-origin: 50% 50% 0;`}
        >
          <p>
            The transform origin is in the <strong>center</strong> of the
            element.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform-origin "
            id="transform-origin-50-50-0"
          >
            <div className="block block--container">
              <p className="block block--alpha">
                <span className="origin"></span>Hello world
              </p>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform-origin: 20px 70%;`}>
          <p>
            You can use <strong>2 values</strong>:
          </p>
          <ul>
            <li>
              the first value is the <strong>horizontal</strong> axis
            </li>
            <li>
              the second is the <strong>vertical</strong> axis
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform-origin "
            id="transform-origin-20px-70"
          >
            <div className="block block--container">
              <p className="block block--alpha">
                <span className="origin"></span>Hello world
              </p>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transform-origin: top right;`}>
          <p>
            You can use a combination of <strong>position keywords</strong>:{" "}
            <code>center</code>, <code>top</code>, <code>bottom</code>,{" "}
            <code>left</code> and <code>right</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform-origin "
            id="transform-origin-top-right"
          >
            <div className="block block--container">
              <p className="block block--alpha">
                <span className="origin"></span>Hello world
              </p>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transform-origin: center bottom;`}
        >
          <p>
            When using keywords, you can change the <strong>order</strong> of
            the axis, as long as each keywords is unambiguous.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transform-origin "
            id="transform-origin-center-bottom"
          >
            <div className="block block--container">
              <p className="block block--alpha">
                <span className="origin"></span>Hello world
              </p>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TransformOrigin;
