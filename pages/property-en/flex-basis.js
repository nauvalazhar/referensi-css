import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FlexBasis = () => (
  <React.Fragment>
    <style>{`
        .flex-basis { background: hsl(0, 0%, 95%);display: flex;padding: 1em;word-break: break-all; }
        #flex-basis-auto{ flex-basis:auto;}
        #flex-basis-auto .block { flex-basis: auto; }
        #flex-basis-80px{ flex-basis:80px;}
        #flex-basis-80px .block { flex-basis: 80px; }
	    `}</style>
    <LayoutSingle
      property="flex-basis"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/flex-basis"
      description=<React.Fragment>
        <p>Defines the initial size of a flexbox item.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`flex-basis: auto;`}
        >
          <p>
            The element will be automatically sized based on its content, or on
            any <code>height</code> or <code>width</code> value if they are
            defined.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-basis " id="flex-basis-auto">
            <p className="block block--alpha">Flexbox item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-basis: 80px;`}>
          <p>
            You can define <strong>pixel</strong> or <strong>(r)em</strong>{" "}
            values. The element will wrap its content to avoid any overflow.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-basis " id="flex-basis-80px">
            <p className="block block--alpha">Flexbox item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FlexBasis;
