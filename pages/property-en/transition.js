import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const Transition = () => (
  <React.Fragment>
    <style>{`
        .transition { padding: 0; }
        .transition:hover .square { background: hsl(348, 100%, 61%);color: #fff;transform: translateX(200%); }
        #transition-1s .square { transition: 1s; }
        #transition-1s-linear .square { transition: 1s linear; }
        #transition-background-1s-linear .square { transition: background 1s linear; }
        #transition-background-1s-linear-500ms .square { transition: background 1s linear 500ms; }
        #transition-background-4s-transform-1s .square { transition: background 4s, transform 1s; }
	    `}</style>
    <LayoutSingle
      property="transition"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/transition"
      description=<React.Fragment>
        <p>
          Shorthand property for{" "}
          <code className="shorthand">
            <Link href={`/property/transition-property`}>
              <a className="hash" data-property-name="transition-property">
                transition-property
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/transition-duration`}>
              <a className="hash" data-property-name="transition-duration">
                transition-duration
              </a>
            </Link>
          </code>{" "}
          <code className="shorthand">
            <Link href={`/property/transition-timing-function`}>
              <a
                className="hash"
                data-property-name="transition-timing-function"
              >
                transition-timing-function
              </a>
            </Link>
          </code>{" "}
          and{" "}
          <code className="shorthand">
            <Link href={`/property/transition-delay`}>
              <a className="hash" data-property-name="transition-delay">
                transition-delay
              </a>
            </Link>
          </code>
          .
        </p>
        <p>
          Only <code>transition-duration</code> is <strong>required</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`transition: 1s;`}>
          <ul>
            <li>
              <code>transition-duration</code> is <strong>set</strong> to{" "}
              <code>1s</code>
            </li>
            <li>
              <code>transition-property</code> <em>defaults</em> to{" "}
              <code>all</code>
            </li>
            <li>
              <code>transition-timing-function</code> <em>defaults</em> to{" "}
              <code>ease</code>
            </li>
            <li>
              <code>transition-delay</code> <em>defaults</em> to <code>0s</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div transition " id="transition-1s">
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition: 1s linear;`}>
          <ul>
            <li>
              <code>transition-duration</code> is <strong>set</strong> to{" "}
              <code>1s</code>
            </li>
            <li>
              <code>transition-property</code> <em>defaults</em> to{" "}
              <code>all</code>
            </li>
            <li>
              <code>transition-timing-function</code> is <strong>set</strong> to{" "}
              <code>linear</code>
            </li>
            <li>
              <code>transition-delay</code> <em>defaults</em> to <code>0s</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition "
            id="transition-1s-linear"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition: background 1s linear;`}
        >
          <ul>
            <li>
              <code>transition-duration</code> is <strong>set</strong> to{" "}
              <code>1s</code>
            </li>
            <li>
              <code>transition-property</code> is <strong>set</strong> to{" "}
              <code>background</code>
            </li>
            <li>
              <code>transition-timing-function</code> is <strong>set</strong> to{" "}
              <code>linear</code>
            </li>
            <li>
              <code>transition-delay</code> <em>defaults</em> to <code>0s</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition "
            id="transition-background-1s-linear"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition: background 1s linear 500ms;`}
        >
          <ul>
            <li>
              <code>transition-duration</code> is <strong>set</strong> to{" "}
              <code>1s</code>
            </li>
            <li>
              <code>transition-property</code> is <strong>set</strong> to{" "}
              <code>background</code>
            </li>
            <li>
              <code>transition-timing-function</code> is <strong>set</strong> to{" "}
              <code>linear</code>
            </li>
            <li>
              <code>transition-delay</code> is <strong>set</strong> to{" "}
              <code>500ms</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition "
            id="transition-background-1s-linear-500ms"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition: background 4s, transform 1s;`}
        >
          <p>
            You can combine <strong>multiple properties</strong> with their own
            transition duration.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition "
            id="transition-background-4s-transform-1s"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Transition;
