import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderColor = () => (
  <React.Fragment>
    <style>{`
        .border-color { border-style: solid;border-width: 4px; }
        #border-color-transparent{ border-color:transparent;}
        #border-color-red{ border-color:red;}
        #border-color-05ffb0{ border-color:#05ffb0;}
        #border-color-rgb50-115-220{ border-color:rgb(50, 115, 220);}
        #border-color-rgba50-115-220-03{ border-color:rgba(50, 115, 220, 0.3);}
        #border-color-hsl14-100-53{ border-color:hsl(14, 100%, 53%);}
        #border-color-hsla14-100-53-06{ border-color:hsla(14, 100%, 53%, 0.6);}
	    `}</style>
    <LayoutSingle
      property="border-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-color"
      description=<React.Fragment>
        <p>Defines the color of the element's borders.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-color: transparent;`}
        >
          <p>
            Applies a <strong>transparent</strong> color to the borders. The
            borders will still take up the <em>space</em> defined by the{" "}
            <code>border-width</code> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-color "
            id="border-color-transparent"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-color: red;`}>
          <p>
            You can use one of the{" "}
            <strong>
              <a
                href={`https://developer.mozilla.org/en-US/docs/Web/CSS/color_value`}
              >
                140+ color names
              </a>
            </strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-color "
            id="border-color-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-color: #05ffb0;`}>
          <p>
            You can use <strong>hexadecimal</strong> color codes.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-color "
            id="border-color-05ffb0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-color: rgb(50, 115, 220);`}
        >
          <p>
            You can use <strong>rgb()</strong> color codes:
          </p>
          <ul>
            <li>
              the first value is for <code>red</code>
            </li>
            <li>
              the second value is for <code>green</code>
            </li>
            <li>
              the third value is for <code>blue</code>
            </li>
          </ul>
          <p>
            Each of them can have a value between <strong>0</strong> and{" "}
            <strong>255</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-color "
            id="border-color-rgb50-115-220"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-color: rgba(50, 115, 220, 0.3);`}
        >
          <p>
            You can use <strong>rgba()</strong> color codes:
          </p>
          <ul>
            <li>
              the first 3 values are for <code>rgb</code>
            </li>
            <li>
              the 4th value is for the <code>alpha</code> channel and defines
              the opacity of the color
            </li>
          </ul>
          <p>
            The alpha value can go from zero <strong>0</strong> (transparent) to
            one <strong>1</strong> (opaque).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-color "
            id="border-color-rgba50-115-220-03"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-color: hsl(14, 100%, 53%);`}
        >
          <p>
            You can use <strong>hsl()</strong> color codes:
          </p>
          <ul>
            <li>
              the first value is for <code>hue</code> and can go from{" "}
              <strong>0</strong> to <strong>359</strong>
            </li>
            <li>
              the second value is for <code>saturation</code> and go from{" "}
              <strong>0%</strong> to <strong>100%</strong>
            </li>
            <li>
              the third value is for <code>luminosity</code> and go from{" "}
              <strong>0%</strong> to <strong>100%</strong>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-color "
            id="border-color-hsl14-100-53"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`border-color: hsla(14, 100%, 53%, 0.6);`}
        >
          <p>
            You can use <strong>hsl()a</strong> color codes:
          </p>
          <ul>
            <li>
              the first 3 values are for <code>hsl</code>
            </li>
            <li>
              the 4th value is for the <code>alpha</code> channel and defines
              the opacity of the color
            </li>
          </ul>
          <p>
            The alpha value can go from zero <strong>0</strong> (transparent) to
            one <strong>1</strong> (opaque).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-color "
            id="border-color-hsla14-100-53-06"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderColor;
