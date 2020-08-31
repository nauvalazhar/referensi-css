import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const TextTransform = () => (
  <React.Fragment>
    <style>{`
        #text-transform-none{ text-transform:none;}
        #text-transform-capitalize{ text-transform:capitalize;}
        #text-transform-uppercase{ text-transform:uppercase;}
        #text-transform-lowercase{ text-transform:lowercase;}
	    `}</style>
    <LayoutSingle
      property="text-transform"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/text-transform"
      description=<React.Fragment>
        <p>Defines how the text content should be transformed.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`text-transform: none;`}
        >
          <p>
            Removes any text transformation: the text will appear the same as in
            the HTML code.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-transform "
            id="text-transform-none"
          >
            <strong>Hello world!</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-transform: capitalize;`}>
          <p>
            Turns the <strong>first letter</strong> of each word into a{" "}
            <strong>capital</strong> letter.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-transform "
            id="text-transform-capitalize"
          >
            <strong>Hello world!</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-transform: uppercase;`}>
          <p>
            Turns <strong>all letters</strong> into <strong>capital</strong>{" "}
            letters.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-transform "
            id="text-transform-uppercase"
          >
            <strong>Hello world!</strong>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut. Maecenas
            imperdiet felis nisi, fringilla luctus felis hendrerit sit amet.
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`text-transform: lowercase;`}>
          <p>
            Turns <strong>all letters</strong> into <strong>lowercase</strong>{" "}
            letters.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div text-transform "
            id="text-transform-lowercase"
          >
            <strong>Hello world!</strong>
            <br />
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

export default TextTransform;
