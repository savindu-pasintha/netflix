const APIKEY = "be81f71bff803ea3ed0cceb7d6be4eb5";
//https://api.themoviedb.org/3/m
const Request = {
    fetchTrending:'trending/all/week?api_key='+APIKEY+'&language=en-US',
    fetchNetflixOriginals:'/discover/tv?api_key='+APIKEY+'&with_network=213',
    fetchTopRated:'discover/movie?api_key='+APIKEY+'&language=en-US',
    fetchActionMovies:'discover/movie?api_key='+APIKEY+'&with_generes=27',
    fetchCommedy:'discover/movie?api_key='+APIKEY+'&with_generes=28',
    fetchHoor:'discover/movie?api_key='+APIKEY+'&with_generes=35',
    fetchRomantic:'discover/movie?api_key='+APIKEY+'&with_generes=10749',
    fetchDocumentary:'discover/movie?api_key='+APIKEY+'&with_generes=99',
    
}

export default Request;