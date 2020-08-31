import Head from 'next/head'
import LayoutCollection from '../../components/LayoutCollection';
import Collections from '../../components/Collections';
const properties = require('../../data/properties.json');

export default class Collection extends React.Component {
  static async getInitialProps({ query: {collection} }) {
    return {
      collection
    }
  }

  render() {
    const {collection} = this.props;

    return (
      <LayoutCollection
        collection={collection}
      >
        <Collections
          of={collection}
        />
      </LayoutCollection>
    )
  }
}
