import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Order = () => (
  <React.Fragment>
    <style>{`
        .order { display: flex; }
        .order .block { flex-grow: 1;flex-shrink: 1; }.order em { font-style: normal; }
        #order-1 .block--pink { order: 1; }
        #order--1 .block--pink { order: -1; }
        #order-9 .block--alpha { order: 13; }#order-9 .block--beta { order: -7; }#order-9 .block--pink { order: 9; }#order-9 .block--yellow { order: 5; }
	    `}</style>
    <LayoutSingle
      property="order"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/order"
      description=<React.Fragment>
        <p>Defines the order of a flexbox item.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`order: 0;`}>
          <p>
            The order of the flexbox items is the one defined in the{" "}
            <strong>HTML code</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div order " id="order-0">
            <p className="block block--alpha">
              One
              <br />
              <em>order: 0</em>
            </p>
            <p className="block block--beta">
              Two
              <br />
              <em>order: 0</em>
            </p>
            <p className="block block--pink">
              <strong>
                Target
                <br />
                <em>order: 0</em>
              </strong>
            </p>
            <p className="block block--yellow">
              Four
              <br />
              <em>order: 0</em>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`order: 1;`}>
          <p>
            The order is <strong>relative</strong> to the flexbox item's{" "}
            <em>siblings</em>. The final order is defined when all individual
            flexbox item order values are taken into account.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div order " id="order-1">
            <p className="block block--alpha">
              One
              <br />
              <em>order: 0</em>
            </p>
            <p className="block block--beta">
              Two
              <br />
              <em>order: 0</em>
            </p>
            <p className="block block--pink">
              <strong>
                Target
                <br />
                <em>order: 1</em>
              </strong>
            </p>
            <p className="block block--yellow">
              Four
              <br />
              <em>order: 0</em>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`order: -1;`}>
          <p>
            You can use <strong>negative</strong> values.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div order " id="order--1">
            <p className="block block--alpha">
              One
              <br />
              <em>order: 0</em>
            </p>
            <p className="block block--beta">
              Two
              <br />
              <em>order: 0</em>
            </p>
            <p className="block block--pink">
              <strong>
                Target
                <br />
                <em>order: -1</em>
              </strong>
            </p>
            <p className="block block--yellow">
              Four
              <br />
              <em>order: 0</em>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`order: 9;`}>
          <p>
            You can set a <strong>different</strong> value for each flexbox
            item.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div order " id="order-9">
            <p className="block block--alpha">
              One
              <br />
              <em>order: 13</em>
            </p>
            <p className="block block--beta">
              Two
              <br />
              <em>order: -7</em>
            </p>
            <p className="block block--pink">
              <strong>
                Target
                <br />
                <em>order: 9</em>
              </strong>
            </p>
            <p className="block block--yellow">
              Four
              <br />
              <em>order: 5</em>
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Order;
