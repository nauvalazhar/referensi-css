import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderRight = () => (
  <React.Fragment>
    <style>{`
        #border-right-4px-dotted-red{ border-right:4px dotted red;}
        #border-right-2px-solid{ border-right:2px solid;}
	    `}</style>
    <LayoutSingle
      property="border-right"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-right"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/border-right-width`}>
              <a className="hash" data-property-name="border-right-width">
                border-right-width
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/border-right-style`}>
              <a className="hash" data-property-name="border-right-style">
                border-right-style
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/border-right-color`}>
              <a className="hash" data-property-name="border-right-color">
                border-right-color
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`border-right: 4px dotted red;`}>
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
            className="example-output-div border-right "
            id="border-right-4px-dotted-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-right: 2px solid;`}>
          <p>
            Only the <em>color</em> is <strong>optional</strong>. If you omit
            it, the color applied will be the color of the <strong>text</strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-right "
            id="border-right-2px-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderRight;
