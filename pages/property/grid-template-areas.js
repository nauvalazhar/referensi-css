import LayoutSingle from "../../components/LayoutSingle";
import SectionExample from "../../components/SectionExample";

const GridTemplateAreas = () => (
  <React.Fragment>
    <style>{`
        .grid-template-areas { display: grid;padding: 0; }
        #grid-template-areas-none{ grid-template-areas:none;}
        #grid-template-areas-header-header-header-sidebar-main-main{ grid-template-areas:"header header header" "sidebar main main";}
        #grid-template-areas-header-header-header-sidebar-main-main .block--alpha { grid-area: header; }#grid-template-areas-header-header-header-sidebar-main-main .block--beta { grid-area: sidebar; }#grid-template-areas-header-header-header-sidebar-main-main .block--pink { grid-area: main; }
	    `}</style>
    <LayoutSingle
      property="grid-template-areas"
      mdn="https://developer.mozilla.org/en/docs/Web/CSS/grid-template-areas"
      description=<React.Fragment>
        <p>
          Defines areas within a <strong>grid container</strong>. These areas
          can then be referenced when placing a <strong>grid item</strong>.
        </p>
      </React.Fragment>
    >
      <SectionExample>
        <SectionExample.Property
          isDefault={true}
          declaration={`grid-template-areas: none;`}
        >
          <p>No area is defined.</p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-areas "
            id="grid-template-areas-none"
          >
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
            <p className="block block--pink">Main</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>

      <SectionExample>
        <SectionExample.Property
          declaration={`grid-template-areas: "header header header" "sidebar main main";`}
        >
          <p>
            You can use <strong>area names</strong> to specify which cells each
            grid item should occupy.
          </p>
        </SectionExample.Property>

        <SectionExample.Preview>
          <div
            className="example-output-div grid-template-areas "
            id="grid-template-areas-header-header-header-sidebar-main-main"
          >
            <p className="block block--alpha">Header</p>
            <p className="block block--beta">Sidebar</p>
            <p className="block block--pink">Main</p>
          </div>
        </SectionExample.Preview>
      </SectionExample>
    </LayoutSingle>
  </React.Fragment>
);

export default GridTemplateAreas;
