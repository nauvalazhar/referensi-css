import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderLeftColor = () => (
  <React.Fragment>
    <style>{`
        .border-left-color { border-left-style: solid;border-left-width: 4px; }
        #border-left-color-transparent{ border-left-color:transparent;}
        #border-left-color-red{ border-left-color:red;}
        #border-left-color-05ffb0{ border-left-color:#05ffb0;}
	    `}</style>
    <LayoutSingle
      property="border-left-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-left-color"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-color`}>border-color</a>
          </code>
          , but for the <strong>left</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          declaration={`border-left-color: transparent;`}
        >
          <p>
            Applies a <strong>transparent</strong> color to the left border. The
            left border will still take up the <em>space</em> defined by the{" "}
            <code>border-width</code> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-color "
            id="border-left-color-transparent"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-color: red;`}>
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
            className="example-output-div border-left-color "
            id="border-left-color-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left-color: #05ffb0;`}>
          <p>
            You can use <strong>hexadecimal</strong> color codes,{" "}
            <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>,{" "}
            <code>hsla()</code>...
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left-color "
            id="border-left-color-05ffb0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderLeftColor;
