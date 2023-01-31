var char = document.getElementById('chart')
function makeChart(players) {  
    var sub = players.map(function(d) {
      return d.MATHS;
    });
    var m1 = players.map(function(d) {
      return +d.Math_Avg;
    });
    var m2 = players.map(function(d) {
        return +d.Maths_1;
      });
    var m3 = players.map(function(d) {
        return +d.m3;
    });
    var m4 = players.map(function(d) {
        return +d.m4;
    });
    var m5 = players.map(function(d) {
        return +d.m5;
    });
    var m6 = players.map(function(d) {
        return +d.m6;
    });
    var chart = new Chart('chart', {
        type: "bar",
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        },
        data: {
          labels: sub,
          datasets: [
            {
                backgroundColor: "blue",
                borderColor: "black",
                borderWidth: 2,
              data: m1
            }
          ]
        }
      });
    }
  d3
    .csv("Data.csv")
    .then(makeChart);

// ##########################################################################################################

var char2 = document.getElementById('sci_chart')
    function makeChart2(players) {  
        var sub2 = players.map(function(d) {
          return d.PHYSICS;
        });
        var m1 = players.map(function(d) {
          return +d.Math_Avg;
        });
        var p2 = players.map(function(d) {
            return +d.Physics_Avg;
          });
        var m3 = players.map(function(d) {
            return +d.m3;
        });
        var m4 = players.map(function(d) {
            return +d.m4;
        });
        var m5 = players.map(function(d) {
            return +d.m5;
        });
        var m6 = players.map(function(d) {
            return +d.m6;
        });
        var phy_chart = new Chart('sci_chart', {
            type: "bar",
            options: {
              maintainAspectRatio: false,
              legend: {
                display: false
              }
            },
            data: {
              labels: sub2,
              datasets: [
                {
                    backgroundColor: "blue",
                    borderColor: "black",
                    borderWidth: 2,
                  data: p2
                }
              ]
            }
          });
        }
      d3
        .csv("Data.csv")
        .then(makeChart2);

// #######################################################################################################################

var char3 = document.getElementById('che_chart')
function makeChart3(players) {  
    var sub3 = players.map(function(d) {
      return d.CHEMISTRY;
    });
    var m1 = players.map(function(d) {
      return +d.Math_Avg;
    });
    var p2 = players.map(function(d) {
        return +d.Physics_Avg;
      });
    var c3 = players.map(function(d) {
        return +d.Chemistry_Avg;
    });
    var m4 = players.map(function(d) {
        return +d.m4;
    });
    var m5 = players.map(function(d) {
        return +d.m5;
    });
    var m6 = players.map(function(d) {
        return +d.m6;
    });
    var g = "bar"
    var chem_chart = new Chart('che_chart', {
        type: g,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        },
        data: {
          labels: sub3,
          datasets: [
            {
                backgroundColor: "blue",
                borderColor: "black",
                borderWidth: 2,
              data: c3
            }
          ]
        }
      });
    }
  d3
    .csv("Data.csv")
    .then(makeChart3);

// ######################################################################################################################

var char4 = document.getElementById('avg_chart')
function makeChart4(players) {  
    var sub3 = players.map(function(d) {
      return d.AVGS;
    });
    var m1 = players.map(function(d) {
      return +d.Math_Avg;
    });
    var p2 = players.map(function(d) {
        return +d.Physics_Avg;
      });
    var c3 = players.map(function(d) {
        return +d.Chemistry_Avg;
    });
    var a4 = players.map(function(d) {
        return +d.Avg_Data;
    });
    var m5 = players.map(function(d) {
        return +d.m5;
    });
    var m6 = players.map(function(d) {
        return +d.m6;
    });
    var g = "line"
    var chem_chart = new Chart('avg_chart', {
        type: g,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        },
        data: {
          labels: sub3,
          datasets: [
            {
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "black",
                borderWidth: 2,
              data: a4
            }
          ]
        }
      });
    }
  d3
    .csv("Data.csv")
    .then(makeChart4);
