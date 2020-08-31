import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const WhiteSpace = () => (
  <React.Fragment>
    <style>{`
        .white-space { font-family: "Source Code Pro", monospace;font-size: 0.7rem;width: 18em; }
        #white-space-normal{ white-space:normal;}
        #white-space-nowrap{ white-space:nowrap;}
        #white-space-pre{ white-space:pre;}
        #white-space-pre-wrap{ white-space:pre-wrap;}
        #white-space-pre-line{ white-space:pre-line;}
	    `}</style>
    <LayoutSingle
      property="white-space"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/white-space"
      description=<React.Fragment>
        <p>Defines how the element's white space is handled.</p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`white-space: normal;`}
        >
          <p>
            Sequences of spaces are combined into one.
            <br />
            Line breaks are ignored.
            <br />
            The text content is wrapped.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div white-space  block block--alpha"
            id="white-space-normal"
          >
            #parent .selector ul li blockquote{`{`}
            color: red; font-size: 1rem; }
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`white-space: nowrap;`}>
          <p>
            Sequences of spaces are combined into one.
            <br />
            Line breaks are ignored.
            <br />
            The text content is <strong>not</strong> wrapped and remains on a{" "}
            <strong>single line</strong>.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div white-space  block block--alpha"
            id="white-space-nowrap"
          >
            #parent .selector ul li blockquote{`{`}
            color: red; font-size: 1rem; }
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`white-space: pre;`}>
          <p>
            The white space is <strong>exactly preserved</strong>.
          </p>
          <ul>
            <li>Sequences of spaces are preserved</li>
            <li>
              Lines break only on new lines and <code>&lt;br&gt;</code>
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div white-space  block block--alpha"
            id="white-space-pre"
          >
            #parent .selector ul li blockquote{`{`}
            color: red; font-size: 1rem; }
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`white-space: pre-wrap;`}>
          <p>
            The white space is <strong>mostly preserved</strong>.
          </p>
          <ul>
            <li>Sequences of spaces are preserved</li>
            <li>
              Lines break on new lines, <code>&lt;br&gt;</code>, but also when
              reaching the end of the element
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div white-space  block block--alpha"
            id="white-space-pre-wrap"
          >
            #parent .selector ul li blockquote{`{`}
            color: red; font-size: 1rem; }
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property declaration={`white-space: pre-line;`}>
          <p>
            Only <strong>new lines</strong> are preserved.
          </p>
          <ul>
            <li>
              Sequences of spaces are <strong>combined</strong> into one
            </li>
            <li>
              Lines break on new lines, <code>&lt;br&gt;</code>, but also when
              reaching the end of the element
            </li>
          </ul>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div white-space  block block--alpha"
            id="white-space-pre-line"
          >
            #parent .selector ul li blockquote{`{`}
            color: red; font-size: 1rem; }
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default WhiteSpace;
