import Head from 'next/head';
import Link from 'next/link';
import Finder from './Finder';
import ButtonFacebook from './ButtonFacebook';
import ButtonTwitter from './ButtonTwitter';
import ModalShare, { modalShareOpen } from './ModalShare';
import Menu from './Menu';
import { 
  initializeMatches, 
  highlightQuery,
  cleanMenu,
  buildTwitterURL
} from '../utils/helpers';
import Clipboard from 'clipboard';
const collections = require('../data/collections.json');

export default class LayoutSingle extends React.Component {
  constructor(props) {
    super(props);

    this.currentURL = process.env.site.url + '/collection/' + props.collection;
  }

  render() {
    const props = this.props;

    // find collection of current property
    const collection = ((collections, collection) => collections.find(coll => coll.slug == collection))(collections, props.collection);

    const currentURL = this.currentURL;

    return (
      <React.Fragment>
        <Head>
          <title>{collection.name} - {process.env.site.title}</title>
          <meta name="description" content={`Belajar bagaimana properti ${collection.name} di CSS bekerja.`} />
          <meta property="og:url" content={currentURL} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${collection.name} - ${process.env.site.title}`} />
          <meta property="og:image" content="/images/css-reference-share.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:description" content={`Belajar bagaimana properti ${collection.name} di CSS bekerja.`} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mhdnauvalazhar" />
          <meta name="twitter:creator" content="@mhdnauvalazhar" />
          <meta name="twitter:title" content={`${collection.name} - ${process.env.site.title}`} />
          <meta name="twitter:image" content="/images/css-reference-share.png" />
          <meta name="twitter:description" content={`Belajar bagaimana properti ${collection.name} di CSS bekerja.`} />
        </Head>

        <Menu 
          index={false} 
          collection={this.props.collection} 
          {...props} 
        />

        <main className="main">
          <header className="heading">
            <div className="heading-content">
              <h1 className="heading-title">
                <strong>{collection.name}</strong> in CSS
              </h1>
              <p className="heading-description">Properti-properti CSS yang memungkinkan kamu untuk {collection.description}</p>
            </div>
            <p className="heading-share">
              <strong className="heading-share-label">Share this page</strong>
              <ButtonTwitter url={currentURL} text={`Properti-properti CSS yang memungkinkan kamu untuk ${collection.description}`} />
              <ButtonFacebook url={currentURL} />
            </p>
          </header>

          <section className="properties">
            {props.children}
          </section>
        </main>
      </React.Fragment>
    )
  }
}