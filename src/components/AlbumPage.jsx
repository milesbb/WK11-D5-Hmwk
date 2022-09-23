import { useEffect } from "react";
import { Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSongs } from "../redux/actions/loadSongs";

const AlbumPage = () => {
    const dispatch = useDispatch();
  const songs = useSelector((state) => {
    return state.songs.songs.data;
  });
  const loading = useSelector((state) => {
    return state.songs.errorSongs;
  });
  const errorOccurred = useSelector((state) => {
    return state.albums.loadingSongs;
  });
  const params = useParams();
  console.log(songs);
  useEffect(() => {
    dispatch(getSongs(params.albumId));
  }, []);
    return (
        <div style={{ width: "82vw", height: "82vh", overflow: "scroll" }}
        className="text-white p-3">
            <div className="d-flex">
                <Image />
            </div>
        </div>
    )
}

export default AlbumPage