import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LIKE_SONG, PLAY_SONG, UNLIKE_SONG } from "../redux/reducers/extrafunc";

const AlbumCard = ({ album }) => {
  const dispatch = useDispatch();

  const likedSongs = useSelector((state) => {
    return state.extraFunc.likedSongs;
  });
  const nowPlaying = useSelector((state) => {
    return state.extraFunc.nowPlaying;
  });

  return (
    <Card style={{ width: "12rem", background: "gray" }} className="m-2 p-0">
      <Card.Img
        variant="top"
        style={{ width: "100%" }}
        src={album.album.cover_big}
      />
      <Card.Body>
        <Card.Title>{album.title}</Card.Title>
        <Card.Text>{album.artist.name}</Card.Text>
        {nowPlaying.album === album ? (
          <Button
            onClick={() => {
              dispatch({
                type: PLAY_SONG,
                payload: { album },
              });
            }}
            variant="success"
            style={{ borderRadius: "50px" }}
            className="mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pause-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: PLAY_SONG,
                payload: { album },
              });
            }}
            variant="success"
            style={{ borderRadius: "50px" }}
            className="mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          </Button>
        )}

        {likedSongs.includes(album) ? (
          <Button
            onClick={() => {
              dispatch({
                type: UNLIKE_SONG,
                payload: likedSongs.indexOf(album),
              });
            }}
            variant="danger"
            style={{ borderRadius: "50px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: LIKE_SONG,
                payload: album,
              });
            }}
            variant="success"
            style={{ borderRadius: "50px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
