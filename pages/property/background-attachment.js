import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const BackgroundAttachment = () => (
  <React.Fragment>
    <style>{`
        .background-attachment { background-image: url(/images/landscape.jpg);background-position: center center;background-size: cover;height: 200px; }
        .background-attachment p { background: white;padding: 0.8em 1em; }
        #background-attachment-scroll{ background-attachment:scroll;}
        #background-attachment-fixed{ background-attachment:fixed;}
	    `}</style>
    <LayoutSingle
      property="background-attachment"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-attachment"
      description=<React.Fragment>
        <p>
          Mendefinisikan bagaimana gambar latar akan berperilaku saat halaman digulir.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-attachment: scroll;`}
        >
          <p>
            Gambar latar akan bergulir dengan halaman. Itu juga akan memposisikan 
            dan mengubah ukurannya sendiri sesuai dengan elemen yang diterapkan padanya.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-attachment "
            id="background-attachment-scroll"
          >
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`background-attachment: fixed;`}>
          <p>
            Gambar latar tidak menggulir dengan halaman, dan tetap diposisikan sesuai dengan <i>viewport</i>. Ini juga akan memposisikan dan mengubah ukurannya sendiri sesuai dengan viewport. Akibatnya, gambar latar mungkin hanya terlihat sebagian.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-attachment "
            id="background-attachment-fixed"
          >
            <p>Hello world</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundAttachment;
