import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AlignContent = () => (
  <React.Fragment>
    <style>{`
        .align-content { background: hsl(0, 0%, 95%);display: flex;flex-wrap: wrap;height: 300px;padding: 0; }
        .align-content .square { height: 46px;margin: 2px;width: 30%; }.align-content .square:nth-child(2) { height: 96px; }.align-content .box { height: 150px;left: 0;position: absolute;right: 0;top: 0; }.align-content .box--red:before { content: "First line"; }.align-content .box--green { top: 150px; }.align-content .box--green:before { content: "Second line"; }
        #align-content-stretch{ align-content:stretch;}
        #align-content-stretch .box--red { height: 175px; }#align-content-stretch .box--green { height: 125px;top: 175px; }
        #align-content-flex-start{ align-content:flex-start;}
        #align-content-flex-start .box--red { height: 100px; }#align-content-flex-start .box--green { height: 50px;top: 100px; }
        #align-content-flex-end{ align-content:flex-end;}
        #align-content-flex-end .box--red { height: 100px;top: 150px; }#align-content-flex-end .box--green { height: 50px;top: 250px; }
        #align-content-center{ align-content:center;}
        #align-content-center .box--red { height: 100px;top: 75px; }#align-content-center .box--green { height: 50px;top: 175px; }
        #align-content-space-between{ align-content:space-between;}
        #align-content-space-between .box--red { height: 100px;top: 0; }#align-content-space-between .box--green { height: 50px;top: 250px; }
        #align-content-space-around{ align-content:space-around;}
        #align-content-space-around .box--red { height: 100px;top: 38px; }#align-content-space-around .box--green { height: 50px;top: 213px; }
	    `}</style>
    <LayoutSingle
      property="align-content"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/align-content"
      description=<React.Fragment>
        <p>
          Defines how each line is aligned within a flexbox/grid container. It
          only applies if <code>flex-wrap: wrap</code> is present, and if there
          are <strong>multiple lines</strong> of flexbox/grid items.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`align-content: stretch;`}
        >
          <p>
            Each line will stretch to <em>fill</em> the remaining space.
          </p>
          <p>
            In this case, the container is <code>300px</code> high. All boxes
            are <code>50px</code> high, apart from the second one who is{" "}
            <code>100px</code> high.
          </p>
          <ul>
            <li>
              The first line is <strong>100px</strong> high
            </li>
            <li>
              The second line is <strong>50px</strong> high
            </li>
            <li>
              The remaing space is <strong>150px</strong>
            </li>
          </ul>
          <p>
            This remaining space is distributed equally amongst the two lines:
          </p>
          <ul>
            <li>
              The first line is now <strong>175px</strong> high
            </li>
            <li>
              The second line is now <strong>125px</strong> high
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-content "
            id="align-content-stretch"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="box box--red"></div>
            <div className="box box--green"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-content: flex-start;`}>
          <p>
            Each line will only fill the space it <em>needs</em>. They will all
            move towards the <strong>start</strong> of the flexbox/grid
            container's cross axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-content "
            id="align-content-flex-start"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="box box--red"></div>
            <div className="box box--green"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-content: flex-end;`}>
          <p>
            Each line will only fill the space it <em>needs</em>. They will all
            move towards the <strong>end</strong> of the flexbox/grid
            container's cross axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-content "
            id="align-content-flex-end"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="box box--red"></div>
            <div className="box box--green"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-content: center;`}>
          <p>
            Each line will only fill the space it <em>needs</em>. They will all
            move towards the <strong>center</strong> of the flexbox/grid
            container's cross axis.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-content "
            id="align-content-center"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="box box--red"></div>
            <div className="box box--green"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-content: space-between;`}>
          <p>
            Each line will only fill the space it <em>needs</em>. The{" "}
            <em>remaining</em> space will appear <strong>between</strong> the
            lines.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-content "
            id="align-content-space-between"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="box box--red"></div>
            <div className="box box--green"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-content: space-around;`}>
          <p>
            Each line will only fill the space it <em>needs</em>. The{" "}
            <em>remaining</em> space will be distributed equally{" "}
            <strong>around</strong> the lines: before the first line, between
            the two, and after the last one.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-content "
            id="align-content-space-around"
          >
            <p className="square square--plum">1</p>
            <p className="square square--plum">2</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="box box--red"></div>
            <div className="box box--green"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default AlignContent;
