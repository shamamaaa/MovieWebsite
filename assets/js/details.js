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

async function GetMoviesData() {
  let movie = await GetMoviesById(id);
  console.log(movie);
  movieDetail.innerHTML = `<div class="col-8 mt-5">
            <div class="cards">
            <div class="d-flex">
            <div class="image-wrapper">
            <img src="${movie.image.medium}" alt="">
            </div>
            <div class="middle-part">
            <h4><strong>${movie.name}</strong></h4>
            <p>${movie.summary}</p>
            <p class="movieGenres"><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
            </div>
            <div class="right-part">
            <p><strong>Language:</strong>${movie.language}</p>
            <p><strong>Type:</strong>${movie.type}</p>
            <p><strong>Runtime:</strong>${movie.runtime}</p>
            <p><strong>Network:</strong>${movie.network.name}</p>
            <p><strong>Premiered:</strong> <br>${movie.premiered}</p>
            <p><strong>Ended:</strong> <br>${movie.ended}</p>
            </div>
            </div>
            <div class="features">
            <a href="https://www.imdb.com/title/${movie.externals.imdb}">
            <button class="imdbBtn">
            IMDb ${movie.rating.average}
            </button>
            </a>
            <a href="${movie.officialSite}">
            <button class="visitBtn">Visit official website</button>
                </a>
                </div>
                </div>
                </div>`;
}

GetMoviesData(); 
