export default class Footer extends React.Component {
	render() {
		return (
			<footer className="sisters">
			  <div className="sister sister--htmlreference container">
			    <h4 className="sister-title">
			      Check out our sister website:<br />
			      <strong>HTML Reference</strong> 😃
			    </h4>
			    <a className="sister-banner" href="https://htmlreference.io">
			      <img src="/images/html-reference-logo.png" alt="HTML Reference logo" />
			    </a>
			  </div>
			  <div className="sister sister--bulma container">
			    <h4 className="sister-title">
			      Need a CSS framework?<br />
			      Try out <strong>Bulma</strong> 😎
			    </h4>
			    <a className="sister-banner" href="https://bulma.io">
			      <img src="/images/bulma-logo.png" alt="Bulma logo" />
			    </a>
			  </div>
			</footer>
		);
	}
}