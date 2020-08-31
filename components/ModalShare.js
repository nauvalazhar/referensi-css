export function modalShareOpen() {
	document.getElementById('modal-share').classList.add('is-active');
}

export function modalShareClose() {
	document.getElementById('modal-share').classList.remove('is-active');
}

export default class ModalShare extends React.Component {
	componentDidMount() {
		document.addEventListener('keydown', this.isEscapeFunc);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.isEscapeFunc);
	}

	isEscapeFunc(e) {
		if(e.keyCode == 27) {
			modalShareClose();
		}
	}

	copyToClipboard(e) {
		const btn = e.currentTarget;
		const btnText = btn.innerHTML;

		navigator.clipboard.writeText(this.props.url);

		btn.innerHTML = 'Copied';

		setTimeout(() => {
			btn.innerHTML = btnText;
		}, 1000);
	}

	render() {
		const props = this.props;

		return (
			<div id="modal-share" className="modal">
			  <div className="modal-box">
			    <p className="modal-title">Bagikan properti CSS ini</p>
			    <p className="modal-url">
			      <input id="modal-input" className="input" type="text" value={props.url} readOnly />
			      <button id="modal-copy" className="button is-primary" onClick={this.copyToClipboard.bind(this)}>Copy</button>
			    </p>
			    <p className="modal-social">
			      <a id="modal-twitter" className="button is-twitter" target="_blank" href={props.twitter}>Bagikan di Twitter</a>
			      <a id="modal-facebook" className="button is-facebook" target="_blank" href={props.facebook}>Bagikan di Facebook</a>
			    </p>
			    <a onClick={modalShareClose.bind(this)} id="modal-close" className="modal-close"></a>
			  </div>
			</div>
		);
	}
}