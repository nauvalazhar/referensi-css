import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Content = () => (
  <React.Fragment>
    <style>{`
        .content p:before { content: normal; }
        #content-normal{ content:normal;}
        #content-foo-bar{ content:"Foo bar";}
        #content-foo-bar p:before { content: "Foo bar"; }
        #content-urlimagesjtpng p:before { content: url(/images/jt.png); }
        #content-attrdata-something{ content:attr(data-something);}
        #content-attrdata-something p:before { content: attr(data-something); }
	    `}</style>
    <LayoutSingle
      property="content"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/content"
      description=<React.Fragment>
        <p>
          Defines the text content of the <code>:before</code> and{" "}
          <code>:after</code> pseudo-elements.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`content: normal;`}
        >
          <p>No content is added to the element.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div content " id="content-normal">
            <p data-something="cssreference">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`content: "Foo bar";`}>
          <p>Considering this HTML element:</p>
          <pre>{`&lt;p className="element"&gt;
  Hello world
&lt;/p&gt;`}</pre>
          <p>And this CSS:</p>
          <pre>{`.element:before {
  content: "Foo bar";
}`}</pre>
          <p>
            The text content will be <strong>prepended</strong> to the element's
            content.
          </p>
          <p>
            Notice how the end result <em>combines</em> text from the HTML and
            text from the CSS.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div content " id="content-foo-bar">
            <p data-something="cssreference">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`content: url(/images/jt.png);`}>
          <p>
            You can insert <strong>images</strong> by using the{" "}
            <code>url()</code> function.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div content "
            id="content-urlimagesjtpng"
          >
            <p data-something="cssreference">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`content: attr(data-something);`}>
          <p>Considering this HTML element:</p>
          <pre>{`&lt;p className="element" data-something="cssreference"&gt;
  Hello world
&lt;/p&gt;`}</pre>
          <p>And this CSS:</p>
          <pre>{`.element:before {
  content: attr(data-something);
}`}</pre>
          <p>
            The element will grab the text content from the HTML{" "}
            <strong>attribute</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div content "
            id="content-attrdata-something"
          >
            <p data-something="cssreference">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Content;
