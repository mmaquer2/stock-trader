
window.onload = function(){
    
    this.baselines()
    this.date()
    this.stock_news();
}

//Simple test function 
function test() {
    var tick = document.getElementById("ticker").value 
    alert(tick)

}


// Date function display on front web page
function date() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    } 
    var today = dd + '/' + mm + '/' + yyyy;
            
    document.getElementById("date").innerHTML = today;
    
     }
//function for market index

async function baselines() {
    //Indexs of the USA Stock market DJI, SPX, NDX
    const url = ('https://api-v2.intrinio.com/indices/stock_market/$DJI/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
    const index = await fetch(url);
    const dji = await index.json();

    const spx_url = ('https://api-v2.intrinio.com/indices/stock_market/$SPX/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
    const spx_data = await fetch(spx_url);
    const spx = await spx_data.json();

    const ndx_url = ('https://api-v2.intrinio.com/indices/stock_market/$NDX/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
    const ndx_data = await fetch(ndx_url);
    const ndx = await ndx_data.json();

    //const bond_url = ('https://api-v2.intrinio.com/indices/stock_market/$VBMDFX/data_point/level/text?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')
    //const bond_data = await fetch(bond_url);
    //const bond = await bond_data.json();

    //console.log(bond)
    //console.log(dji)
    //console.log(spx)

    //% change of stock or index price 

    document.getElementById('SPX').innerHTML = spx;
    document.getElementById('NDX').innerHTML = ndx;
    document.getElementById('DJI').innerHTML = dji;


}

//stock price look up

async function search() {

    //var tick = document.getElementById("ticker").value
    //document.getElementById('company-name').innerHTML = tick;

    const url = "https://simfin.com/api/v1/companies/id/59265/shares/prices?api-key=C3l8ZkjFsFahwrd7V3OA6aoFirCvGKS4";

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

//fundamental analysis data points:
//P - E Ratio
//maarket cap
//revnue
//dividend
 //const alpha_key = ('YIF9NU7FLVJWG46Q');
 async function stock_api() {
    const url = ('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=YIF9NU7FLVJWG46Q');
    const response = await fetch(url);
    const alpha_data = await response.json();  
    //console.log(alpha_data)
}



//Analyst outlooks

//headlines 

async function stock_news() {
    const stock_news_url = ('https://api-v2.intrinio.com/companies/news?api_key=OjRhODk1ZjZkNDkxMzUzNTAwOTc5YjY1ZmE5NjFkMTU5')    
    const response = await fetch(stock_news_url);
    const news_data = await response.json();

    var output = ""
    let chars = news_data.news;
        for(let i =0; i < chars.length;i++){
        //console.log(chars[i])
    //    console.log(chars[i].title)
      //  console.log(chars[i].summary)
      //  console.log(chars[i].publication_date)
       // console.log(chars[i].url)

        output += '<h5>'+ chars[i].title+ '</h5>'+ chars[i].summary + '<br>' +'<a href="'+  chars[i].url + '">' + 'Link' +'</a><hr></hr>'

        

        }

    document.getElementById('stock_news').innerHTML = output; 
}








//Technical Data Section:





//Alternate Data Section: 

    //stocktwits api data 

    //Google Web Mentions/ Searches within certain time ranges



  
