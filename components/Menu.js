import MenuList from './MenuList';
import ButtonFacebook from './ButtonFacebook';
import ButtonTwitter from './ButtonTwitter';
import SearchInput from './SearchInput';
import Link from 'next/link';
const collections = require('../data/collections.json');

export default class Menu extends React.Component {
  componentDidMount() {
    const menuListUl = document.querySelector('#menu-list-ul');
    const menuListUlHeight = menuListUl.clientHeight;
    const menutItemSelected = document.querySelector('.menu-item.is-selected');
    const menutItemSelectedTop = menutItemSelected && menutItemSelected.offsetTop;

    if(menutItemSelectedTop > menuListUlHeight)
      menuListUl.scrollTo(0, menutItemSelectedTop - (menuListUlHeight / 2));
  }

  mobileMenuOpen() {
    const menuNav = document.getElementById('menu-nav');
    menuNav.classList.add('is-active');
  }

  mobileMenuClose() {
    const menuNav = document.getElementById('menu-nav');
    menuNav.classList.remove('is-active');
  }

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <aside className="menu">
          <Link href="/">
            <a id="logo" className="menu-logo">
              <img src="/images/css-reference-logo.png" alt="logo" />
            </a>
          </Link>
          <nav className="menu-collections">
            <ul>
              {collections.map(collection => (
                <li key={collection.name}>
                  <Link href={`/collection/[collection]`} as={`/collection/${collection.slug}`}>
                    <a className={`menu-collection-link${ props.collection == collection.slug ? ' menu-collection-link--active' : ''}`}>{collection.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        {/* is page index or not? */}
          {!props.index &&
            <nav id="menu-nav" className="menu-nav">
              <SearchInput
                item=".menu-item"
                list="#menu-list"
              />
              <div id="menu-list" className="menu-list">
                <ul id="menu-list-ul" className="menu-list-ul">
                  <MenuList
                    of={props.collection ?? false}
                  />
                </ul>
                <i id="menu-shadow-top" className="menu-list-shadow is-top"></i>
                <i id="menu-shadow-bottom" className="menu-list-shadow is-bottom"></i>
              </div>
              <a onClick={this.mobileMenuClose.bind(this)} id="menu-nav-close" className="menu-close">
                <i className="icon is-close"></i>
                <strong>Close</strong>
              </a>
            </nav>
          }
        </aside>

        <footer className="footer">
          <p className="footer-title">
            <strong>{process.env.site.subtitle}</strong> <small>Dibuat oleh <a href="https://jgthms.com">@jgthms</a>. Ditulis ulang dalam bahasa Indonesia oleh <a href="https://twitter.com/mhdnauvalazhar">@mhdnauvalazhar</a></small>
          </p>
          <p className="footer-share footer-share--social">
            <strong className="footer-share-label">Bagikan</strong>
            <ButtonTwitter />
            <ButtonFacebook />
            <a onClick={this.mobileMenuOpen.bind(this)} id="menu-nav-open" className="footer-share-nav">Menu</a>
          </p>
          <div className="footer-facebook">
            <iframe className="footer-iframe" data-src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcssreference%2F&width=100&layout=button_count&action=like&size=small&show_faces=false&share=false&height=20&appId=1212191075486670" width="100" height="20" scrolling="no" frameBorder="0" allowtransparency="true"></iframe>
          </div>
          <div className="footer-github">
            <iframe className="footer-iframe" data-src="https://ghbtns.com/github-btn.html?user=jgthms&repo=css-reference&type=star&count=true" frameBorder="0" scrolling="0" width="110px" height="20px"></iframe>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}