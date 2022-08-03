function openNav() {
  if(window.innerWidth>500){
  if(document.getElementById("main").style.marginLeft=="0px"||document.getElementById("main").style.marginLeft==""){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";

}
else{
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}}
else{
  if(document.getElementById("main").style.marginLeft=="0px"||document.getElementById("main").style.marginLeft==""){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  
  }
  else{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }}
}

// var xValues = [100,200,300,400,500,600,700,800,900,1000];

// new Chart("myChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{ 
//       data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
//       borderColor: "red",
//       fill: false
//     }, { 
//       data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
//       borderColor: "green",
//       fill: false
//     }, { 
//       data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
//       borderColor: "blue",
//       fill: false
//     }]
//   },
//   options:
//   {
//     legend: {display: false}
//   }
// });


//donut


// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 15];
// var barColors = [
//   "#b91d47",
//   "#00aba9",
//   "#2b5797",
//   "#e8c3b9",
//   "#1e7145"
// ];

// new Chart("doughnut", {
//   type: "doughnut",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "World Wide Wine Production 2018"
//     }
//   }
// });

//donut


var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    labels: ["France", "Italy", "Yellow",  "Italy"],
    datasets: [{
      data: [4200,3970, 4260,  3970],
      backgroundColor: ["#80E2FF", "#F49FA8", "#FFDF94",  "#B5B3FB"],
      hoverBackgroundColor: ["#4ecdf3", "#f47c88", "#f7ca63", "#8784f3"]
    }]
  },
    options: {
      responsive: true,
      legend: {labels: {
        usePointStyle: true,
        boxWidth: 6,
      },
      position: "bottom"}
      
    }
  }
);


//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "My First dataset",
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgb(176,234,255,.6)',
    ],
    borderColor: [
      'rgb(176,234,255,1)',
    ],
    borderWidth: 1
  },
  {
    label: "My Second dataset",
    data: [28, 48, 40, 19, 86, 27, 90],
    backgroundColor: [
      'rgb(181,179,251,.5)',
    ],
    borderColor: [
      'rgb(181,179,251,1)',
    ],
    borderWidth: 1
  }
  ]
},
options: {
  responsive: true,
  legend: {labels: {
    usePointStyle: true,
    boxWidth: 6,
  },
  position: "bottom"}
}
});

// plotOptions: {
//   area: {
//     fillColor: {
//       linearGradient: {
//         x1: 0,
//         y1: 0,
//         x2: 0,
//         y2: 1
//       },
//       stops: [
//         [0, Highcharts.getOptions().colors[0]],
//         [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//       ]
//     },

// 
// $(document).ready(function(){
//   $('.all').on('click',function(){
//       $('.dropdown').toggle();
//       document.getElementById("drop_down_arrow").style.transform = "rotate(-180deg)";
//       document.getElementById("notification_dropdown").style.display ="none";
//   })
//   $('.notification_navtag').on('click',function(){
//     $('.notification_dropdown').toggle();
//     document.getElementsById("dropdown").style.display="none";
// })
// });


function notification_drop(){
  document.getElementById("dropdown").style.display="none";
  if(document.getElementById("noti").style.display=="none"|| document.getElementById("noti").style.display=="")
  {
    
    document.getElementById("noti").style.display="block";
  }
  else{
    document.getElementById("noti").style.display="none";
  }
}
function dropdow(){
  document.getElementById("noti").style.display="none";
  if(document.getElementById("dropdown").style.display=="none"|| document.getElementById("dropdown").style.display=="")
  {
    
    document.getElementById("dropdown").style.display="block";
  }
  else{
    document.getElementById("dropdown").style.display="none";
  }
}

