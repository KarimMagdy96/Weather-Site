let myhttp =new XMLHttpRequest();
let weather= document.getElementById('cardContainer')
let city =document.getElementById('city')
let findField=document.getElementById('findField');
let findbtn=document.getElementById('findbtn');
let findsave;
let weatherlist=[];


findbtn.addEventListener('click',wethergeter);
findField.addEventListener('input',wethergeter);
function wethergeter(){
    findsave=findField.value;
    myhttp.open('GET',`http://api.weatherapi.com/v1/current.json?key=2a08ee501f814b1b8fe170617222706&q=${findsave}&aqi=no`);
    myhttp.send();
    myhttp.addEventListener('readystatechange', function(){
    if(myhttp.readyState==4 && myhttp.status==200){
        weatherlist=JSON.parse(myhttp.response);
        displayweather()
    }
    console.log(weatherlist)
})
}
function displayweather(){
    let cartona=``;
    for(let i=0;i<1;i++){
        cartona+=`
        <div class="card card-1">
        <div class="card-footer card-head d-flex justify-content-between">
            <div class=" text-white">friday</div>
            <div class=" text-white">24June</div>
          </div>
          <div id="body">
            <h5 class="card-title text-white pt-4" id="city">${weatherlist.location.name}</h5>
            <div class="card-body d-flex justify-content-between  pt-1   align-items-center">
              <p class="card-text" id="todayWeather">${weatherlist.location.lat}<sup>o</sup></p>
              <img src=${weatherlist.current.condition.icon} class="card-img-top w-25 " alt="...">
            </div>
            <div class="sunny">${weatherlist.current.condition.text}</div>
          </div>
      <div class="card-footer footer d-flex justify-content-start pb-4 ">
        <div class="ficon me-4 text-white">
            <img src="img/icon-wind.png" alt="">
            <div class=" d-inline-block">20%</div>
          </div>
          <div class="ficon me-4 text-white">
            <img src="img/icon-umberella.png" alt="">
            <div class=" d-inline-block">18km/h</div>
          </div>
          <div class="ficon text-white">
            <img src="img/icon-compass.png" alt="">
            <div class=" d-inline-block">East</div>
          </div>
      </div>
    </div>
    <div class="card card-2">
        <div class="card-footer card-head-2">
            <div class="w-100 text-center">Saturday</div>
          </div>
          <div class="card-body text-center">
          <img src=${weatherlist.current.condition.icon}  class="card-img-top w-25" alt="...">
        <h5 class="card-title">${weatherlist.current.feelslike_f}<sup>o</sup></h5>
        <h6 class="card-title">25.2o</h6>
        <h6 class="card-title sunny mt-3">sunny</h6>
      </div>
    </div>
    <div class="card card-3">
        <div class="card-footer card-head-3">
            <div class="w-100 text-center ">Sunday</div>              
        </div>
        <div class="card-body text-center">
          <img src="img/sun.png " class="card-img-top w-25" alt="...">
        <h5 class="card-title">${weatherlist.current.temp_f}</h5>
        <h6 class="card-title">25.2o</h6>
        <h6 class="card-title sunny mt-3">sunny</h6>
        <p class="card-text"></p>
      </div>
    </div>
        `
    }
weather.innerHTML=cartona;
}

// findbtn.addEventListener('click',function(){
//  findsaver=findField.value;
//     console.log(findsaver)
// })