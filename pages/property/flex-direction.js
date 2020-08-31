import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FlexDirection = () => (
  <React.Fragment>
    <style>{`
        .flex-direction { display: flex; }
        #flex-direction-row{ flex-direction:row;}
        #flex-direction-row-reverse{ flex-direction:row-reverse;}
        #flex-direction-column{ flex-direction:column;}
        #flex-direction-column-reverse{ flex-direction:column-reverse;}
	    `}</style>
    <LayoutSingle
      property="flex-direction"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/flex-direction"
      description=<React.Fragment>
        <p>Defines how flexbox items are ordered within a flexbox container.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`flex-direction: row;`}
        >
          <p>
            The flexbox items are ordered the <strong>same</strong> way as the{" "}
            <strong>text direction</strong>, along the{" "}
            <strong>main axis</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div flex-direction "
            id="flex-direction-row"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-direction: row-reverse;`}>
          <p>
            The flexbox items are ordered the <strong>opposite</strong> way as
            the <strong>text direction</strong>, along the{" "}
            <strong>main axis</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div flex-direction "
            id="flex-direction-row-reverse"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-direction: column;`}>
          <p>
            The flexbox items are ordered the <strong>same</strong> way as the{" "}
            <strong>text direction</strong>, along the{" "}
            <strong>cross axis</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div flex-direction "
            id="flex-direction-column"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`flex-direction: column-reverse;`}
        >
          <p>
            The flexbox items are ordered the <strong>opposite</strong> way as
            the <strong>text direction</strong>, along the{" "}
            <strong>cross axis</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div flex-direction "
            id="flex-direction-column-reverse"
          >
            <p className="block block--alpha">
              <strong>1.</strong> One
            </p>
            <p className="block block--beta">
              <strong>2.</strong> Two
            </p>
            <p className="block block--pink">
              <strong>3.</strong> Three
            </p>
            <p className="block block--yellow">
              <strong>4.</strong> Four
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FlexDirection;
