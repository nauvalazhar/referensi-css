import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Animation = () => (
  <React.Fragment>
    <LayoutSingle
      property="animation"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/animation"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/animation-name`}>
              <a className="hash" data-property-name="animation-name">
                animation-name
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/animation-duration`}>
              <a className="hash" data-property-name="animation-duration">
                animation-duration
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/animation-timing-function`}>
              <a
                className="hash"
                data-property-name="animation-timing-function"
              >
                animation-timing-function
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/animation-delay`}>
              <a className="hash" data-property-name="animation-delay">
                animation-delay
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/animation-iteration-count`}>
              <a
                className="hash"
                data-property-name="animation-iteration-count"
              >
                animation-iteration-count
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/animation-direction`}>
              <a className="hash" data-property-name="animation-direction">
                animation-direction
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/animation-fill-mode`}>
              <a className="hash" data-property-name="animation-fill-mode">
                animation-fill-mode
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/animation-play-state`}>
              <a className="hash" data-property-name="animation-play-state">
                animation-play-state
              </a>
            </Link>
          </code>
          .
        </p>
        <p>
          Only <code>animation-duration</code> and <code>animation-name</code>{" "}
          are <strong>required</strong>.
        </p>
      </React.Fragment>
    ></LayoutSingle>
  </React.Fragment>
);

export default Animation;
