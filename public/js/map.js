// let iziModal = require('izimodal');

let object = {
  'status': true,
  'data': {
    'costs': [
      {
        'category_id': '1',
        'value_budget': '44.066821377509',
        'value_midrange': '122.9595291765',
        'value_luxury': '376.69098739016',
        'geonameid': '5128581'
      }
    ],
    'info': {
      'geonameid': '5128581',
      'name': 'New York City',
      'asciiname': 'New York City',
      'latitude': '40.7142691000',
      'longitude': '-74.0059729000',
      'feature_class': 'P',
      'feature_code': 'PPL',
      'country_code': 'US',
      'admin1_code': 'NY',
      'timezone': 'America\/New_York',
      'country_name': 'United States of America',
      'currency_code': 'USD',
      'currency': 'Dollar (United States)',
      'symbol': '$',
      'statename': 'New York',
      'url': 'http:\/\/www.budgetyourtrip.com\/united-states-of-america\/new-york-city'
    }
  }
}

jQuery(document).ready(function () {


  jQuery('#vmap').vectorMap(
    {
      map: 'world_en',
      backgroundColor: '#a5bfdd',
      borderColor: '#818181',
      borderOpacity: 0.25,
      borderWidth: 1,
      backgroundColor: '#333333',
      color: '#AD974F',
      enableZoom: true,
      hoverColor: '#8E793E',
      hoverOpacity: 0.7,
      normalizeFunction: 'polynomial',
      scaleColors: ['#C8EEFF', '#006491'],
      selectedColor: '#8E793E',
      selectedRegions: null,
      showTooltip: true,
      onRegionClick: function (element, code, region) {
        var message = 'You clicked "'
        + region
        + '" which has the code: '
        + code.toUpperCase()

        alert(message);

        $.ajax({ url: currentURL + "/costs/countryhighlights/" + code, method: "GET"})
        .then(function(result){

        })
      }
    })
})
