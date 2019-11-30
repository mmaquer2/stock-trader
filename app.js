



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

    //loop through the data of the api and push it to the graph function 
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
                label: 'COMPANY NAME HERE',
                data: [a, b],


                     }]

            }

    })

}


     

//consenus data



//fundamental analysis data points:
//P - E Ratio

//buy or sell signals from major companys





//alt data

//stocktwits api data 


function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
  }

