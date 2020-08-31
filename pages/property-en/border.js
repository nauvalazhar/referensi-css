import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Border = () => (
  <React.Fragment>
    <style>{`
        #border-4px-dotted-red{ border:4px dotted red;}
        #border-2px-solid{ border:2px solid;}
	    `}</style>
    <LayoutSingle
      property="border"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/border-width`}>
              <a className="hash" data-property-name="border-width">
                border-width
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/border-style`}>
              <a className="hash" data-property-name="border-style">
                border-style
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/border-color`}>
              <a className="hash" data-property-name="border-color">
                border-color
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`border: 4px dotted red;`}>
          <p>
            The <strong>order</strong> is important:
          </p>
          <ul>
            <li>width</li>
            <li>style</li>
            <li>color</li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border "
            id="border-4px-dotted-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border: 2px solid;`}>
          <p>
            Only the <em>color</em> is <strong>optional</strong>. If you omit
            it, the color applied will be the color of the <strong>text</strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div border " id="border-2px-solid">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Border;
