export function initializeMatches($menuItems) {
  var matches = [];

  Array.prototype.forEach.call($menuItems, function($el, index) {
    var propertyName = $el.dataset.propertyName;
    matches.push({
      DOMIndex: index,
      propertyName: propertyName,
    });
  });

  return matches;
}

export function highlightQuery($el, propertyName, query) {
  var queryIndex = propertyName.indexOf(query);
  var $elName = $el.querySelector('.item-name');

  if (queryIndex >= 0) {
    var before = propertyName.substring(0, queryIndex);
    var highlight = '<span class="highlight">' + propertyName.substring(queryIndex, queryIndex + query.length) + '</span>';
    var after = propertyName.substring(queryIndex + query.length);
    $elName.innerHTML = before + highlight + after;
    $el.classList.add('is-highlighted');
    return true;
  } else {
    $elName.innerHTML = propertyName;
    $el.classList.remove('is-highlighted');
    return false;
  }
}

export function cleanMenu($menuItems, highlight, selection) {
  Array.prototype.forEach.call($menuItems, function($el, index) {
    var $elName = $el.querySelector('.item-name');
    if (highlight) {
      $elName.innerHTML = $el.dataset.propertyName;
      $el.classList.remove('is-highlighted');
    }
    if (selection) {
      $el.classList.remove('is-selected');
    }
  });
}

export function navigateMenu($menuItems, matches, currentIndex, increment = true) {
  Array.prototype.forEach.call($menuItems, function($el, index) {
    $el.classList.remove('is-selected');
  });

  if (matches.length < 1) {
    return -1;
  }

  var desiredIndex = increment ? currentIndex + 1 : currentIndex - 1;
  var actualIndex = limitNumber(desiredIndex, -1, matches.length - 1);

  if (actualIndex > -1) {
    var DOMIndex = matches[actualIndex].DOMIndex;
    $menuItems[DOMIndex].classList.add('is-selected');
  }

  return actualIndex;
}

export function limitNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function buildTwitterURL(encodedURL, propertyName) {
  var text = 'Inilah bagaimana properti ' + propertyName + ' bekerja di #CSS';
  var encodedText = encodeURIComponent(text);
  return 'https://twitter.com/intent/tweet?url=' + encodedURL + '&text=' + encodedText;
}
