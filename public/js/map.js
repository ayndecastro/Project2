let currentURL = window.location.origin
console.log(currentURL)

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
      enableZoom: false,
      hoverColor: '#8E793E',
      hoverOpacity: 0.7,
      normalizeFunction: 'polynomial',
      scaleColors: ['#C8EEFF', '#006491'],
      selectedColor: '#8E793E',
      selectedRegions: null,
      showTooltip: true,
      onRegionClick: function (element, code, region) {
        event.preventDefault()
        this.blur()
        // var message = 'You clicked "'
        // + region
        // + '" which has the code: '
        // + code.toUpperCase()

        // alert(message)

        $.ajax({ url: currentURL + '/costs/countryinfo/' + code, method: 'GET'})
          .then(function (result) {
            console.log(result)
            let name = result.data.info.name
            let cost = []
            result.data.costs.forEach(element => {
              cost.push(element.value_midrange)
            })
            console.log(name)
            console.log(cost)
            $('.infoName').html(name)
            for (i = 0; i < cost.length; i++) {
              $('.cat' + i).html(Math.round(cost[i]))
              $("#ex1").modal({ show: 'fade' });
              
            }
          }
        )
      }
    })
})
