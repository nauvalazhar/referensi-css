import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const FlexWrap = () => (
  <React.Fragment>
    <style>{`
        .flex-wrap { background: #310736;display: flex;max-width: 360px; }
        #flex-wrap-nowrap{ flex-wrap:nowrap;}
        #flex-wrap-wrap{ flex-wrap:wrap;}
        #flex-wrap-wrap-reverse{ flex-wrap:wrap-reverse;}
	    `}</style>
    <LayoutSingle
      property="flex-wrap"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap"
      description=<React.Fragment>
        <p>
          Defines if flexbox items appear on a <strong>single line</strong> or
          on <strong>multiple lines</strong> within a flexbox container.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`flex-wrap: nowrap;`}
        >
          <p>
            The flexbox items will remain on a <strong>single line</strong>, no
            matter what, and will eventually overflow if needed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-wrap " id="flex-wrap-nowrap">
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
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-wrap: wrap;`}>
          <p>
            The flexbox items will be distributed among{" "}
            <strong>multiple lines</strong> if needed.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div flex-wrap " id="flex-wrap-wrap">
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
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`flex-wrap: wrap-reverse;`}>
          <p>
            The flexbox items will be distributed among{" "}
            <strong>multiple lines</strong> if needed. Any additional line will
            appear <strong>before</strong> the previous one.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div flex-wrap "
            id="flex-wrap-wrap-reverse"
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
            <p className="block block--orange">
              <strong>5.</strong> Five
            </p>
            <p className="block block--purple">
              <strong>6.</strong> Six
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default FlexWrap;
