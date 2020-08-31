import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AlignItems = () => (
  <React.Fragment>
    <style>{`
        .align-items { background: hsl(0, 0%, 95%);display: flex;height: 200px;justify-content: center;padding: 0; }
        .align-items .square { height: 50px;margin: 0 2px;width: calc(20% - 4px); }.align-items .square:nth-child(2) { height: 100px; }.align-items .square:nth-child(4) { height: 75px; }.align-items .line { left: 2px;position: absolute;right: 2px; }
        #align-items-flex-start{ align-items:flex-start;}
        #align-items-flex-start .line { top: 0; }
        #align-items-flex-end{ align-items:flex-end;}
        #align-items-flex-end .line { bottom: 0; }
        #align-items-center{ align-items:center;}
        #align-items-center .line { top: 50%; }
        #align-items-baseline{ align-items:baseline;}
        #align-items-baseline .line { top: 55px; }
        #align-items-stretch{ align-items:stretch;}
        #align-items-stretch .square { height: auto; }#align-items-stretch .square:nth-child(2) { height: auto; }#align-items-stretch .square:nth-child(4) { height: auto; }#align-items-stretch .line { display: none; }
	    `}</style>
    <LayoutSingle
      property="align-items"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/align-items"
      description=<React.Fragment>
        <p>
          Defines how flexbox items are aligned according to the{" "}
          <strong>cross</strong> axis, within a line of a flexbox container.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`align-items: flex-start;`}>
          <p>
            The flexbox items are aligned at the <strong>start</strong> of the{" "}
            <strong>cross axis</strong>.
          </p>
          <p>
            By default, the cross axis is vertical. This means the flexbox items
            will be aligned <em>vertically</em> at the <em>top</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-items "
            id="align-items-flex-start"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-items: flex-end;`}>
          <p>
            The flexbox items are aligned at the <strong>end</strong> of the{" "}
            <strong>cross axis</strong>.
          </p>
          <p>
            By default, the cross axis is vertical. This means the flexbox items
            will be aligned <em>vertically</em> at the <em>bottom</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-items "
            id="align-items-flex-end"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-items: center;`}>
          <p>
            The flexbox items are aligned at the <strong>center</strong> of the{" "}
            <strong>cross axis</strong>.
          </p>
          <p>
            By default, the cross axis is vertical. This means the flexbox items
            will be <strong>centered</strong> <em>vertically</em>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-items "
            id="align-items-center"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-items: baseline;`}>
          <p>
            The flexbox items are aligned at the <strong>baseline</strong> of
            the <strong>cross axis</strong>.
          </p>
          <p>
            By default, the cross axis is vertical. This means the flexbox items
            will align themselves in order to have the <em>baseline</em> of
            their <em>text</em> align along a horizontal line.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-items "
            id="align-items-baseline"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-items: stretch;`}>
          <p>
            The flexbox items will stretch across the whole{" "}
            <strong>cross axis</strong>.
          </p>
          <p>
            By default, the cross axis is vertical. This means the flexbox items
            will fill up the whole vertical space.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-items "
            id="align-items-stretch"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default AlignItems;
