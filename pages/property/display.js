import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Display = () => (
  <React.Fragment>
    <style>{`
        .display .block--alpha { padding: 0; }.display .block span { background: hsl(348, 100%, 61%);color: #fff; }.display .block span:last-child { background: hsl(217, 71%, 53%); }
        #display-none .block--alpha { display: none; }
        #display-inline .block--alpha { display: inline; }
        #display-block .block--alpha { display: block; }
        #display-inline-block .block--alpha { display: inline-block;height: 3em;width: 60px; }
        #display-list-item .block--alpha { display: list-item; }
        #display-table .block--alpha { display: table; }
        #display-table-cell .block--alpha { display: table-cell; }
        #display-table-row .block--alpha { display: table-row; }
        #display-flex .block--alpha { display: flex; }
        #display-inline-flex .block--alpha { display: inline-flex;height: 3em;width: 120px; }
        #display-grid .block--alpha { display: grid;grid-template-columns: auto auto; }
        #display-inline-grid .block--alpha { display: inline-grid;grid-template-columns: auto auto;height: 3em;width: 120px; }
	    `}</style>
    <LayoutSingle
      property="display"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/display"
      description=<React.Fragment>
        <p>Sets the display behavior of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`display: none;`}>
          <p>
            The element is completely <strong>removed</strong>, as if it wasn't
            in the HTML code in the first place.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-none">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">Hello world</p> Etiam semper
              diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
              volutpat tellus diam, consequat gravida libero rhoncus ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: inline;`}>
          <p>
            The element is turned into an <strong>inline</strong> element: it
            behaves like simple text.
          </p>
          <p>
            Any <code>height</code> and <code>width</code> applied will have{" "}
            <strong>no</strong> effect.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-inline">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">Hello world</p> Etiam semper
              diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
              volutpat tellus diam, consequat gravida libero rhoncus ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: block;`}>
          <p>
            The element is turned into a <strong>block</strong> element: it
            starts on a new line, and takes up the whole width.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-block">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">Hello world</p> Etiam semper
              diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
              volutpat tellus diam, consequat gravida libero rhoncus ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: inline-block;`}>
          <p>
            The element shares properties of both an <strong>inline</strong> and
            a <strong>block</strong> element:
          </p>
          <ul>
            <li>
              <strong>inline</strong> because the element behaves like simple
              text, and inserts itself in a block of text
            </li>
            <li>
              <strong>Block</strong> because you can apply <code>height</code>{" "}
              and <code>width</code> values
            </li>
          </ul>
          <p>For example, this element has:</p>
          <pre>{`.element{
  height: 3em;
  width: 60px;
}`}</pre>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div display "
            id="display-inline-block"
          >
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">Hello world</p> Etiam semper
              diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
              volutpat tellus diam, consequat gravida libero rhoncus ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: list-item;`}>
          <p>
            The element behaves like a <strong>list item</strong>:{" "}
            <code>&lt;li&gt;</code>. The only difference with{" "}
            <strong>block</strong> is that a list item has a{" "}
            <strong>bullet point</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-list-item">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">Hello world</p> Etiam semper
              diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
              volutpat tellus diam, consequat gravida libero rhoncus ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: table;`}>
          <p>
            The element behaves like a <strong>table</strong>:{" "}
            <code>&lt;table&gt;</code>.
          </p>
          <p>Its content and child elements behave like table cells.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-table">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">
                Target <span>First child</span> <span>Second child</span>
              </p>{" "}
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: table-cell;`}>
          <p>
            The element behaves like a <strong>table cell</strong>:{" "}
            <code>&lt;td&gt;</code> or <code>&lt;th&gt;</code>.
          </p>
          <p>Its content and child elements behave like table cells.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-table-cell">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">
                Target <span>First child</span> <span>Second child</span>
              </p>{" "}
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: table-row;`}>
          <p>
            The element behaves like a <strong>table row</strong>:{" "}
            <code>&lt;tr&gt;</code>.
          </p>
          <p>Its content and child elements behave like table cells.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-table-row">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">
                Target <span>First child</span> <span>Second child</span>
              </p>{" "}
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: flex;`}>
          <p>
            The element is turned into an <strong>flexbox</strong> container. On
            its own, it behaves like a block element.
          </p>
          <p>
            Its child elements will be turned into{" "}
            <strong>flexbox items</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-flex">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">
                <span>First child</span> <span>Second child</span>
              </p>{" "}
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: inline-flex;`}>
          <p>
            The element shares properties of both an <strong>inline</strong> and
            a <strong>flexbox</strong> element:
          </p>
          <ul>
            <li>
              <strong>inline</strong> because the element behaves like simple
              text, and inserts itself in a block of text
            </li>
            <li>
              <strong>flexbox</strong> because its child element will be turned
              into flexbox items
            </li>
          </ul>
          <p>For example, this element has:</p>
          <pre>{`.element{
  height: 3em;
  width: 120px;
}`}</pre>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-inline-flex">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">
                <span>First child</span> <span>Second child</span>
              </p>{" "}
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: grid;`}>
          <p>
            The element is turned into an <strong>grid</strong> container. On
            its own, it behaves like a block element.
          </p>
          <p>
            Its child elements will be turned into <strong>grid items</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-grid">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">
                <span>First child</span> <span>Second child</span>
              </p>{" "}
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`display: inline-grid;`}>
          <p>
            The element shares properties of both an <strong>inline</strong> and
            a <strong>grid</strong> element:
          </p>
          <ul>
            <li>
              <strong>inline</strong> because the element behaves like simple
              text, and inserts itself in a block of text
            </li>
            <li>
              <strong>grid</strong> because its child element will be turned
              into flexbox items
            </li>
          </ul>
          <p>For example, this element has:</p>
          <pre>{`.element{
  height: 3em;
  width: 120px;
}`}</pre>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div display " id="display-inline-grid">
            <div className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <p className="block block--alpha">
                <span>First child</span> <span>Second child</span>
              </p>{" "}
              Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Display;
