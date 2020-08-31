import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BorderCollapse = () => (
  <React.Fragment>
    <style>{`
        .border-collapse table { width: 100%; }.border-collapse td { border-bottom: 4px solid hsl(348, 100%, 61%);border-left: 4px solid #05ffb0;border-right: 4px solid hsl(48, 100%, 67%);border-top: 4px solid hsl(217, 71%, 53%);padding: 0.4em 0.5em; }
        #border-collapse-separate{ border-collapse:separate;}
        #border-collapse-separate table { border-collapse: separate; }
        #border-collapse-collapse{ border-collapse:collapse;}
        #border-collapse-collapse table { border-collapse: collapse; }
	    `}</style>
    <LayoutSingle
      property="border-collapse"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/border-collapse"
      description=<React.Fragment>
        <p>
          Defines whether <strong>table</strong> borders should be separated or
          collapsed.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`border-collapse: separate;`}
        >
          <p>
            Each table <strong>cell</strong> will display its own borders.
          </p>
          <p>
            In this example, each cell has a <code>border-width</code> of{" "}
            <strong>4px</strong>. As a result, the border between <em>two</em>{" "}
            cells will be <strong>8px</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-collapse "
            id="border-collapse-separate"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>
                    <strong>Instrument</strong>
                  </td>
                </tr>
                <tr>
                  <td>John Lennon</td>
                  <td>Rhythm Guitar</td>
                </tr>
                <tr>
                  <td>Paul McCartney</td>
                  <td>Bass</td>
                </tr>
                <tr>
                  <td>George Harrison</td>
                  <td>Lead Guitar</td>
                </tr>
                <tr>
                  <td>Ringo Starr</td>
                  <td>Drums</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`border-collapse: collapse;`}>
          <p>
            Adjacent table cells will <strong>merge</strong> their borders
            together.
          </p>
          <p>
            The cell that appears <em>first</em> in the code will "win": its
            borders will <em>mask</em> those of the following cells.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div border-collapse "
            id="border-collapse-collapse"
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>
                    <strong>Instrument</strong>
                  </td>
                </tr>
                <tr>
                  <td>John Lennon</td>
                  <td>Rhythm Guitar</td>
                </tr>
                <tr>
                  <td>Paul McCartney</td>
                  <td>Bass</td>
                </tr>
                <tr>
                  <td>George Harrison</td>
                  <td>Lead Guitar</td>
                </tr>
                <tr>
                  <td>Ringo Starr</td>
                  <td>Drums</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BorderCollapse;
