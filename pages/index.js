import Head from 'next/head'
import Finder from '../components/Finder';
import ModalShare from '../components/ModalShare';
import ButtonFacebook from '../components/ButtonFacebook';
import ButtonTwitter from '../components/ButtonTwitter';
import Link from 'next/link';

import { 
  initializeMatches, 
  highlightQuery,
  cleanMenu
} from '../utils/helpers';
const collections = require('../data/collections.json');

export default class Home extends React.Component {
  componentDidMount() {
    require('../utils/main');

    document.querySelector('html').classList.add('is-index');
  }

  componentWillUnmount() {
    document.querySelector('html').classList.remove('is-index');
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{process.env.site.title} - {process.env.site.subtitle}</title>
          <meta name="description" content={process.env.site.description} />
          <meta property="og:url" content={process.env.site.url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={process.env.site.title} />
          <meta property="og:image" content="/images/css-reference-share.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:description" content={process.env.site.description} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@mhdnauvalazhar" />
          <meta name="twitter:creator" content="@mhdnauvalazhar" />
          <meta name="twitter:title" content={process.env.site.title} />
          <meta name="twitter:image" content="/images/css-reference-share.png" />
          <meta name="twitter:description" content={process.env.site.description} />
        </Head>

        <header className="header">
          <div className="container">
            <h1 className="header-figure">
              <img src="/images/css-reference-icon.png" alt={ process.env.title + ' icon'} />
              <img src="/images/css-reference-type.png" alt={ process.env.title + ' type'} />
            </h1>
            <div className="header-content">
              <div className="header-carbon">
                
              </div>
              <div className="header-text">
                <h2 className="header-title">
                  { process.env.subtitle }
                </h2>
                <p className="header-subtitle">
                  <strong>Learn by example</strong>: <a href={ process.env.url}>cssreference.io</a> is a free visual guide to CSS. It features the most popular <strong>properties</strong>, and explains them with illustrated and animated <strong>examples</strong>.
                </p>
                <footer className="header-share">
                  <ButtonTwitter />
                  <ButtonFacebook />
                </footer>
              </div>
            </div>
          </div>
        </header>
        {/*{% include ff.html %}*/}
        <main className="index">
          <nav className="index-collections">
            <strong>Collections:</strong>

            {collections.map(collection => (
              <Link key={collection.name} href={`/collection/[collection]`} as={`/collection/${collection.slug}`}>
                <a>{collection.name}</a>
              </Link>
            ))}
          </nav>
          <div className="container">
            <div className="index-left">
              <Finder />
            </div>
          </div>
        </main>

        <ModalShare />

        <footer className="sisters">
          <div className="sister sister--cssreference container">
            <h4 className="sister-title">
              Situs web asli dari referensi CSS:<br />
              <strong>CSS Reference</strong> 😃
            </h4>
            <a className="sister-banner" href="https://cssreference.io">
              <img src="/images/css-reference-logo.png" alt="CSS Reference logo" />
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
      </React.Fragment>
    )
  }
}
