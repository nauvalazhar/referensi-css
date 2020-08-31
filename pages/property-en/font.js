import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Font = () => (
  <React.Fragment>
    <LayoutSingle
      property="font"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/font"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/font-style`}>
              <a className="hash" data-property-name="font-style">
                font-style
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/font-variant`}>
              <a className="hash" data-property-name="font-variant">
                font-variant
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/font-weight`}>
              <a className="hash" data-property-name="font-weight">
                font-weight
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/font-size`}>
              <a className="hash" data-property-name="font-size">
                font-size
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/line-height`}>
              <a className="hash" data-property-name="line-height">
                line-height
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/font-family`}>
              <a className="hash" data-property-name="font-family">
                font-family
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    ></LayoutSingle>
  </React.Fragment>
);

export default Font;
