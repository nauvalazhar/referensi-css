import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const ListStylePosition = () => (
  <React.Fragment>
    <style>{`
        .list-style-position ul { list-style-type: disc;margin-left: 1em;max-width: 280px; }.list-style-position li { background: hsl(48, 100%, 67%);line-height: 1.2; }.list-style-position li + li { margin-top: 0.5em; }
        #list-style-position-outside{ list-style-position:outside;}
        #list-style-position-outside ul { list-style-position: outside; }
        #list-style-position-inside{ list-style-position:inside;}
        #list-style-position-inside ul { list-style-position: inside; }
	    `}</style>
    <LayoutSingle
      property="list-style-position"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/list-style-position"
      description=<React.Fragment>
        <p>
          Defines the <strong>position</strong> of a list's bullet points.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`list-style-position: outside;`}
        >
          <p>
            The bullet point will be <strong>outside</strong> the list item, as
            if it wasn't part of the list item.
          </p>
          <p>
            The start of each <em>line</em> of a list item will be aligned
            vertically.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-position "
            id="list-style-position-outside"
          >
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              </li>
              <li>
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut.
              </li>
              <li>
                Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
                sit amet.
              </li>
              <li>Pellentesque interdum, nisl nec interdum maximus.</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`list-style-position: inside;`}>
          <p>
            The bullet point will be <strong>inside</strong> the list item.
          </p>
          <p>
            As it <em>is</em> part of the list item, it will be part of the text
            and push the text at the start.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-position "
            id="list-style-position-inside"
          >
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
              </li>
              <li>
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut.
              </li>
              <li>
                Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit
                sit amet.
              </li>
              <li>Pellentesque interdum, nisl nec interdum maximus.</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default ListStylePosition;
