import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const BackgroundImage = () => (
  <React.Fragment>
    <style>{`
        .background-image { background-repeat: no-repeat;height: 200px; }
        #background-image-none{ background-image:none;}
        #background-image-urlimagesjtpng{ background-image:url(/images/jt.png);}
        #background-image-urlimagesjtpng{ background-size: 64px 64px; }
        #background-image-linear-gradientred-blue{ background-image:linear-gradient(red, blue);}
        #background-image-linear-gradient45deg-red-blue{ background-image:linear-gradient(45deg, red, blue);}
        #background-image-radial-gradientgreen-purple{ background-image:radial-gradient(green, purple);}
        #background-image-radial-gradientcircle-green-purple{ background-image:radial-gradient(circle, green, purple);}
        #background-image-radial-gradientcircle-green-0-purple-20-orange-100{ background-image:radial-gradient(circle, green 0%, purple 20%, orange 100%);}
        #background-image-radial-gradientcircle-closest-side-green-0-purple-20-orange-100{ background-image:radial-gradient(circle closest-side, green 0%, purple 20%, orange 100%);}
        #background-image-radial-gradientcircle-closest-side-at-45px-45px-green-0-purple-20-orange-100{ background-image:radial-gradient(circle closest-side at 45px 45px, green 0%, purple 20%, orange 100%);}
	    `}</style>
    <LayoutSingle
      property="background-image"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/background-image"
      description=<React.Fragment>
        <p>Mendefinisikan gambar sebagai latar belakang elemen.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-image: none;`}
        >
          <p>Menghapus gambar latar apa pun.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-none"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: url(/images/jt.png);`}
        >
          <p>
            Menggunakan gambar yang ditentukan di dalam jalur <strong>url</strong>.{" "}
            Jalur ini bisa juga <i>relative</i> (ke berkas CSS) atau{" "}
            <i>absolute</i> (seperti <code>https://blabla.com/images/jt.png</code>).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-urlimagesjtpng"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: linear-gradient(red, blue);`}
        >
          <p>
            Kamu dapat mendefinisikan <strong>linear gradient</strong> sebagai gambar latar.
          </p>
          <p>
            Kamu perlu mendefinisikan setidaknya dua warna. Warna pertama akan dimulai di bagian atas,{" "}
            warna kedua di bagian bawah.
          </p>
          <p>
            Sudut bawaanya adalah <code>to bottom</code> (atau <code>180deg</code>),
            yang berarti gradiennya <strong>vertikal</strong>, dimulai di bagian atas,{" "}
            berakhir di bagian bawah elemen.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-linear-gradientred-blue"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: linear-gradient(45deg, red, blue);`}
        >
          <p>
            Kamu dapat menentukan <strong>sudut</strong>, baik dalam <strong>derajat</strong>,{" "}
            atau dengan kata kunci.
          </p>
          <p>
            Ketika menggunakan derajat, kamu menentukan <i>arah</i> dari gradien,{" "}
            atau saat berakhir. Jadi <code>0deg</code> berarti bagian atas elemen,{" "}
            seperti 12:00 di jam.
          </p>
          <p>
            Dalam contoh ini, <code>45deg</code> berarti 2:30, atau sudut atas kanan.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-linear-gradient45deg-red-blue"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: radial-gradient(green, purple);`}
        >
          <p>
            Kamu dapat mendefinisikan <strong>radial gradient</strong> sebagai gambar latar.
          </p>
          <p>
            Kamu perlu mendefinisikan setidaknya 2 warna. Warna pertama akan berada di tengah,{" "}
            warna kedua di bagian pinggir.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-radial-gradientgreen-purple"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: radial-gradient(circle, green, purple);`}
        >
          <p>
            Kamu dapat mendefinisikan <strong>shape</strong> dari <i>radial gradient</i>:
            <strong>circle</strong> atau <strong>ellipse</strong> (bawaan).
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-radial-gradientcircle-green-purple"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: radial-gradient(circle, green 0%, purple 20%, orange 100%);`}
        >
          <p>
            Kamu dapat menentukan <strong>color stops</strong> menggunakan nilai persentase.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-radial-gradientcircle-green-0-purple-20-orange-100"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: radial-gradient(circle closest-side, green 0%, purple 20%, orange 100%);`}
        >
          <p>
            Kamu dapat menentukan <i>di mana</i> gradien harus berakhir:
          </p>
          <ul>
            <li>
              <code>closest-side</code>
            </li>
            <li>
              <code>closest-corner</code>
            </li>
            <li>
              <code>farthest-side</code>
            </li>
            <li>
              <code>farthest-corner</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-radial-gradientcircle-closest-side-green-0-purple-20-orange-100"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`background-image: radial-gradient(circle closest-side at 45px 45px, green 0%, purple 20%, orange 100%);`}
        >
          <p>
            Seperti 
            <a href={`http://cssreference.io/#background-position`}>
              <code>background-position</code>
            </a>
            , kamu dapat menentukan <strong>position</strong> (posisi) dari gradien.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div background-image "
            id="background-image-radial-gradientcircle-closest-side-at-45px-45px-green-0-purple-20-orange-100"
          >
            Hello world
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default BackgroundImage;
