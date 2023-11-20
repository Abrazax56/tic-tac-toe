const search = document.querySelector('.search-button');
search.addEventListener('click', async function () {
  const inputKeyword = document.querySelector('.input-keyword');
  try {
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch('https://www.omdbapi.com/?apikey=d243060c&s=' + keyword)
  .then(response => {
    if(!response.ok){
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(response => {
    if(response.Response === "False")
    throw new Error(response.Error);
    return response.Search;
  });
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => cards += showCards(movie));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

document.addEventListener('click', async function(e) {
  if(e.target.classList.contains('modal-detail-btn')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch('https://www.omdbapi.com/?apikey=d243060c&i=' + imdbid)
        .then(response => response.json())
        .then(movie => movie);
}

function updateUIDetail(movie) {
  const mofie = showDetail(movie);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = mofie;
}

function showCards(movie) {
  return `<div class="col-md-4 my-3">
          <div class="card">
            <img src="${movie.Poster}" class="card-img-top">
            <div class="card-body">
               <h5 class="card-title">${movie.Title}</h5>
               <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
               <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid=${movie.imdbID}>Show detail</a>
            </div>
          </div>
        </div>`;
}

function showDetail(movie) {
  return `<div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <img src="${movie.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                    <li class="list-group-item"><strong>Director :</strong>${movie.Director}</li>
                    <li class="list-group-item"><strong>Actors :</strong>${movie.Actors}</li>
                    <li class="list-group-item"><strong>Writer :</strong>${movie.Writer}</li>
                    <li class="list-group-item"><strong>Plot :</strong><br>${movie.Plot}</li>
                  </ul>
                </div>
              </div>
            </div>`;
}
