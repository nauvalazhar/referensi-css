import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundRepeat = () => (
  <React.Fragment>
    <style>{`
        .background-repeat { background-image: url(/images/jt.png);background-size: 64px 64px;height: 150px; }
        #background-repeat-repeat{ background-repeat:repeat;}
        #background-repeat-repeat-x{ background-repeat:repeat-x;}
        #background-repeat-repeat-y{ background-repeat:repeat-y;}
        #background-repeat-no-repeat{ background-repeat:no-repeat;}
	    `}</style>
    <LayoutSingle
      property="background-repeat"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-repeat"
      description=<React.Fragment>
        <p>
          Defines how the background image repeats itself across the element's
          background, starting from the background position.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-repeat: repeat;`}
        >
          <p>
            The background image will repeat itself both{" "}
            <strong>horizontally</strong> and <strong>vertically</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-repeat"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-repeat: repeat-x;`}>
          <p>
            The background image will only repeat itself{" "}
            <strong>horizontally</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-repeat-x"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-repeat: repeat-y;`}>
          <p>
            The background image will only repeat itself{" "}
            <strong>vertically</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-repeat-y"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-repeat: no-repeat;`}>
          <p>
            The background image will only appear <strong>once</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-repeat "
            id="background-repeat-no-repeat"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundRepeat;
