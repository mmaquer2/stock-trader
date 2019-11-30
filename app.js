



const url = "https://simfin.com/api/v1/companies/id/59265/shares/prices?api-key=C3l8ZkjFsFahwrd7V3OA6aoFirCvGKS4";


function test() {
    var tick = document.getElementById("ticker").value 
    alert(tick)

}

async function search() {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    var i = 0;
    var result = data.priceData[0].closeAdj
    var result2 = data.priceData[4].closeAdj
   // for(i;i<data.length;i++){
      //   
        
   // }
    console.log(result)
    console.log(result2)


    //run graph function
    graph(result,result2)

    
}


 function graph(data1,data2) {

    var a = data1;
    var b = data2;

    var canvas = document.getElementById('myChart')
    var ctx = canvas.getContext("2d");
    
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [a, b],


 }




/*
    window.addEventListener('load', function () {
        
    
    var canvas = document.getElementById('myChart')
    var ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, 150, 75);
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


});

*/
//consenus data



//fundamental analysis data points:
//P - E Ratio

//buy or sell signals from major companys





//alt data

//buy or sell signals from major companys




