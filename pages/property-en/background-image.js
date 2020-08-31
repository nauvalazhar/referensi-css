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
        <p>Defines an image as the background of the element.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`background-image: none;`}
        >
          <p>Removes any background image.</p>
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
            Uses the image defined in the <strong>url</strong> path. This path
            can either be <em>relative</em> (to the css file) or{" "}
            <em>absolute</em> (like{" "}
            <code>http://cssreference.io/images/jt.png</code>).
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
            You can define a <strong>linear gradient</strong> as the background
            image.
          </p>
          <p>
            You need to define at least <strong>two colors</strong>. The first
            one will start at the top, the second one at the bottom.
          </p>
          <p>
            The default angle is <code>to bottom</code> (or <code>180deg</code>
            ), which means the gradient is <strong>vertical</strong>, starting
            at the top, ending at the bottom of the element.
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
            You can specify an <strong>angle</strong>, either in{" "}
            <strong>degrees</strong>, or with keywords.
          </p>
          <p>
            When using degress, you specify the <em>direction</em> of the
            gradient, or when it ends. So <code>0deg</code> means the the{" "}
            <strong>top</strong> of the element, like 12:00 on a clock.
          </p>
          <p>
            In this example, <code>45deg</code> means 2:30, or the top right
            corner.
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
            You can define a <strong>radial gradient</strong> as the background
            image.
          </p>
          <p>
            You need to define at least <strong>two colors</strong>. The first
            one will be at the center, the second one at the edges.
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
            You can specify the <strong>shape</strong> of the radial gradient:{" "}
            <strong>circle</strong> or <strong>ellipse</strong> (default).
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
            You can specify <strong>color stops</strong> using percentage
            values.
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
            You can specify <em>where</em> the gradient should{" "}
            <strong>end</strong>:
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
            Like with the{" "}
            <a href={`http://cssreference.io/#background-position`}>
              <code>background-position</code>
            </a>
            , you can specify the <strong>position</strong> of the gradient.
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
