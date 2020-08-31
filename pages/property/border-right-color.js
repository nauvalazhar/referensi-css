import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderRightColor = () => (
  <React.Fragment>
    <style>{`
        .border-right-color { border-right-style: solid;border-right-width: 4px; }
        #border-right-color-transparent{ border-right-color:transparent;}
        #border-right-color-red{ border-right-color:red;}
        #border-right-color-05ffb0{ border-right-color:#05ffb0;}
	    `}</style>
    <LayoutSingle
      property="border-right-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-right-color"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-color`}>border-color</a>
          </code>
          , but for the <strong>right</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          declaration={`border-right-color: transparent;`}
        >
          <p>
            Applies a <strong>transparent</strong> color to the right border.
            The right border will still take up the <em>space</em> defined by
            the <code>border-width</code> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-color "
            id="border-right-color-transparent"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-color: red;`}>
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
            className="example-output-div border-right-color "
            id="border-right-color-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right-color: #05ffb0;`}>
          <p>
            You can use <strong>hexadecimal</strong> color codes,{" "}
            <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>,{" "}
            <code>hsla()</code>...
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right-color "
            id="border-right-color-05ffb0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderRightColor;
