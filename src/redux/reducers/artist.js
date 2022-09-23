import { GET_ARTISTS, GET_ARTISTS_ERROR, GET_ARTISTS_LOADING } from "../actions/loadArtist";


const initialState = {
    artist: [],
    errorArtist: false,
    loadingArtist: false,
}

const ArtistReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ARTISTS:
        return {
          ...state,
          artist: action.payload,
        };
  
      case GET_ARTISTS_ERROR:
        return {
          ...state,
          errorArtist: true,
        };
  
      case GET_ARTISTS_LOADING:
        return {
          ...state,
          loadingArtist: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ArtistReducer;