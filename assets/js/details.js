let movieDetail = document.querySelector(".movie-detail");
let apiurl = "https://api.tvmaze.com";
let id = window.location.search.slice(4);

async function GetMoviesById(id) {
  let globalData;
  await axios.get(apiurl + `/shows/${id}`).then((result) => {
    globalData = result.data;
  });
  return globalData;
}

GetMoviesData();

async function GetMoviesData() {
  let movie = await GetMoviesById(id);
  movieDetail.innerHTML = `
      <div class="col-8 mt-5">
      <div class="cards d-flex">
        <div class="left-part"> 
          <div class="image-wrapper">
            <img src="${movie.image.medium}" alt="">
          </div>

          <div class="features">
          <a href="youtube.com">
          <button>
          Imdb ${movie.rating.average}
          </button>
          </a>
         </div>
        </div>

        <div class="right-part">
          <h4><strong>${movie.name}</strong></h4>
          <p>${movie.summary}</p>
          <p>Language: ${movie.language}</p>
          <p>Start: ${movie.premiered}</p>
          <p>End: ${movie.ended}</p>
          <p class="movieGenres">Genres: ${movie.genres.join(",")}</p>
        </div>
      </div>
    </div>
  `;
}
