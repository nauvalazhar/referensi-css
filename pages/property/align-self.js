import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AlignSelf = () => (
  <React.Fragment>
    <style>{`
        .align-self { align-items: center;background: hsl(0, 0%, 95%);display: flex;height: 200px;justify-content: center;padding: 0; }
        .align-self .square { height: 50px;margin: 0 2px;width: calc(20% - 4px); }.align-self .square:nth-child(2) { background: #05ffb0;color: #310736; }.align-self .square:nth-child(4) { height: 75px; }.align-self .line { left: 2px;position: absolute;right: 2px; }.align-self .line--default { top: 50%; }.align-self .line--default:before { content: "Items"; }.align-self .line--red:before { content: "Self"; }
        #align-self-auto{ align-self:auto;}
        #align-self-auto .target { align-self: auto; }
        #align-self-flex-start{ align-self:flex-start;}
        #align-self-flex-start .target { align-self: flex-start; }
        #align-self-flex-end{ align-self:flex-end;}
        #align-self-flex-end .line--red { bottom: 0; }#align-self-flex-end .target { align-self: flex-end; }
        #align-self-center{ align-self:center;}
        #align-self-center{ align-items: flex-start; }
        #align-self-center .line--default { top: 0; }#align-self-center .line--red { top: 50%; }#align-self-center .target { align-self: center; }
        #align-self-baseline{ align-self:baseline;}
        #align-self-baseline .line--default { top: 50%; }#align-self-baseline .line--red { top: 30px; }#align-self-baseline .target { align-self: baseline; }
        #align-self-stretch{ align-self:stretch;}
        #align-self-stretch .line--default { top: 50%; }#align-self-stretch .line--red { display: none; }#align-self-stretch .target { align-self: stretch;height: auto; }
	    `}</style>
    <LayoutSingle
      property="align-self"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/align-self"
      description=<React.Fragment>
        <p>
          Works like <code>align-items</code>, but applies only to a{" "}
          <strong>single</strong> flexbox item, instead of <em>all</em> of them.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`align-self: auto;`}
        >
          <p>
            The target will use the value of <code>align-items</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div align-self " id="align-self-auto">
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: flex-start;`}>
          <p>
            If the container has <code>align-items: center</code> and the{" "}
            <strong>target</strong> has <code>align-self: flex-start</code>,
            only the target will be at the start of the cross axis.
          </p>
          <p>
            By default, this means it will be aligned{" "}
            <strong>vertically</strong> at the <strong>top</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-flex-start"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: flex-end;`}>
          <p>
            If the container has <code>align-items: center</code> and the{" "}
            <strong>target</strong> has <code>align-self: flex-end</code>, only
            the target will be at the end of the cross axis.
          </p>
          <p>
            By default, this means it will be aligned{" "}
            <strong>vertically</strong> at the <strong>bottom</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-flex-end"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: center;`}>
          <p>
            If the container has <code>align-items: flex-start</code> and the{" "}
            <strong>target</strong> has <code>align-self: center</code>, only
            the target will be at the center of the cross axis.
          </p>
          <p>
            By default, this means it will be{" "}
            <strong>vertically centered</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-center"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: baseline;`}>
          <p>
            If the container has <code>align-items: center</code> and the{" "}
            <strong>target</strong> has <code>align-self: baseline</code>, only
            the target will be at the baseline of the cross axis.
          </p>
          <p>
            By default, this means it will be aligned along the basline of the
            text.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-baseline"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: stretch;`}>
          <p>
            If the container has <code>align-items: center</code> and the{" "}
            <strong>target</strong> has <code>align-self: stretch</code>, only
            the target will stretch along the whole cross axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-stretch"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default AlignSelf;
