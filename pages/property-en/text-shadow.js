import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const TextShadow = () => (
  <React.Fragment>
    <style>{`
        #text-shadow-none{ text-shadow:none;}
        #text-shadow-2px-6px{ text-shadow:2px 6px;}
        #text-shadow-2px-6px-red{ text-shadow:2px 6px red;}
        #text-shadow-2px-4px-10px-red{ text-shadow:2px 4px 10px red;}
	    `}</style>
    <LayoutSingle
      property="text-shadow"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/text-shadow"
      description=<React.Fragment>
        <p>Defines the shadow of the text content.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`text-shadow: none;`}
        >
          <p>
            The text content has <strong>no shadow</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-shadow "
            id="text-shadow-none"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-shadow: 2px 6px;`}>
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
            className="example-output-div text-shadow "
            id="text-shadow-2px-6px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-shadow: 2px 6px red;`}>
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
            className="example-output-div text-shadow "
            id="text-shadow-2px-6px-red"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-shadow: 2px 4px 10px red;`}>
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
            className="example-output-div text-shadow "
            id="text-shadow-2px-4px-10px-red"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default TextShadow;
