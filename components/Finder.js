import Link from 'next/link';
import { 
	initializeMatches, 
	highlightQuery,
	cleanMenu
} from '../utils/helpers';
import SearchInput from './SearchInput';
const properties = require('../data/properties.json');

export default class Finder extends React.Component {
	render() {
		const props = this.props;

		return (
			<>
				<article className="finder">
					<SearchInput
						item=".finder-item"
						list="#finder-list"
					/>
				  <div id="finder-list" className="finder-list">
			    	{ properties.map((property) => (
			  		  <article key={property.name} className="finder-item" data-property-name={property.name}>
			  		  	<Link href={`/property/${property.name}`}><a className="finder-item-link"><span className="item-name">{property.name}</span></a></Link>
			  		  	{'collection' in property &&
				  		  	<div className="finder-item-meta">
				  		  		<Link href="/collection/[collection]" as={`/collection/${property.collection}`}><a className="light light--collection">{ property.collection }</a></Link>
				  		  	</div>
				  		  }
			  		  </article>
			    	)) }
				  </div>
				</article>
			</>
		);
	}
}