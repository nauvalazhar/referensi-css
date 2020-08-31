import Link from 'next/link';
import { withRouter } from 'next/router';
const properties = require('../data/properties.json');

export default withRouter(function MenuList({ router: {pathname}, of }) {
	let relatedProperties = properties;

	if(of) relatedProperties = properties.filter(property => 'collection' in property && property.collection == of);

	return (
		<>
    	{ relatedProperties.map((property) => (
				<li key={property.name} className={`menu-item${pathname == `/property/${property.name}` ? ' is-selected' : ''}`} data-property-name={property.name}>
					<Link href={`/property/${property.name}`}><a className="menu-link" data-property-name={property.name}><span className="item-name">{property.name}</span></a></Link>
				</li>
			))}
		</>
	);
})