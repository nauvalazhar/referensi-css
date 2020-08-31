import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FontFamily = () => (
  <React.Fragment>
    <style>{`
        .font-family { font-size: 1.5em;line-height: 1.2; }
        #font-family-source-sans-pro-arial-sans-serif{ font-family:"Source Sans Pro", "Arial", sans-serif;}
        #font-family-serif{ font-family:serif;}
        #font-family-sans-serif{ font-family:sans-serif;}
        #font-family-monospace{ font-family:monospace;}
        #font-family-cursive{ font-family:cursive;}
        #font-family-fantasy{ font-family:fantasy;}
	    `}</style>
    <LayoutSingle
      property="font-family"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/font-family"
      description=<React.Fragment></React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          declaration={`font-family: "Source Sans Pro", "Arial", sans-serif;`}
        >
          <p>
            When using <strong>multiple</strong> values, the{" "}
            <code>font-family</code> list of <strong>font families</strong>{" "}
            defines the <strong>priority</strong> in which the browser should
            choose the font family.
          </p>
          <p>
            The browser will look for each family on the user's{" "}
            <strong>computer</strong> and in any <strong>@font-face</strong>{" "}
            resource.
          </p>
          <p>
            The list is prioritized from <strong>left</strong> to{" "}
            <strong>right</strong>: it will use the first value if it's
            available, or go to the next one, until the end of the list is
            reached. The <strong>default</strong> font family is defined by the
            browser preferences.
          </p>
          <p>
            In this example, the browser will try to use{" "}
            <code>Source Sans Pro</code> if it's available. If it can't find it,
            it will try to use <code>Arial</code>. If it's not available either,
            it will use the browser's <code>sans-serif</code> font.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-family "
            id="font-family-source-sans-pro-arial-sans-serif"
          >
            Hello world
            <br />
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-family: serif;`}>
          <p>
            The browser will use a <strong>serif</strong> font family: all
            characters have <strong>stroke endings</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-family "
            id="font-family-serif"
          >
            Hello world
            <br />
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-family: sans-serif;`}>
          <p>
            The browser will use a <strong>sans-serif</strong> font family:{" "}
            <strong>no</strong> character has stroke endings.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-family "
            id="font-family-sans-serif"
          >
            Hello world
            <br />
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-family: monospace;`}>
          <p>
            The browser will use a <strong>monospace</strong> font family: all
            characters have the <strong>same width</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-family "
            id="font-family-monospace"
          >
            Hello world
            <br />
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-family: cursive;`}>
          <p>
            The browser will use a <strong>cursive</strong> font family.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-family "
            id="font-family-cursive"
          >
            Hello world
            <br />
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-family: fantasy;`}>
          <p>
            The browser will use a <strong>fantasy</strong> font family.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-family "
            id="font-family-fantasy"
          >
            Hello world
            <br />
            The quick brown fox jumps over the lazy dog
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FontFamily;
