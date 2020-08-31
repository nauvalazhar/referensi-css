import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const PointerEvents = () => (
  <React.Fragment>
    <style>{`
        .pointer-events .block--container { cursor: default;position: relative; }.pointer-events .block--alpha { cursor: pointer;opacity: 0.7;padding: 0.4em 0.5em;position: absolute; }.pointer-events .block--alpha:hover { background: #310736;color: #fff;opacity: 1; }
        #pointer-events-auto{ pointer-events:auto;}
        #pointer-events-none{ pointer-events:none;}
        #pointer-events-none .block { pointer-events: none; }
	    `}</style>
    <LayoutSingle
      property="pointer-events"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/pointer-events"
      description=<React.Fragment>
        <p>Defines if the element reacts to pointer events or not.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`pointer-events: auto;`}
        >
          <p>
            The element <strong>reacts</strong> to pointer events, like{" "}
            <code>:hover</code> or <code>click</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div pointer-events "
            id="pointer-events-auto"
          >
            <div className="block block--container">
              <p className="block block--alpha">Hover me</p>Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Etiam semper diam at erat
              pulvinar, at pulvinar felis blandit.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`pointer-events: none;`}>
          <p>
            The element does <strong>not</strong> react to pointer events, like{" "}
            <code>:hover</code> or <code>click</code>. As a result, elements
            that are <em>behind</em> are accessible.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div pointer-events "
            id="pointer-events-none"
          >
            <div className="block block--container">
              <p className="block block--alpha">Hover me</p>Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Etiam semper diam at erat
              pulvinar, at pulvinar felis blandit.
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default PointerEvents;
