import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const TransitionProperty = () => (
  <React.Fragment>
    <style>{`
        .transition-property { padding: 0; }
        .transition-property:hover .square { background: hsl(348, 100%, 61%);color: #fff;transform: translateX(200%); }
        .transition-property .square { transition-duration: 1s;transition-timing-function: linear; }
        #transition-property-all .square { transition-property: all; }
        #transition-property-none .square { transition-property: none; }
        #transition-property-background .square { transition-property: background; }
        #transition-property-color .square { transition-property: color; }
        #transition-property-transform .square { transition-property: transform; }
	    `}</style>
    <LayoutSingle
      property="transition-property"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/transition-property"
      description=<React.Fragment>
        <p>Defines which properties will transition.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`transition-property: all;`}
        >
          <p>
            The element will transition <strong>all</strong> properties:
          </p>
          <ul>
            <li>
              <code className="shorthand">
                <a href={`http://cssreference.io/#background`}>background</a>
              </code>
            </li>
            <li>
              <code className="shorthand">
                <a href={`http://cssreference.io/#color`}>color</a>
              </code>
            </li>
            <li>
              <code className="shorthand">
                <a href={`http://cssreference.io/#transform`}>transform</a>
              </code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-property "
            id="transition-property-all"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition-property: none;`}>
          <p>
            The element will transition <strong>no</strong> property: the
            transition is thus <strong>instant</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-property "
            id="transition-property-none"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-property: background;`}
        >
          <p>
            The element will only transtion the <strong>background</strong>{" "}
            property.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-property "
            id="transition-property-background"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`transition-property: color;`}>
          <p>
            The element will only transtion the <strong>color</strong> property.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-property "
            id="transition-property-color"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`transition-property: transform;`}
        >
          <p>
            The element will only transtion the <strong>transform</strong>{" "}
            property.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div transition-property "
            id="transition-property-transform"
          >
            <p className="square square--alpha">Hover me</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TransitionProperty;
