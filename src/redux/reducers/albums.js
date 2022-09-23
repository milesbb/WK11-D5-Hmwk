import { GET_ALBUMS, GET_ALBUMS_ERROR, GET_ALBUMS_LOADING } from "../actions/loadAlbums";

const initialState = {
    albums: [],
    errorAlbums: false,
    loadingAlbums: false,
}

const AlbumsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALBUMS:
        return {
          ...state,
          albums: action.payload,
        };
  
      case GET_ALBUMS_ERROR:
        return {
          ...state,
          errorAlbums: true,
        };
  
      case GET_ALBUMS_LOADING:
        return {
          ...state,
          loadingAlbums: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default AlbumsReducer;