import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const Resize = () => (
  <React.Fragment>
    <style>{`
        .resize textarea { background: #fff;border: 1px solid hsl(0, 0%, 50%);color: hsl(0, 0%, 20%);font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;height: 10em;padding: 0.8em 1em;width: 25em; }
        #resize-none{ resize:none;}
        #resize-none textarea { resize: none; }
        #resize-horizontal{ resize:horizontal;}
        #resize-horizontal textarea { resize: horizontal; }
        #resize-vertical{ resize:vertical;}
        #resize-vertical textarea { resize: vertical; }
        #resize-both{ resize:both;}
        #resize-both textarea { resize: both; }
	    `}</style>
    <LayoutSingle
      property="resize"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/resize"
      description=<React.Fragment>
        <p>Defines if the textarea is resizable or not.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property isDefault={true} declaration={`resize: none;`}>
          <p>
            The textarea is <strong>not</strong> resizable.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div resize " id="resize-none">
            <textarea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </textarea>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`resize: horizontal;`}>
          <p>
            The textarea is resizable <strong>horizontally</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div resize " id="resize-horizontal">
            <textarea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </textarea>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`resize: vertical;`}>
          <p>
            The textarea is resizable <strong>vertically</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div resize " id="resize-vertical">
            <textarea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </textarea>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`resize: both;`}>
          <p>
            The textarea is resizable both <strong>horizontally</strong> and{" "}
            <strong>vertically</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div resize " id="resize-both">
            <textarea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Maecenas imperdiet felis nisi, fringilla luctus felis
              hendrerit sit amet.
            </textarea>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default Resize;
