import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FlexShrink = () => (
  <React.Fragment>
    <style>{`
        .flex-shrink { background: #310736;border-radius: 3px;display: flex;padding: 1em;width: 300px; }
        .flex-shrink .block { flex-shrink: 1; }
        #flex-shrink-1{ flex-shrink:1;}
        #flex-shrink-0{ flex-shrink:0;}
        #flex-shrink-0 .block--alpha { flex-shrink: 0; }
        #flex-shrink-2{ flex-shrink:2;}
        #flex-shrink-2 .block--alpha { flex-grow: 1;width: 100%; }#flex-shrink-2 .block--pink { flex-shrink: 3;word-break: break-all; }#flex-shrink-2 .block--yellow { flex-shrink: 1;word-break: break-all; }
	    `}</style>
    <LayoutSingle
      property="flex-shrink"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink"
      description=<React.Fragment>
        <p>
          Defines how much a flexbox item should <strong>shrink</strong> if
          there's <strong>not enough</strong> space available.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`flex-shrink: 1;`}
        >
          <p>
            If there's <strong>not enough</strong> space available in the
            container's main axis, the element will <strong>shrink</strong> by a
            factor of <strong>1</strong>, and will wrap its content.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-shrink " id="flex-shrink-1">
            <p className="block block--alpha">
              <strong>This is the flex-shrink target</strong>
            </p>
            <p className="block block--pink">Foo bar</p>
            <p className="block block--yellow">Lorem ipsum</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-shrink: 0;`}>
          <p>
            The element will <strong>not</strong> shrink: it will retain the
            width it needs, and <strong>not</strong> wrap its content. Its
            siblings will shrink to give space to the target element.
          </p>
          <p>
            Because the target element will not wrap its content, there is a
            chance for the flexbox container's content to{" "}
            <strong>overflow</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-shrink " id="flex-shrink-0">
            <p className="block block--alpha">
              <strong>This is the flex-shrink target</strong>
            </p>
            <p className="block block--pink">Foo bar</p>
            <p className="block block--yellow">Lorem ipsum</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-shrink: 2;`}>
          <p>
            Because the flex-shrink value is <strong>relative</strong>, its
            behaviour depends on the value of the flexbox item{" "}
            <strong>siblings</strong>.
          </p>
          <p>
            In this example, the green item wants to fill 100% of the width. The
            space it needs is <strong>taken from</strong> its two siblings, and
            is divided in <strong>4</strong>:
          </p>
          <ul>
            <li>
              <strong>3</strong> quarters are taken from the{" "}
              <strong>red</strong> item
            </li>
            <li>
              <strong>1</strong> quarter is taken from the{" "}
              <strong>yellow</strong> item
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-shrink " id="flex-shrink-2">
            <p className="block block--alpha">
              Width
              <br />
              <strong>100%</strong>
            </p>
            <p className="block block--pink">
              Shrink
              <br />
              <strong>3</strong>
            </p>
            <p className="block block--yellow">
              Shrink
              <br />
              <strong>1</strong>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FlexShrink;
