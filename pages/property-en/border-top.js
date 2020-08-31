import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BorderTop = () => (
  <React.Fragment>
    <style>{`
        #border-top-4px-dotted-red{ border-top:4px dotted red;}
        #border-top-2px-solid{ border-top:2px solid;}
	    `}</style>
    <LayoutSingle
      property="border-top"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-top"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/border-top-width`}>
              <a className="hash" data-property-name="border-top-width">
                border-top-width
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/border-top-style`}>
              <a className="hash" data-property-name="border-top-style">
                border-top-style
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/border-top-color`}>
              <a className="hash" data-property-name="border-top-color">
                border-top-color
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`border-top: 4px dotted red;`}>
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
            className="example-output-div border-top "
            id="border-top-4px-dotted-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-top: 2px solid;`}>
          <p>
            Only the <em>color</em> is <strong>optional</strong>. If you omit
            it, the color applied will be the color of the <strong>text</strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-top "
            id="border-top-2px-solid"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderTop;
