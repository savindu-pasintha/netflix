import logo from './logo.svg';
import './App.css';
import Row from "./Component/Row";
import Request from "./TMDB_API/Request";
import Search from "./Component/Search";

function App() {
  return (
    <div className="App">
      <div class="title_row">
        <div className="col"> <h1 id="title">Netflix</h1></div>
        <div className="col"> <div className="search_row">
        <p style={{color:"white"}}>netfix clone with me ! contact : savindupasingtha@gmail.com +94768755787</p>
          {/* <Search className="search" /> */}</div> </div>
      </div>
      <header className="App-header">
         <div className="button_add">
            <button type="button" className="button">Play</button> 
            <button type="button" className="button">My List</button>
        </div>
      </header>
      <div className="content">
      <Row title="NETFLIX ORIGINALS"
        fetchUrl={Request.fetchNetflixOriginals}
      />
      <Row title="Trending Now"
        fetchUrl={Request.fetchTrending}
      />
      <Row title="Top Rated"
        fetchUrl={Request.fetchTopRated}
      />
        <Row title="Action Movies"
        fetchUrl={Request.fetchActionMovies}
      />
       <Row title="Action Movies"
        fetchUrl={Request.fetchHoor}
      />
       <Row title="Commady Movies"
        fetchUrl={Request.fetchCommedy}
      />
       <Row title="Romantic Movies"
        fetchUrl={Request.fetchActionMovies}
      />
       <Row title="Documentory Movies"
        fetchUrl={Request.fetchDocumentary}
      />
      </div>
    </div>
  );
}

export default App;
