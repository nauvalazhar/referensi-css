import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FontWeight = () => (
  <React.Fragment>
    <style>{`
        .font-weight { font-size: 1.2em; }
        #font-weight-normal{ font-weight:normal;}
        #font-weight-bold{ font-weight:bold;}
        #font-weight-600{ font-weight:600;}
        #font-weight-lighter{ font-weight:lighter;}
	    `}</style>
    <LayoutSingle
      property="font-weight"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/font-weight"
      description=<React.Fragment>
        <p>Defines the weight of the text.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`font-weight: normal;`}
        >
          <p>
            The text is in <strong>normal</strong> weight.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-weight "
            id="font-weight-normal"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-weight: bold;`}>
          <p>
            The text becomes <strong>bold</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-weight "
            id="font-weight-bold"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-weight: 600;`}>
          <p>
            You can use <strong>numeric</strong> values. They all correspond to
            a particular <strong>named weight</strong>:
          </p>
          <ul>
            <li>
              <strong>100</strong> Thin
            </li>
            <li>
              <strong>200</strong> Extra Light
            </li>
            <li>
              <strong>300</strong> Light
            </li>
            <li>
              <strong>400</strong> Normal
            </li>
            <li>
              <strong>500</strong> Medium
            </li>
            <li>
              <strong>600</strong> Semi Bold
            </li>
            <li>
              <strong>700</strong> Bold
            </li>
            <li>
              <strong>800</strong> Extra Bold
            </li>
            <li>
              <strong>900</strong> Ultra Bold
            </li>
          </ul>
          <p>
            If the font family doesn't provide the requested weight, it will use
            the closest available one.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div font-weight " id="font-weight-600">
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`font-weight: lighter;`}>
          <p>
            You can use <strong>relative</strong> keywords: <code>lighter</code>{" "}
            or <code>bolder</code>. The browser will use the next available
            weight.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div font-weight "
            id="font-weight-lighter"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FontWeight;
