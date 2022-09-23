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

function App() {
  return (
    <div>
      <div className="d-flex">
        <PlayListCol />
        <div>
          <LoginHeader />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/:AlbumName" element={<AlbumPage />}></Route>
              <Route path="/:ArtistName" element={<ArtistPage />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <PlayBar />
    </div>
  );
}

export default App;
