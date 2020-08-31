import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderBottom = () => (
  <React.Fragment>
    <style>{`
        #border-bottom-4px-dotted-red{ border-bottom:4px dotted red;}
        #border-bottom-2px-solid{ border-bottom:2px solid;}
	    `}</style>
    <LayoutSingle
      property="border-bottom"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-bottom"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/border-bottom-width`}>
              <a className="hash" data-property-name="border-bottom-width">
                border-bottom-width
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/border-bottom-style`}>
              <a className="hash" data-property-name="border-bottom-style">
                border-bottom-style
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/border-bottom-color`}>
              <a className="hash" data-property-name="border-bottom-color">
                border-bottom-color
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`border-bottom: 4px dotted red;`}>
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
            className="example-output-div border-bottom "
            id="border-bottom-4px-dotted-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-bottom: 2px solid;`}>
          <p>
            Only the <em>color</em> is <strong>optional</strong>. If you omit
            it, the color applied will be the color of the <strong>text</strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-bottom "
            id="border-bottom-2px-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderBottom;
