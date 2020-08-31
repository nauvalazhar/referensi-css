import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const MixBlendMode = () => (
  <React.Fragment>
    <style>{`
        .mix-blend-mode { background: #310736;display: flex;padding: 1em; }
        #mix-blend-mode-multiply .block { mix-blend-mode: multiply; }
        #mix-blend-mode-screen .block { mix-blend-mode: screen; }
        #mix-blend-mode-overlay .block { mix-blend-mode: overlay; }
        #mix-blend-mode-darken .block { mix-blend-mode: darken; }
        #mix-blend-mode-lighten .block { mix-blend-mode: lighten; }
        #mix-blend-mode-color-dodge .block { mix-blend-mode: color-dodge; }
        #mix-blend-mode-color-burn .block { mix-blend-mode: color-burn; }
        #mix-blend-mode-hard-light .block { mix-blend-mode: hard-light; }
        #mix-blend-mode-soft-light .block { mix-blend-mode: soft-light; }
        #mix-blend-mode-difference .block { mix-blend-mode: difference; }
        #mix-blend-mode-exclusion .block { mix-blend-mode: exclusion; }
        #mix-blend-mode-hue .block { mix-blend-mode: hue; }
        #mix-blend-mode-saturation .block { mix-blend-mode: saturation; }
        #mix-blend-mode-color .block { mix-blend-mode: color; }
        #mix-blend-mode-luminosity .block { mix-blend-mode: luminosity; }
	    `}</style>
    <LayoutSingle
      property="mix-blend-mode"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/mix-blend-mode"
      description=<React.Fragment>
        <p>
          Defines how the element should <strong>blend</strong> with the
          background.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`mix-blend-mode: normal;`}
        >
          <p>
            The element does <strong>not</strong> blend.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-normal"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: multiply;`}>
          <p>
            The element uses the <strong>multiply</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-multiply"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: screen;`}>
          <p>
            The element uses the <strong>screen</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-screen"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: overlay;`}>
          <p>
            The element uses the <strong>overlay</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-overlay"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: darken;`}>
          <p>
            The element uses the <strong>darken</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-darken"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: lighten;`}>
          <p>
            The element uses the <strong>lighten</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-lighten"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: color-dodge;`}>
          <p>
            The element uses the <strong>color-dodge</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-color-dodge"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: color-burn;`}>
          <p>
            The element uses the <strong>color-burn</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-color-burn"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: hard-light;`}>
          <p>
            The element uses the <strong>hard-light</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-hard-light"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: soft-light;`}>
          <p>
            The element uses the <strong>soft-light</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-soft-light"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: difference;`}>
          <p>
            The element uses the <strong>difference</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-difference"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: exclusion;`}>
          <p>
            The element uses the <strong>exclusion</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-exclusion"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: hue;`}>
          <p>
            The element uses the <strong>hue</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-hue"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: saturation;`}>
          <p>
            The element uses the <strong>saturation</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-saturation"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: color;`}>
          <p>
            The element uses the <strong>color</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-color"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`mix-blend-mode: luminosity;`}>
          <p>
            The element uses the <strong>luminosity</strong> blend mode.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div mix-blend-mode "
            id="mix-blend-mode-luminosity"
          >
            <p className="block block--alpha">Hello world</p>
            <p className="block block--pink">Hello world</p>
            <p className="block block--yellow">Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default MixBlendMode;
