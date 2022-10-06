import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import SearchMovie from "./components/SearchMovie";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <div className="App">
        <Router>
            <nav>
                <h1>Welcome to film gallery</h1>
                <MovieForm />
                <div>
                    <Link to="/" >Home</Link>
                    <Link to="/movies" >Movies</Link>
                </div>
            </nav>

          <Routes>
              <Route path="/movies" element={
                  <MovieList />
              } />
              <Route path="/movies/:id" element={
                  <MovieDetails />
              } />
              <Route path="search/:query" element={
                  <SearchMovie />
              } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;