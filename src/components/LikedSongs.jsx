import { useDispatch, useSelector } from "react-redux";

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
    ></div>
  );
};

export default LikedSongs;
