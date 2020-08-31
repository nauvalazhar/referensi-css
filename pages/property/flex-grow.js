import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FlexGrow = () => (
  <React.Fragment>
    <style>{`
        .flex-grow { background: #310736;border-radius: 3px;display: flex;padding: 1em; }
        #flex-grow-0{ flex-grow:0;}
        #flex-grow-1{ flex-grow:1;}
        #flex-grow-1 .block--alpha { flex-grow: 1; }
        #flex-grow-2{ flex-grow:2;}
        #flex-grow-2 .block--alpha { flex-grow: 1; }#flex-grow-2 .block--pink { flex-grow: 2; }
	    `}</style>
    <LayoutSingle
      property="flex-grow"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/flex-grow"
      description=<React.Fragment>
        <p>
          Defines how much a flexbox item should <strong>grow</strong> if
          there's space available.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`flex-grow: 0;`}>
          <p>
            The element will <strong>not</strong> grow if there's space
            available. It will only use the space it needs.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-grow " id="flex-grow-0">
            <p className="block block--alpha">
              <strong>Target</strong>
            </p>
            <p className="block block--pink">Item</p>
            <p className="block block--yellow">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-grow: 1;`}>
          <p>
            The element will <strong>grow</strong> by a factor of{" "}
            <strong>1</strong>. It will fill up the remaining space if no other
            flexbox item has a <code>flex-grow</code> value.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-grow " id="flex-grow-1">
            <p className="block block--alpha">
              <strong>Target</strong>
            </p>
            <p className="block block--pink">Item</p>
            <p className="block block--yellow">Item</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-grow: 2;`}>
          <p>
            Because the flex-grow value is <strong>relative</strong>, its
            behaviour depends on the value of the flexbox item{" "}
            <strong>siblings</strong>.
          </p>
          <p>
            In this example, the remaining space is divided in{" "}
            <strong>3</strong>:
          </p>
          <ul>
            <li>
              <strong>1</strong> third goes to the <strong>green</strong> item
            </li>
            <li>
              <strong>2</strong> thirds go to the <strong>pink</strong> item
            </li>
            <li>
              Nothing goes to the <strong>yellow</strong> item, who retains its
              initial width
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-grow " id="flex-grow-2">
            <p className="block block--alpha">
              Item
              <br />
              <strong>1</strong>
            </p>
            <p className="block block--pink">
              Item
              <br />
              <strong>2</strong>
            </p>
            <p className="block block--yellow">
              Item
              <br />
              <strong>0</strong>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FlexGrow;
