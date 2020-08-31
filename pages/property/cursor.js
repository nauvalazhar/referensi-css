import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Cursor = () => (
  <React.Fragment>
    <style>{`
        #cursor-default{ cursor:default;}
        #cursor-auto{ cursor:auto;}
        #cursor-pointer{ cursor:pointer;}
        #cursor-move{ cursor:move;}
        #cursor-crosshair{ cursor:crosshair;}
        #cursor-text{ cursor:text;}
        #cursor-wait{ cursor:wait;}
        #cursor-help-resize{ cursor:help-resize;}
        #cursor-ne-resize{ cursor:ne-resize;}
        #cursor-nw-resize{ cursor:nw-resize;}
        #cursor-n-resize{ cursor:n-resize;}
        #cursor-se-resize{ cursor:se-resize;}
        #cursor-sw-resize{ cursor:sw-resize;}
        #cursor-s-resize{ cursor:s-resize;}
        #cursor-w-resize{ cursor:w-resize;}
	    `}</style>
    <LayoutSingle
      property="cursor"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/cursor"
      description=<React.Fragment>
        <p>Sets the mouse cursor when hovering the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`cursor: default;`}>
          <p>
            Sets the cursor to the element's default value. For a link, it would
            be a pointer. For text it would be a selection cursor.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-default">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: auto;`}>
          <p>auto</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-auto">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: pointer;`}>
          <p>pointer</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-pointer">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: move;`}>
          <p>move</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-move">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: crosshair;`}>
          <p>crosshair</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-crosshair">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: text;`}>
          <p>text</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-text">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: wait;`}>
          <p>wait</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-wait">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: help-resize;`}>
          <p>help-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-help-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: ne-resize;`}>
          <p>ne-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-ne-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: nw-resize;`}>
          <p>nw-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-nw-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: n-resize;`}>
          <p>n-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-n-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: se-resize;`}>
          <p>se-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-se-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: sw-resize;`}>
          <p>sw-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-sw-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: s-resize;`}>
          <p>s-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-s-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`cursor: w-resize;`}>
          <p>w-resize</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div cursor " id="cursor-w-resize">
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Cursor;
