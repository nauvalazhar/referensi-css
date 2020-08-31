import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";
import Link from "next/link";

const ListStyleImage = () => (
  <React.Fragment>
    <style>{`
        .list-style-image ul { list-style-type: disc;margin-left: 1em; }
        #list-style-image-none{ list-style-image:none;}
        #list-style-image-urlimageslist-style-imagepng{ list-style-image:url(/images/list-style-image.png);}
        #list-style-image-urlimageslist-style-imagepng ul { list-style-image: url(/images/list-style-image.png); }
	    `}</style>
    <LayoutSingle
      property="list-style-image"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/list-style-image"
      description=<React.Fragment>
        <p>
          Defines the <strong>image</strong> to be used as an list item's{" "}
          <strong>bullet point</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`list-style-image: none;`}
        >
          <p>
            The list items will use the bullet point defined by the{" "}
            <code className="shorthand">
              <a href={`http://cssreference.io/#list-style-type`}>
                list-style-type
              </a>
            </code>{" "}
            value, which by default is a <strong>disc</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-image "
            id="list-style-image-none"
          >
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`list-style-image: url(/images/list-style-image.png);`}
        >
          <p>
            The list items will use the <strong>image</strong> located at the
            specified URL as their bullet point.
            <br />
            The image can not be resized.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div list-style-image "
            id="list-style-image-urlimageslist-style-imagepng"
          >
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default ListStyleImage;
