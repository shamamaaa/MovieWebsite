var row=document.querySelector(".movieCards")
var loadbtn=document.getElementById("load")
var searchBox= document.getElementById("searchbox")
var limit = 15;


const getMovies=()=>{

  fetch("https://api.tvmaze.com/shows")
  .then(response=>response.json())
  .then(datas=>{
    row.innerHTML=''
    for (let i = 0; i < limit; i++) {
      const element = datas[i];
      row.innerHTML+= `
      <a href="details.html?id=${element.id}" class="movieCard col-3">
      <div class="cardImg">
      <img src="${element.image.medium}" alt="">
      </div>
      <div class="overlay">
      <span>Details...</span>
      </div>
      <div class="cardContent">
      <div class="movieNameAndImdb">
      <h2>${element.name}</h2>
      <p>${element.rating.average}/10</p>
      </div>
      <div class="movieDateTime">
      <p class="date"><strong>Day:</strong> ${element.schedule.days}</p>
      <p class="date"><strong>Time:</strong> ${element.schedule.time}</p>
      </div>
      </div>
      </a>
      `
    }
    
  });
}
getMovies()

loadbtn.addEventListener("click", function() {
  limit += 10;
  getMovies()
  
});


searchBox.addEventListener("input", (e) => {
  e.preventDefault();
   
  if (searchBox.value.length==0) {
    getMovies()
  } 
  else {   
    fetch("https://api.tvmaze.com/shows")
    .then((response)=> response.json())
    .then((data)=>{
      let foundArr = data.filter((item)=>
      item.name
      .toLowerCase()
      .trim()
      .includes(searchBox.value.trim().toLowerCase())
      );
      row.innerHTML= ""
      foundArr.forEach((item)=>{
        row.innerHTML += `
        <a href="details.html?id=${item.id}" class="movieCard col-3">
        <div class="cardImg">
        <img src="${item.image.medium}" alt="">
        </div>
        <div class="overlay">
        <span>Details...</span>
        </div>
        <div class="cardContent">
        <div class="movieNameAndImdb">
        <h2>${item.name}</h2>
        <p>${item.rating.average}/10</p>
        </div>
        <div class="movieDateTime">
        <p class="date"><strong>Day:</strong> ${item.schedule.days}</p>
        <p class="date"><strong>Time:</strong> ${item.schedule.time}</p>
        </div>
        </div>
        </a>
        `;
      })
    })
  }
  })
  
  