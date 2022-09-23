import { GET_SONGS, GET_SONGS_ERROR, GET_SONGS_LOADING } from "../actions/loadSongs";

const initialState = {
    songs: [],
    errorSongs: false,
    loadingSongs: false,
}

const SongsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SONGS:
        return {
          ...state,
          songs: action.payload,
        };
  
      case GET_SONGS_ERROR:
        return {
          ...state,
          errorSongs: true,
        };
  
      case GET_SONGS_LOADING:
        return {
          ...state,
          loadingSongs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default SongsReducer;