import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Position = () => (
  <React.Fragment>
    <style>{`
        .position { background: #310736;color: #fff;height: 200px;position: relative; }
        .position .block--alpha { margin-top: 1em; }.position .block--pink { position: absolute;right: 5px;top: 5px; }
        #position-relative .block--alpha { position: relative; }
        #position-absolute .block--alpha { left: 0;margin-top: 0;position: absolute;top: 0;width: 280px; }
        #position-fixed.is-fixed .block--alpha { position: fixed;z-index: 10000; }
        #position-fixed .block--alpha { left: auto;right: 0;margin-top: 0;position: absolute;top: 0;width: 280px; }
	    `}</style>
    <LayoutSingle
      property="position"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/position"
      description=<React.Fragment>
        <p>Defines the position behavior of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`position: static;`}
        >
          <p>
            The element will remain in the <strong>natural flow</strong> of the
            page.
          </p>
          <p>
            As a result, it will <strong>not</strong> act as anchor point for
            the absolutely positioned pink block.
          </p>
          <p>
            Also, it will <strong>not</strong> react to the following
            properties:
          </p>
          <ul>
            <li>
              <code>top</code>
            </li>
            <li>
              <code>bottom</code>
            </li>
            <li>
              <code>left</code>
            </li>
            <li>
              <code>right</code>
            </li>
            <li>
              <code>z-index</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div position " id="position-static">
            <p>Ancestor container</p>
            <div className="block block--alpha">
              <strong>
                Target element
                <br />
                position: static
              </strong>
              <div className="block block--pink">
                Child element
                <br />
                position: absolute
                <br />
                right: 5px
                <br />
                top: 5px
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`position: relative;`}>
          <p>
            The element will remain in the <strong>natural flow</strong> of the
            page.
          </p>
          <p>
            It also makes the element <strong>positioned</strong>: it will act
            as an anchor point for the absolutely positioned pink block.
          </p>
          <p>
            Also, it will <strong>react</strong> to the following properties:
          </p>
          <ul>
            <li>
              <code>top</code>
            </li>
            <li>
              <code>bottom</code>
            </li>
            <li>
              <code>left</code>
            </li>
            <li>
              <code>right</code>
            </li>
            <li>
              <code>z-index</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div position " id="position-relative">
            <p>Ancestor container</p>
            <div className="block block--alpha">
              <strong>
                Target element
                <br />
                position: relative
              </strong>
              <div className="block block--pink">
                Child element
                <br />
                position: absolute
                <br />
                right: 5px
                <br />
                top: 5px
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`position: absolute;`}>
          <p>
            The element will <strong>not</strong> remain in the natural flow of
            the page. It will position itself according to the{" "}
            <strong>closest positioned ancestor</strong>.
          </p>
          <p>
            Because it's <strong>positioned</strong>, it will act as an anchor
            point for the absolutely positioned pink block.
          </p>
          <p>
            Also, it will <strong>react</strong> to the following properties:
          </p>
          <ul>
            <li>
              <code>top</code>
            </li>
            <li>
              <code>bottom</code>
            </li>
            <li>
              <code>left</code>
            </li>
            <li>
              <code>right</code>
            </li>
            <li>
              <code>z-index</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div position " id="position-absolute">
            <p>Ancestor container</p>
            <div className="block block--alpha">
              <strong>
                Target element
                <br />
                position: absolute
                <br />
                left: 0<br />
                top: 0
              </strong>
              <div className="block block--pink">
                Child element
                <br />
                right: 5px
                <br />
                top: 5px
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          fixedToggle={true}
          declaration={`position: fixed;`}
        >
          <p>
            The element will <strong>not</strong> remain in the natural flow of
            the page. It will position itself according to the{" "}
            <strong>viewport</strong>.
          </p>
          <p>
            Because it's <strong>positioned</strong>, it will act as an anchor
            point for the absolutely positioned pink block.
          </p>
          <p>
            Also, it will <strong>react</strong> to the following properties:
          </p>
          <ul>
            <li>
              <code>top</code>
            </li>
            <li>
              <code>bottom</code>
            </li>
            <li>
              <code>left</code>
            </li>
            <li>
              <code>right</code>
            </li>
            <li>
              <code>z-index</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div position " id="position-fixed">
            <p>Ancestor container</p>
            <div className="block block--alpha">
              <strong>
                Target element
                <br />
                position: fixed
                <br />
                right: 0<br />
                top: 0
              </strong>
              <div className="block block--pink">
                Child element
                <br />
                position: absolute
                <br />
                right: 5px
                <br />
                top: 5px
              </div>
            </div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Position;
