
 function Diagram (a1,b1,c1,a2,b2,c2) {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart (ctx, {
   type: 'line',
   data: {
    labels: [], 
    datasets: [
     {
      label: 'sin(x)', 
      data: [], 
      borderColor: 'blue', 
      borderWidth: 2,
      fill: false 
     },
     
     {
      label: 'cos(x)', 
      data: [], 
      borderColor: 'red', 
      borderWidth: 2, 
      fill: false 
     }
    ]
   },
   options: {
    responsive: false, 
    scales: {
     xAxes: [{
      display: true
     }],
     yAxes: [{
      display: true
     }]
    }
   }
  });
  
  for (var x = 0.0; x<=2*Math.PI; x+=Math.PI/10) {
   myChart.data.labels.push(''+x.toFixed(2));
   myChart.data.datasets[0].data.push(fsin(x).toFixed(2));
   myChart.data.datasets[1].data.push(fcos(x).toFixed(2));
  };  
  
 
  myChart.update();

  function fsin(x) { 
   return a1*Math.sin(b1*x+c1);
  }

  function fcos(x) { 
   return a2*Math.cos(b2*x+c2);
  }

 };

$("#sin_A").val("1");
$("#sin_B").val("1");
$("#sin_C").val("0");

$("#cos_A").val("1");
$("#cos_B").val("1");
$("#cos_C").val("0");
 
 window.addEventListener("load", Diagram(1, 1, 0, 1, 1, 0));

function drawChart(){
  var valueA1 =parseFloat($("#sin_A").val());
  var valueB1 =parseFloat($("#sin_B").val());
  var valueC1 =parseFloat($("#sin_C").val());
  var valueA2 =parseFloat($("#cos_A").val());
  var valueB2 =parseFloat($("#cos_B").val());
  var valueC2 =parseFloat($("#cos_C").val());
 
  Diagram(valueA1, valueB1, valueC1, valueA2, valueB2, valueC2);
};


