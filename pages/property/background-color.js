import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BackgroundColor = () => (
  <React.Fragment>
    <style>{`
        #background-color-transparent{ background-color:transparent;}
        #background-color-red{ background-color:red;}
        #background-color-05ffb0{ background-color:#05ffb0;}
        #background-color-rgb50-115-220{ background-color:rgb(50, 115, 220);}
        #background-color-rgba50-115-220-03{ background-color:rgba(50, 115, 220, 0.3);}
        #background-color-hsl14-100-53{ background-color:hsl(14, 100%, 53%);}
        #background-color-hsla14-100-53-06{ background-color:hsla(14, 100%, 53%, 0.6);}
	    `}</style>
    <LayoutSingle
      property="background-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-color"
      description=<React.Fragment>
        <p>Defines the color of the element's background.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-color: transparent;`}
        >
          <p>
            By default, the background color is <strong>transparent</strong>,
            basically meaning that there is <strong>no</strong> background
            color.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-transparent"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-color: red;`}>
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
            className="example-output-div background-color "
            id="background-color-red"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-color: #05ffb0;`}>
          <p>
            You can use <strong>hexadecimal</strong> color codes.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-color "
            id="background-color-05ffb0"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: rgb(50, 115, 220);`}
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
            className="example-output-div background-color "
            id="background-color-rgb50-115-220"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: rgba(50, 115, 220, 0.3);`}
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
            className="example-output-div background-color "
            id="background-color-rgba50-115-220-03"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: hsl(14, 100%, 53%);`}
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
            className="example-output-div background-color "
            id="background-color-hsl14-100-53"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-color: hsla(14, 100%, 53%, 0.6);`}
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
            className="example-output-div background-color "
            id="background-color-hsla14-100-53-06"
          >
            Hello World
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundColor;
