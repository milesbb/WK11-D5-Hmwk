import { Link } from "react-router-dom";

const PlayListCol = () => {
  return (
    <div
      style={{ background: "black", width: "18vw", height: "100vh" }}
      className="p-3"
    >
      <div className="text-white my-3 mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-spotify"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
        </svg>
        <span className="vertical-align-middle" style={{ fontSize: "1.5rem" }}>
          Spotify
        </span>
      </div>
      <div style={{ color: "gray" }} className="mx-3">
        <div className="my-2">
          <Link className="nav-link" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </svg>

            <span className="m-3">Home</span>
          </Link>
        </div>
        <div className="my-2">
          <Link className="nav-link" to="/Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <span className="m-3">Search</span>
          </Link>
        </div>
        <div className="my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-collection"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
          </svg>
          <span className="m-3">Your Library</span>
        </div>
        <br></br>
        <div className="my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
          </svg>
          <span className="m-3">Create Playlist</span>
        </div>
        <div className="my-2">
        <Link className="nav-link" to="/LikedSongs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bookmark-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
          </svg>
          <span className="m-3">Liked Songs</span>
          </Link>
        </div>
      </div>
      <hr className="text-white" />
      <div style={{ height: "50vh", overflow: "scroll" }}>
        <ul className="" style={{ listStyleType: "none", color: "gray" }}>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
          <li>Test Playlist</li>
        </ul>
      </div>
    </div>
  );
};

export default PlayListCol;
