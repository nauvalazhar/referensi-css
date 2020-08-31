import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const AlignSelf = () => (
  <React.Fragment>
    <style>{`
        .align-self { align-items: center;background: hsl(0, 0%, 95%);display: flex;height: 200px;justify-content: center;padding: 0; }
        .align-self .square { height: 50px;margin: 0 2px;width: calc(20% - 4px); }.align-self .square:nth-child(2) { background: #05ffb0;color: #310736; }.align-self .square:nth-child(4) { height: 75px; }.align-self .line { left: 2px;position: absolute;right: 2px; }.align-self .line--default { top: 50%; }.align-self .line--default:before { content: "Item"; }.align-self .line--red:before { content: "Self"; }
        #align-self-auto{ align-self:auto;}
        #align-self-auto .target { align-self: auto; }
        #align-self-flex-start{ align-self:flex-start;}
        #align-self-flex-start .target { align-self: flex-start; }
        #align-self-flex-end{ align-self:flex-end;}
        #align-self-flex-end .line--red { bottom: 0; }#align-self-flex-end .target { align-self: flex-end; }
        #align-self-center{ align-self:center;}
        #align-self-center{ align-items: flex-start; }
        #align-self-center .line--default { top: 0; }#align-self-center .line--red { top: 50%; }#align-self-center .target { align-self: center; }
        #align-self-baseline{ align-self:baseline;}
        #align-self-baseline .line--default { top: 50%; }#align-self-baseline .line--red { top: 30px; }#align-self-baseline .target { align-self: baseline; }
        #align-self-stretch{ align-self:stretch;}
        #align-self-stretch .line--default { top: 50%; }#align-self-stretch .line--red { display: none; }#align-self-stretch .target { align-self: stretch;height: auto; }
	    `}</style>
    <LayoutSingle
      property="align-self"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/align-self"
      description=<React.Fragment>
        <p>
          Berfungsi seperti <code>align-items</code>, tapi hanya berlaku untuk satu item flexbox, bukan semuanya.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`align-self: auto;`}
        >
          <p>
            Target akan menggunakan nilai (<i>value</i>) dari properti <code>align-items</code>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div className="example-output-div align-self " id="align-self-auto">
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: flex-start;`}>
          <p>
            Bila <i>container</i> memiliki <code>align-items: center</code> dan target memiliki <code>align-self: flex-start</code>, hanya target yang akan berada di awal <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, ini berarti akan disejajarkan secara vertikal di atas (<i>top</i>).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-flex-start"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: flex-end;`}>
          <p>
            Bila <i>container</i> memiliki <code>align-items: center</code> dan target memiliki <code>align-self: flex-end</code>, hanya target yang akan berada di ujung <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, ini berarti akan disejajarkan secara vertikal di bawah (<i>bottom</i>).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-flex-end"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: center;`}>
          <p>
            Bila <i>container</i> memiliki <code>align-items: flex-start</code> dan target memiliki <code>align-self: center</code>, hanya target yang akan berada di tengah <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, ini berarti posisinya berada di tengah secara vertikal.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-center"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: baseline;`}>
          <p>
            Bila <i>container</i> memiliki <code>align-items: center</code> dan target memiliki <code>align-self: baseline</code>, hanya target yang akan berada di garis dasar (<i>baseline</i>) <i>cross-axis</i>.
          </p>
          <p>
            Secara bawaan, ini berarti akan diratakan sepanjang garis dasar (<i>baseline</i>) teks.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-baseline"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`align-self: stretch;`}>
          <p>
            Bila <i>container</i> memiliki <code>align-items: center</code> dan target memiliki <code>align-self: stretch</code>, hanya target yang akan meregang sepanjang keseluruhan <i>cross-axis</i>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div align-self "
            id="align-self-stretch"
          >
            <p className="square square--plum">1</p>
            <p className="square target">Target</p>
            <p className="square square--plum">3</p>
            <p className="square square--plum">4</p>
            <p className="square square--plum">5</p>
            <div className="line line--default"></div>
            <div className="line line--red"></div>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default AlignSelf;
