let currentURL = window.location.origin;
// console.log(currentURL)
// var vex = require('vex-js')
// vex.registerPlugin(require('vex-dialog'))

jQuery(document).ready(function() {
let userID;

  $.ajax({
    url:"/api/user",
    method: "GET"
  }).then(function(result) {
    userID = result[0].id;
  });


  jQuery("#vmap").vectorMap({
    map: "world_en",
    backgroundColor: "#a5bfdd",
    borderColor: "#818181",
    borderOpacity: 0.25,
    borderWidth: 1,
    backgroundColor: "#333333",
    color: "#AD974F",
    enableZoom: false,
    hoverColor: "#8E793E",
    hoverOpacity: 0.7,
    normalizeFunction: "polynomial",
    scaleColors: ["#C8EEFF", "#006491"],
    selectedColor: "#8E793E",
    selectedRegions: null,
    showTooltip: true,
    onRegionClick: function(element, code, region) {
      event.preventDefault();
      this.blur();
      // var message = 'You clicked "'
      // + region
      // + '" which has the code: '
      // + code.toUpperCase()

      // alert(message)

      $.ajax({
        url: currentURL + "/costs/countryinfo/" + code,
        method: "GET"
      }).then(function(result) {
        console.log(result);
        let name = result.data.info.name;
        let cost = [];
        $(".travelInfo").hide();
        $('input[name="datefilter"]').empty();
        $(".dateLeave").empty();
        $(".dailyIncrement").empty();
        $(".Country").empty();
        $("#Budget").empty();

        result.data.costs.forEach(element => {
          cost.push(element.value_midrange);
        });
        console.log(name);
        console.log(cost);
        $(".infoName").html(name);
        for (i = 0; i < cost.length; i++) {
          $(".cat" + i).html("$" + Math.round(cost[i]));
        }
        $("#ex1").modal({
          show: "fade",
          fadeDelay: 0.8,
          escapeClose: true,
          showClose: false,
          closeClass: "icon-remove",
          closeText: "x"
        });
        $("#addtrip").click(function() {
          $(".formModal").modal({
            show: "fade",
            fadeDelay: 0.8,
            escapeClose: true,
            showClose: false,
            closeClass: "icon-remove",
            closeText: "x"
          });
        });
        $('input[name="datefilter"]').on("apply.daterangepicker", function(
          ev,
          picker
        ) {
          $(this).val(
            picker.startDate.format("MM/DD/YYYY") +
              " - " +
              picker.endDate.format("MM/DD/YYYY")
          );

          let future = moment(picker.endDate);
          let start = moment(picker.startDate);
          let d = future.diff(start, "days");
          let totalCost = Math.round(d * cost[12]);
          let dateCurrent = moment();
          let a = start.diff(dateCurrent, "days");
          let dailyIncrement = Math.round((d * cost[12]) / a);

          // append to html
          $(".travelDiv").html(
            "Starting " +
              start.format("MM/DD/YYYY") +
              ", $" +
              Math.round(dailyIncrement) +
              " will be contributed towards your trip to " +
              name +
              ", for " + d + " days."
          );
          $(".dateLeave").html("Departure: " + start.format("MM/DD/YYYY"));
          $(".dailyIncrement").html(
            "Daily contribution: $" + Math.round(dailyIncrement)
          );
          $(".Country").html("Country: " + name);
          $("#Budget").html("Total cost: $" + Math.round(totalCost));
          $(".travelInfo").show();

          $(".formMOdal").animate(
            {
              scrollTop: $("#confirmBtn").offset().top
            },
            "slow"
          );

          $("#confirmBtn").on("click", function() {
            $(".travelInfo").toggle();
            $(".tripModal").modal({
              show: "fade",
              fadeDelay: 0.8,
              escapeClose: true,
              showClose: false,
              closeClass: "icon-remove",
              closeText: "x"
            });
            let Bank = {
              country: name,
              balance: 0,
              datestay: d,
              dateleave: start.format("MM/DD/YYYY"),
              totalcost: totalCost,
              dailyincrement: dailyIncrement,
              userId: userID
            }; //to do post to db
            $.ajax({
              method: "POST",
              url: "/api/bank",
              data: Bank
            })
              // .then(function() {
              //   // window.location.href = "/api/bank";
              // });
          
          });

          

          
          
        });
      });
    }
  });
});
