import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Background = () => (
  <React.Fragment>
    <LayoutSingle
      property="background"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background"
      description=<React.Fragment>
        <p>
          Properti steno (<i>shorthand</i>) untuk{" "}
          <code className="shorthand">
            <Link href={`/property/background-image`}>
              <a className="hash" data-property-name="background-image">
                background-image
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/background-position`}>
              <a className="hash" data-property-name="background-position">
                background-position
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/background-size`}>
              <a className="hash" data-property-name="background-size">
                background-size
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/background-repeat`}>
              <a className="hash" data-property-name="background-repeat">
                background-repeat
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/background-origin`}>
              <a className="hash" data-property-name="background-origin">
                background-origin
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/background-clip`}>
              <a className="hash" data-property-name="background-clip">
                background-clip
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/background-attachment`}>
              <a className="hash" data-property-name="background-attachment">
                background-attachment
              </a>
            </Link>
          </code>{" "}
          dan{" "}
          <code className="shorthand">
            <Link href={`/property/background-color`}>
              <a className="hash" data-property-name="background-color">
                background-color
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    ></LayoutSingle>
  </React.Fragment>
);

export default Background;
