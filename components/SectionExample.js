export default class SectionExample extends React.Component {

  static Property = ({ children, declaration, isDefault=false, fixedToggle = false }) => {
    
    function toggleFixed(e) {
      const btn = e.currentTarget;
      const slug = btn.dataset.slug;
      const target = document.getElementById(slug);

      btn.classList.toggle('is-enabled');
      target.classList.toggle('is-fixed');
    }

    return (
      <header className="example-header">
        <p className="example-name">
          {isDefault &&
            <code className="example-default" data-tooltip="This is the property's default value">default</code>
          }
          <code className="example-value" data-tooltip="Click to copy" data-clipboard-text={declaration}>{declaration}</code>
        </p>

        {fixedToggle &&
          <div className="example-fixed">
            <a onClick={toggleFixed.bind(this)} className="button example-fixed-toggle" data-slug="position-fixed"></a>
          </div>
        }

        <div className="example-description">
          { children }
        </div>
      </header>
    )
  }

  static Preview = ({ children }) => (
    <aside className="example-preview">
      <div className="example-browser"><i></i><i></i><i></i></div>
      <div className="example-output">
        { children }
      </div>
    </aside>
  )

  render() {
    const {children} = this.props;

    return (
      <section className="example">
        { children }
      </section>
    );
  }
}