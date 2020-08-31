import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AlignContent = () => (
  <React.Fragment>
    <style>{`
        .align-content { background: hsl(0, 0%, 95%);display: flex;flex-wrap: wrap;height: 300px;padding: 0; }
        .align-content .square { height: 46px;margin: 2px;width: 30%; }.align-content .square:nth-child(2) { height: 96px; }.align-content .box { height: 150px;left: 0;position: absolute;right: 0;top: 0; }.align-content .box--red:before { content: "Baris pertama"; }.align-content .box--green { top: 150px; }.align-content .box--green:before { content: "Baris kedua"; }
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
          Mendefinisikan bagaimana setiap baris disejajarkan di dalam sebuah flexbox/grid <i>container</i>.{" "}
          Itu hanya berlaku bila deklarasi <code>flex-wrap: wrap</code> ada, dan bila ada beberapa baris item flexbox/grid.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`align-content: stretch;`}
        >
          <p>
            Setiap baris akan meregang untuk <em>mengisi (fill)</em> ruang yang tersisa.
          </p>
          <p>
            Dalam hal ini, tinggi <i>container</i> adalah <code>300px</code>. Semua kotak tingginya
            <code>50px</code>, kecuali kotak yang kedua yang tingginya{" "}
            <code>100px</code>.
          </p>
          <ul>
            <li>
              Baris pertama tingginya <strong>100px</strong>
            </li>
            <li>
              Baris kedua tingginya <strong>50px</strong>
            </li>
            <li>
              Sisa ruangnya adalah <strong>150px</strong>
            </li>
          </ul>
          <p>
            Sisa ruang ini didistribusikan secara merata diantara dua baris:
          </p>
          <ul>
            <li>
              Baris pertama sekarang tingginya <strong>175px</strong>
            </li>
            <li>
              Baris kedua sekarang tingginya <strong>125px</strong>
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
            Setiap baris hanya akan mengisi ruang yang dibutuhkan. 
            Mereka semua akan bergerak menuju awal (<i>start</i>) <i>cross-axis</i> dari <i>container</i> flexbox/grid.
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
            Setiap baris hanya akan mengisi ruang yang dibutuhkan. 
            Mereka semua akan bergerak menuju ujung (<i>start</i>) <i>cross-axis</i> dari <i>container</i> flexbox/grid.
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
            Setiap baris hanya akan mengisi ruang yang dibutuhkan. 
            Mereka semua akan bergerak menuju tengah (<i>center</i>) <i>cross-axis</i> dari <i>container</i> flexbox/grid.
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
            Setiap baris hanya akan mengisi ruang yang dibutuhkan. 
            Ruang yang tersisa akan muncul diantara (<i>between</i>) baris.
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
            Setiap baris hanya akan mengisi ruang yang dibutuhkan. 
            Ruang yang tersisa akan didistribusikan secara merata di sekitar (<i>around</i>) baris: 
            sebelum baris pertama, diantara keduanya, dan setelah yang terakhir.
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
