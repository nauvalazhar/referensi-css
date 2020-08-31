import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const FlexFlow = () => (
  <React.Fragment>
    <LayoutSingle
      property="flex-flow"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/flex-flow"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/flex-direction`}>
              <a className="hash" data-property-name="flex-direction">
                flex-direction
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/flex-wrap`}>
              <a className="hash" data-property-name="flex-wrap">
                flex-wrap
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    ></LayoutSingle>
  </React.Fragment>
);

export default FlexFlow;
