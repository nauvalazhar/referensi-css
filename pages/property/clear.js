import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Clear = () => (
  <React.Fragment>
    <style>{`
        .clear .block--alpha { float: left;text-align: center; }.clear .block--beta { float: right;text-align: center; }
        #clear-none{ clear:none;}
        #clear-left{ clear:left;}
        #clear-left .block--yellow { clear: left; }
        #clear-right{ clear:right;}
        #clear-right .block--yellow { clear: right; }
        #clear-both{ clear:both;}
        #clear-both .block--yellow { clear: both; }
	    `}</style>
    <LayoutSingle
      property="clear"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/clear"
      description=<React.Fragment>
        <p>Moves the element after all the preceding floating elements.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`clear: none;`}>
          <p>
            The <strong>clear</strong> property is only relevant when used with
            siblings that have a <strong>float</strong> value.
          </p>
          <p>
            The element will sit <strong>alongside</strong> any floated element
            that <em>precedes</em> it.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div clear " id="clear-none">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
            <p className="block block--alpha">
              Float left
              <br />
              block
            </p>
            <p className="block block--beta">Float right</p>
            <p className="block block--yellow">
              <strong>This is the clear none block</strong>. It lives alongside
              its floating siblings. It takes up the remaining space left in
              between.
            </p>
            <p className="block">
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
              sit amet. Pellentesque interdum, nisl nec interdum maximus, augue
              diam porttitor lorem, et sollicitudin felis neque sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`clear: left;`}>
          <p>
            The cleared element will move <em>after</em> any left floating
            element that precedes it, but will remain alongside right float
            elements.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div clear " id="clear-left">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
            <p className="block block--alpha">Float left</p>
            <p className="block block--beta">
              Tall
              <br />
              float
              <br />
              right
              <br />
              block
            </p>
            <p className="block block--yellow">
              <strong>This is the clear left element</strong>. It comes after
              the clear left, but remains alongside the float right.
            </p>
            <p className="block">
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
              sit amet. Pellentesque interdum, nisl nec interdum maximus, augue
              diam porttitor lorem, et sollicitudin felis neque sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`clear: right;`}>
          <p>
            The cleared element will move <em>after</em> any right floating
            element that precedes it, but will remain alongside left float
            elements.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div clear " id="clear-right">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
            <p className="block block--alpha">
              Tall
              <br />
              float
              <br />
              left
              <br />
              block
            </p>
            <p className="block block--beta">Float right</p>
            <p className="block block--yellow">
              <strong>This is the clear left element</strong>. It comes after
              the clear right, but remains alongside the float left.
            </p>
            <p className="block">
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
              sit amet. Pellentesque interdum, nisl nec interdum maximus, augue
              diam porttitor lorem, et sollicitudin felis neque sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`clear: both;`}>
          <p>
            The cleared element will move <em>after</em> any floating element
            that precedes it. This includes both left floating and right
            floating elements.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div clear " id="clear-both">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut.
            </p>
            <p className="block block--alpha">Float left</p>
            <p className="block block--beta">Float right</p>
            <p className="block block--yellow">
              <strong>This is the clear both element</strong>. It comes after
              both floating elements.
            </p>
            <p className="block">
              Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
              sit amet. Pellentesque interdum, nisl nec interdum maximus, augue
              diam porttitor lorem, et sollicitudin felis neque sit amet erat.
            </p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Clear;
