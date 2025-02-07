import "./css/App.css";
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext"
import NavBar from "./components/NavBar";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <MovieProvider>
    <main className="main-content">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/watchlist" element={<WatchList />}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App;
