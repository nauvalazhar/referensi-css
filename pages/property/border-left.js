import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderLeft = () => (
  <React.Fragment>
    <style>{`
        #border-left-4px-dotted-red{ border-left:4px dotted red;}
        #border-left-2px-solid{ border-left:2px solid;}
	    `}</style>
    <LayoutSingle
      property="border-left"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-left"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/border-left-width`}>
              <a className="hash" data-property-name="border-left-width">
                border-left-width
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/border-left-style`}>
              <a className="hash" data-property-name="border-left-style">
                border-left-style
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/border-left-color`}>
              <a className="hash" data-property-name="border-left-color">
                border-left-color
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`border-left: 4px dotted red;`}>
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
            className="example-output-div border-left "
            id="border-left-4px-dotted-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-left: 2px solid;`}>
          <p>
            Only the <em>color</em> is <strong>optional</strong>. If you omit
            it, the color applied will be the color of the <strong>text</strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-left "
            id="border-left-2px-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderLeft;
