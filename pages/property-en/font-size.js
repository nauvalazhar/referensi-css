import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FontSize = () => (
  <React.Fragment>
    <style>{`
        .font-size { line-height: 1.2; }
        #font-size-medium{ font-size:medium;}
        #font-size-20px{ font-size:20px;}
        #font-size-12em .parent { font-size: 18px; }#font-size-12em .block { font-size: 1.2em;margin-top: 0.25rem; }
        #font-size-12rem .parent { font-size: 18px; }#font-size-12rem .block { font-size: 1.2rem;margin-top: 0.25rem; }
        #font-size-90 .parent { font-size: 18px; }#font-size-90 .block { font-size: 90%;margin-top: 0.25rem; }
        #font-size-smaller .parent { font-size: 18px; }#font-size-smaller .block { font-size: smaller;margin-top: 0.25rem; }
        #font-size-x-large .parent { font-size: 18px; }#font-size-x-large .block { font-size: x-large;margin-top: 0.25rem; }
	    `}</style>
    <LayoutSingle
      property="font-size"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/font-size"
      description=<React.Fragment>
        <p>Defines the size of the text.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`font-size: medium;`}
        >
          <p>
            The text will use the browser's default <strong>medium</strong>{" "}
            size.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-size " id="font-size-medium">
            <p>Hello world</p>
            <p>The quick brown fox jumps over the lazy dog</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-size: 20px;`}>
          <p>
            You can use <strong>pixel</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-size " id="font-size-20px">
            <p>Hello world</p>
            <p>The quick brown fox jumps over the lazy dog</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-size: 1.2em;`}>
          <p>
            You can use <strong>em</strong> values.
          </p>
          <p>
            The value is <strong>relative</strong> to the{" "}
            <strong>parent</strong>'s <code>font-size</code>.<br />
            As a result, the value will <strong>cascade</strong> if used on
            child elements.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-size " id="font-size-12em">
            <div className="parent">
              Parent container: <strong>18px</strong>
              <div className="block block--alpha">
                Font-size: 1.2em = <strong>21.6px</strong>
                <div className="block block--pink">
                  Font-size: 1.2em = <strong>25.92px</strong>
                  <div className="block block--yellow">
                    Font-size: 1.2em = <strong>31.104px</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-size: 1.2rem;`}>
          <p>
            You can use <strong>rem</strong> values.
          </p>
          <p>
            The value is <strong>relative</strong> to the{" "}
            <strong>root element</strong>'s <code>font-size</code>, which is the{" "}
            <code>&lt;html&gt;</code> element.
            <br />
            As a result, the value will <strong>not</strong> vary depending on
            the <em>depth</em> of the element in the HTML hierarchy, and will
            reamin context independent.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-size " id="font-size-12rem">
            <div className="parent">
              <code>&lt;html&gt;</code> root element: <strong>18px</strong>
              <div className="block block--alpha">
                Font-size: 1.2rem = <strong>21.6px</strong>
                <div className="block block--pink">
                  Font-size: 1.2rem = <strong>21.6px</strong>
                  <div className="block block--yellow">
                    Font-size: 1.2rem = <strong>21.6px</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-size: 90%;`}>
          <p>
            You can use <strong>percentage</strong> values. They act like em
            values.
          </p>
          <p>
            The value is <strong>relative</strong> to the{" "}
            <strong>parent</strong>'s <code>font-size</code>.<br />
            As a result, the value will <strong>cascade</strong> if used on
            child elements.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-size " id="font-size-90">
            <div className="parent">
              Parent container: <strong>18px</strong>
              <div className="block block--alpha">
                Font-size: 90% = <strong>16.2</strong>
                <div className="block block--pink">
                  Font-size: 90% = <strong>14.58px</strong>
                  <div className="block block--yellow">
                    Font-size: 90% = <strong>13.122px</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-size: smaller;`}>
          <p>
            You can use <strong>relative keywords</strong>. The value is
            relative to the <strong>parent</strong>.
          </p>
          <p>The following are available:</p>
          <ul>
            <li>
              <code>larger</code>
            </li>
            <li>
              <code>smaller</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-size " id="font-size-smaller">
            <div className="parent">
              Parent container: <strong>18px</strong>
              <div className="block block--alpha">
                Font-size: smaller
                <div className="block block--pink">
                  Font-size: smaller
                  <div className="block block--yellow">Font-size: smaller</div>
                </div>
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-size: x-large;`}>
          <p>
            You can use <strong>absolute keywords</strong>. The value is
            relative to the <strong>root element</strong>{" "}
            <code>&lt;html&gt;</code>.
          </p>
          <p>The following are available:</p>
          <ul>
            <li>
              <code>xx-small</code>
            </li>
            <li>
              <code>x-small</code>
            </li>
            <li>
              <code>small</code>
            </li>
            <li>
              <code>medium</code>
            </li>
            <li>
              <code>large</code>
            </li>
            <li>
              <code>x-large</code>
            </li>
            <li>
              <code>xx-large</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-size " id="font-size-x-large">
            <div className="parent">
              <code>&lt;html&gt;</code> root element: <strong>18px</strong>
              <div className="block block--alpha">
                Font-size: x-large
                <div className="block block--pink">
                  Font-size: x-large
                  <div className="block block--yellow">Font-size: x-large</div>
                </div>
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FontSize;
