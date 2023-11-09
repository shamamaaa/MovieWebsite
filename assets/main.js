var row=document.querySelector(".movieCards")


fetch("https://api.tvmaze.com/shows")
.then(response=>response.json())
.then(datas=>{
  datas.forEach(data => {
    row.innerHTML += `
      <a href="/cardDetail" class="movieCard col-6">
        <div class="cardImg">
          <img src="${data.image.medium}" alt="">
        </div>
        <div class="overlay">
          <span>Details...</span>
        </div>
        <div class="cardContent">
          <div class="movieNameAndImdb">
            <h2>${data.name}</h2>
            <p>${data.rating.average}/10</p>
          </div>
          <div class="movieDateTime">
            <p class="date"><strong>Day:</strong> ${data.schedule.days}</p>
            <p class="date"><strong>Time:</strong> ${data.schedule.time}</p>
          </div>
        </div>
      </a>
    `;
  });

    });
    