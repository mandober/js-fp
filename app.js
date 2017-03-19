'use strict';

var beerData = JSON.parse(document.getElementById("beerData").textContent),
    beers = beerData.beers,
    beerTemplate = document.getElementById("tmpl-beer").textContent,
    beerList = document.getElementById("beerList"),
    filters = document.getElementById("filters"),
    filterLinks = filters.querySelectorAll("a"),
    filteredBeers,
    i;
// ============================

function loadBeers(beers) {
  beerList.innerHTML = _.template(beerTemplate)({ beers: beers });
}

function setActiveFilter(active) {
  for (i = 0; i < filterLinks.length; i++) {
    filterLinks[i].classList.remove('btn-active');
  }
  active.classList.add('btn-active');
}

function filterBeers(callback) {
  for (i = 0; i < beers.length; i++) {
    if (callback(beers[i])) {
      filteredBeers.push(beers[i]);
    }
  }
  return filteredBeers;
}

function makeFilter(prop) {
  return function (val) {
    return filterBeers(function (beer) {
      // if val is string
      return beer[prop] === val;
    });
  }
}

var filterByLocale = makeFilter('locale'); // domestic|import
var filterByType = makeFilter('type'); // ale|ipa|lager|stout


// ============================
loadBeers(beers);

filters.addEventListener('click', function (e) {
  e.preventDefault();
  var clicked = e.target;
  var filter = clicked.dataset.filter;
  filteredBeers = [];
  setActiveFilter(clicked);

  switch (filter) {
    case 'all':
      filteredBeers = beers;
      break;
    case 'domestic':
      filteredBeers = filterByLocale('domestic');
      break;
    case 'imports':
      filteredBeers = filterByLocale('import');
      break;
    case 'ale':
      filteredBeers = filterBeers(function (beer) {
        return beer.type == 'ipa' || beer.type == 'ale';
      });
      break;
    case 'lager':
      filteredBeers = filterByType('lager');
      break;
    case 'stout':
      filteredBeers = filterByType('stout');
      break;
  }

  loadBeers(filteredBeers);
});