import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderBottomColor = () => (
  <React.Fragment>
    <style>{`
        .border-bottom-color { border-bottom-style: solid;border-bottom-width: 4px; }
        #border-bottom-color-transparent{ border-bottom-color:transparent;}
        #border-bottom-color-red{ border-bottom-color:red;}
        #border-bottom-color-05ffb0{ border-bottom-color:#05ffb0;}
	    `}</style>
    <LayoutSingle
      property="border-bottom-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-color"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-color`}>border-color</a>
          </code>
          , but for the <strong>bottom</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          declaration={`border-bottom-color: transparent;`}
        >
          <p>
            Applies a <strong>transparent</strong> color to the bottom border.
            The bottom border will still take up the <em>space</em> defined by
            the <code>border-width</code> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-color "
            id="border-bottom-color-transparent"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-color: red;`}>
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
            className="example-output-div border-bottom-color "
            id="border-bottom-color-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom-color: #05ffb0;`}>
          <p>
            You can use <strong>hexadecimal</strong> color codes,{" "}
            <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>,{" "}
            <code>hsla()</code>...
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom-color "
            id="border-bottom-color-05ffb0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderBottomColor;
