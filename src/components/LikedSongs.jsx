import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const LikedSongs = () => {
  const dispatch = useDispatch();

  const likedSongs = useSelector((state) => {
    return state.extraFunc.likedSongs;
  });
  const nowPlaying = useSelector((state) => {
    return state.extraFunc.nowPlaying;
  });

  return (
    <div
      style={{ width: "82vw", height: "82vh", overflow: "scroll" }}
      className="text-white p-3"
    >
        <h1>Liked Songs</h1>
        <div>

      {likedSongs.length === 0? <h3>No Liked Songs</h3> : (
        <Row>
          {likedSongs.map((album) => {
            return <AlbumCard key={album.id} album={album} />;
          })}
        </Row>
      )}
        </div>
    </div>
  );
};

export default LikedSongs;
