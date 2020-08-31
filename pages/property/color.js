import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Color = () => (
  <React.Fragment>
    <style>{`
        .color { font-size: 1.5em; }
        #color-transparent{ color:transparent;}
        #color-red{ color:red;}
        #color-05ffb0{ color:#05ffb0;}
        #color-rgb50-115-220{ color:rgb(50, 115, 220);}
        #color-rgba0-0-0-05{ color:rgba(0, 0, 0, 0.5);}
        #color-rgba0-0-0-05{ background: #05ffb0; }
        #color-hsl14-100-53{ color:hsl(14, 100%, 53%);}
        #color-hsla14-100-53-06{ color:hsla(14, 100%, 53%, 0.6);}
	    `}</style>
    <LayoutSingle
      property="color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/color"
      description=<React.Fragment>
        <p>
          Defines the color of the <strong>text</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`color: transparent;`}>
          <p>
            Applies a <strong>transparent</strong> color to the text. The text
            will still take up the <em>space</em> it should.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div color " id="color-transparent">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`color: red;`}>
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
          <div className="example-output-div color " id="color-red">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`color: #05ffb0;`}>
          <p>
            You can use <strong>hexadecimal</strong> color codes.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div color " id="color-05ffb0">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`color: rgb(50, 115, 220);`}>
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
          <div className="example-output-div color " id="color-rgb50-115-220">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`color: rgba(0, 0, 0, 0.5);`}>
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
          <div className="example-output-div color " id="color-rgba0-0-0-05">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`color: hsl(14, 100%, 53%);`}>
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
          <div className="example-output-div color " id="color-hsl14-100-53">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`color: hsla(14, 100%, 53%, 0.6);`}
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
            className="example-output-div color "
            id="color-hsla14-100-53-06"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Color;
