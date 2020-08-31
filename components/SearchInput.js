import {
  highlightQuery,
  initializeMatches,
  navigateMenu,
  cleanMenu
} from '../utils/helpers';

export default class SearchInput extends React.Component {

  componentDidMount() {
    const { item, list } = this.props;

    this.isSearching = false;
    this.menuItems = document.querySelectorAll(item);
    this.menuList = document.querySelector(list);
  }

  onKeyUp(e) {
    const input = e.currentTarget;
    const query = input.value.toLowerCase();

    if (query.length > 0) {
      this.isSearching = true;
      this.menuList.classList.add('is-searching');
      
      Array.prototype.forEach.call(this.menuItems, (el, index) => {
        const propertyName = el.dataset.propertyName;
        
        highlightQuery(el, propertyName, query);
      });
    }else{
      this.isSearching = false;
      this.menuList.classList.remove('is-searching');

      Array.prototype.forEach.call(this.menuItems, function(el) {
        var elName = el.querySelector('.item-name');
        elName.innerHTML = el.dataset.propertyName;
      });
    }
  }

  render() {
    return (
      <div className="menu-search">
        <input onKeyUp={this.onKeyUp.bind(this)} id="menu-search-input" type="search" autoComplete="off" placeholder="Search for a property" />
        <i className="icon is-search"></i>
      </div>
    );
  }
}