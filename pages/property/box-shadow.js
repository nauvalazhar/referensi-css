import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BoxShadow = () => (
  <React.Fragment>
    <style>{`
        .box-shadow { background: #05ffb0;margin: 1em; }
        #box-shadow-none{ box-shadow:none;}
        #box-shadow-2px-6px{ box-shadow:2px 6px;}
        #box-shadow-2px-6px-red{ box-shadow:2px 6px red;}
        #box-shadow-2px-4px-10px-red{ box-shadow:2px 4px 10px red;}
        #box-shadow-2px-4px-10px-4px-red{ box-shadow:2px 4px 10px 4px red;}
	    `}</style>
    <LayoutSingle
      property="box-shadow"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/box-shadow"
      description=<React.Fragment>
        <p>Defines the shadow of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`box-shadow: none;`}
        >
          <p>Removes any box-shadow that was applied to the element.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div box-shadow " id="box-shadow-none">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`box-shadow: 2px 6px;`}>
          <p>
            You need at least <strong>two values</strong>:
          </p>
          <ul>
            <li>
              the first is the <em>horizontal</em> offset
            </li>
            <li>
              the second is the <em>vertical</em> offset
            </li>
          </ul>
          <p>The shadow color will be inherited from the text color.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div box-shadow "
            id="box-shadow-2px-6px"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`box-shadow: 2px 6px red;`}>
          <p>
            You can define a <strong>color</strong> as the <em>last</em> value.
          </p>
          <p>
            As with{" "}
            <code className="shorthand">
              <a href={`http://cssreference.io/#color`}>color</a>
            </code>
            , you can use color names, hexadecimal, rgb, hsl...
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div box-shadow "
            id="box-shadow-2px-6px-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`box-shadow: 2px 4px 10px red;`}>
          <p>
            The optional <strong>third value</strong> defines the{" "}
            <strong>blur</strong> of the shadow.
          </p>
          <p>
            The color will be diffused across 10px in this example, from opaque
            to transparent.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div box-shadow "
            id="box-shadow-2px-4px-10px-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`box-shadow: 2px 4px 10px 4px red;`}
        >
          <p>
            The optional <strong>fourth value</strong> defines the{" "}
            <strong>spread</strong> of the shadow.
          </p>
          <p>
            The spread defines how much the shadow should <em>grow</em>: it
            enhances the shadow.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div box-shadow "
            id="box-shadow-2px-4px-10px-4px-red"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BoxShadow;
