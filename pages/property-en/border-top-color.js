import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderTopColor = () => (
  <React.Fragment>
    <style>{`
        .border-top-color { border-top-style: solid;border-top-width: 4px; }
        #border-top-color-transparent{ border-top-color:transparent;}
        #border-top-color-red{ border-top-color:red;}
        #border-top-color-05ffb0{ border-top-color:#05ffb0;}
	    `}</style>
    <LayoutSingle
      property="border-top-color"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-top-color"
      description=<React.Fragment>
        <p>
          Like{" "}
          <code className="shorthand">
            <a href={`http://cssreference.io/#border-color`}>border-color</a>
          </code>
          , but for the <strong>top</strong> border only.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`border-top-color: transparent;`}>
          <p>
            Applies a <strong>transparent</strong> color to the top border. The
            top border will still take up the <em>space</em> defined by the{" "}
            <code>border-width</code> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-color "
            id="border-top-color-transparent"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-color: red;`}>
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
            className="example-output-div border-top-color "
            id="border-top-color-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top-color: #05ffb0;`}>
          <p>
            You can use <strong>hexadecimal</strong> color codes,{" "}
            <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>,{" "}
            <code>hsla()</code>...
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top-color "
            id="border-top-color-05ffb0"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderTopColor;
