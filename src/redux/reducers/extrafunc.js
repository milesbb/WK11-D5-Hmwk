export const LIKE_SONG = "LIKE_SONG";
export const UNLIKE_SONG = "UNLIKE_SONG";
export const PLAY_SONG = "PLAY_SONG";

const initialState = {
  nowPlaying: "",
  isPlaying: false,
  likedSongs: [],
};

const ExtraFuncReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SONG:
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };
    case UNLIKE_SONG:
      return {
        ...state,
        likedSongs: [
          ...state.likedSongs.slice(0, action.payload),
          ...state.likedSongs.slice(action.payload + 1),
        ],
      };
    case PLAY_SONG:
      return {
        ...state,
        nowPlaying: action.payload,
        isPlaying: true,
      };
    default:
      return state;
  }
};

export default ExtraFuncReducer;
