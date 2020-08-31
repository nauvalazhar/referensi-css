import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const GridGap = () => (
  <React.Fragment>
    <style>{`
        .grid-gap { display: grid;grid-template-columns: auto auto auto;padding: 0; }
        #grid-gap-0-0{ grid-gap:0 0;}
        #grid-gap-10px{ grid-gap:10px;}
        #grid-gap-3rem-1rem{ grid-gap:3rem 1rem;}
	    `}</style>
    <LayoutSingle
      property="grid-gap"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-gap"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/grid-row-gap`}>
              <a className="hash" data-property-name="grid-row-gap">
                grid-row-gap
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/grid-column-gap`}>
              <a className="hash" data-property-name="grid-column-gap">
                grid-column-gap
              </a>
            </Link>
          </code>
          .
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-gap: 0 0;`}
        >
          <p>Removes both rows and columns gaps.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-gap " id="grid-gap-0-0">
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-gap: 10px;`}>
          <p>
            You can set a <strong>single value</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-gap " id="grid-gap-10px">
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`grid-gap: 3rem 1rem;`}>
          <p>
            You can set a value for <strong>each</strong> direction: rows first,
            columns second.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div grid-gap " id="grid-gap-3rem-1rem">
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridGap;
