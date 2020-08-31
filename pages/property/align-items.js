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
          Mendefinisikan bagaimana item flexbox disejajarkan sesuai dengan <i>cross-axis</i>,
          dalam satu baris <i>container</i> flexbox.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property declaration={`align-items: flex-start;`}>
          <p>
            Item flexbox disejajarkan di awal (<i>start</i>) <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, <i>cross-axis</i> adalah vertikal. 
            Ini berarti item flexbox akan disejajarkan secara vertikal di bagian atas (<i>top</i>).
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
            Item flexbox disejajarkan di ujung (<i>end</i>) <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, <i>cross-axis</i> adalah vertikal. 
            Ini berarti item flexbox akan disejajarkan secara vertikal di bagian bawah (<i>bottom</i>).
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
            Item flexbox disejajarkan di tengah (<i>center</i>) <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, cross-axis adalah vertikal. 
            Ini berarti item flexbox akan dipusatkan (<i>centered</i>) secara vertikal.
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
            Item flexbox disejajarkan di garis dasar (<i>baseline</i>) dari <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, <i>cross-axis</i> adalah vertikal. 
            Ini berarti item flexbox akan menyelaraskan dirinya sendiri agar garis dasar (<i>baseline</i>) teksnya sejajar sepanjang garis horizontal.
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
            Item flexbox akan membentang di seluruh <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, <i>cross-axis</i> adalah vertikal.
            Ini berarti item flexbox akan memenuhi seluruh ruang vertikal. 
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
