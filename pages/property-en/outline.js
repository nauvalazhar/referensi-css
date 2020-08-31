import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Outline = () => (
  <React.Fragment>
    <style>{`
        #outline-4px-dotted-red{ outline:4px dotted red;}
        #outline-2px-solid{ outline:2px solid;}
	    `}</style>
    <LayoutSingle
      property="outline"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/outline"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/outline-width`}>
              <a className="hash" data-property-name="outline-width">
                outline-width
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/outline-style`}>
              <a className="hash" data-property-name="outline-style">
                outline-style
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/outline-color`}>
              <a className="hash" data-property-name="outline-color">
                outline-color
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`outline: 4px dotted red;`}>
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
            className="example-output-div outline "
            id="outline-4px-dotted-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`outline: 2px solid;`}>
          <p>
            Only the <em>color</em> is <strong>optional</strong>. If you omit
            it, the color applied will be the color of the <strong>text</strong>
            .
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div outline " id="outline-2px-solid">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Outline;
