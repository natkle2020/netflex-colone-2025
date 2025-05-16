const API_KEY  =process.env.REACT_APP_API_KEY;
const request ={ 
fetchtrending:` /trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixoriginals: `/discover/tv?api
-key=${API_KEY}&with_network=213`,
fetchTopRatedMovies:`movies/top_rated?api_key=${API_KEY}&language=en-US`,

fetchActionMovies: `/discover/movies?api
-key=${API_KEY}&with_generes=28`,
fetchComedyMovies: `/discover/movies?api
-key=${API_KEY}&with_generes=35`,
fetchHorrorMovies: `/discover/movies?api
-key=${API_KEY}&with_generes=27`,
fetchRomanticMovies: `/discover/movies?api
-key=${API_KEY}&with_generes=10749`,
fetchDocumenttariesMovies: `/discover/movies?api
-key=${API_KEY}&with_generes=99`,

fetchTvshow: `tv/popular?api_key=${API_KEY}&lunguage=en-US&page=1`
}


export default request;
// fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=063e790eaf3698fa8957890edb065601')
//   .then(res => res.json())
//   .then(data => {
//     data.results.forEach(movie => {
//       console.log(movie.title, movie.release_date);
//     });
//   });
