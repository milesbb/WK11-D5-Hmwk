import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import PlayListCol from "./components/PlayListCol";
import PlayBar from "./components/Playbar";
import LoginHeader from "./components/LoginHeader";
import SearchResults from "./components/SearchResults";
import LikedSongs from "./components/LikedSongs";

function App() {
  return (
    <div>
      <div className="d-flex">
      <BrowserRouter>
        <PlayListCol />
        <div>
          <LoginHeader />
          
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/:AlbumId" element={<AlbumPage />}></Route>
              <Route path="/:ArtistName" element={<ArtistPage />}></Route>
              <Route path="/Search" element={<SearchResults />}></Route>
              <Route path="/LikedSongs" element={<LikedSongs />}></Route>
            </Routes>
          
        </div>
      </BrowserRouter>
      </div>
      <PlayBar />
    </div>
  );
}

export default App;
