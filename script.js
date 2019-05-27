/*var ctx = document.getElementById("myChart").getContext('2d');

// Define the data 
var data = [22006299,	15834918,	14919501,	14797756,	14433147,	13524139,	11877109,	11862073,	11779606, 10452000]; // Add data values to array

var labels = ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"]; // Add labels to array
// End Defining data*/

/*var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Population', // Name the series
            data: data, // Specify the data values array
            backgroundColor: [ // Specify custom colors
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [ // Add custom color borders
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1 // Specify bar border width
        }]
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});*/

/*var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
        datasets: [{
            label: 'Series 1', // Name the series
            data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});
*/


//<script type="text/javascript">
 //Готовим диаграмму
 function Diagram (a,b,c) {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart (ctx, {
   type: 'line',
   data: {
    labels: [], //Подписи оси x
    datasets: [
     {
      label: 'f(x)', //Метка
      data: [], //Данные
      borderColor: 'blue', //Цвет
      borderWidth: 2, //Толщина линии
      fill: false //Не заполнять под графиком
     }
     //Можно добавить другие графики
    ]
   },
   options: {
    responsive: false, //Вписывать в размер canvas
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
  //Заполняем данными
  for (var x = 0.0; x<=2*Math.PI; x+=Math.PI/10) {
   myChart.data.labels.push(''+x.toFixed(2));
   myChart.data.datasets[0].data.push(f(x).toFixed(2));
  }
  
  //Обновляем
  myChart.update();

  function f(x) { //Вычисление нужной функции
   return a*Math.sin(b*x+c);
  }
 };

$("#par_A").val("1");
$("#par_B").val("1");
$("#par_C").val("0");

 window.addEventListener("load", Diagram(1, 1, 0));

function drawChart(){
  var valueA =parseFloat($("#par_A").val());
  var valueB =parseFloat($("#par_B").val());
  var valueC = parseFloat($("#par_C").val());

 //Ставим загрузку диаграммы на событие загрузки страницы
  window.addEventListener("load", Diagram(valueA, valueB, valueC));
};


//</script>
/*<noscript>
 <div align="center">
  Извините, для работы приложения нужен включённый Javascript
 </div>
</noscript>*/