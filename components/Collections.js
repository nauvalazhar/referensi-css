import Link from 'next/link';
const properties = require('../data/properties.json');

export default class Collections extends React.Component {
	render() {
		const { of } = this.props;
		const relatedProperties = properties.filter(property => 'collection' in property && property.collection == of);

		return (
			<React.Fragment>
				<div className="collections-properties">
					{relatedProperties.map(property => (
					  <article key={property.name} className="collections-property">
					  	<div className="collections-property-inner">
						    <h4 className="collections-property-title"><Link href={`/property/${property.name}`}><a>{property.name}</a></Link></h4>
						    <p className="collections-property-description">Pelajari bagaimana properti {property.name} di CSS bekerja.</p>
					    </div>
					  </article>
					))}
				</div>
			</React.Fragment>
		);
	}
}