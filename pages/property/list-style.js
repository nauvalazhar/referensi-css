import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const ListStyle = () => (
  <React.Fragment>
    <LayoutSingle
      property="list-style"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/list-style"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/list-style-type`}>
              <a className="hash" data-property-name="list-style-type">
                list-style-type
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/list-style-image`}>
              <a className="hash" data-property-name="list-style-image">
                list-style-image
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/list-style-position`}>
              <a className="hash" data-property-name="list-style-position">
                list-style-position
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    ></LayoutSingle>
  </React.Fragment>
);

export default ListStyle;
