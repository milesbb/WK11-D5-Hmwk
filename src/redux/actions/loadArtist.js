export const GET_ARTISTS = "GET_ARTISTS"
export const GET_ARTISTS_ERROR = "GET_ARTISTS_ERROR"
export const GET_ARTISTS_LOADING = "GET_ARTISTS_LOADING"

export const getArtist = (query) => {
    return async (dispatch, getState) => {
      try {
        dispatch({
          type: GET_ARTISTS_LOADING,
          payload: true,
        });
  
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
        );
  
        if (response.ok) {
          let artist = await response.json();
  
          dispatch({
            type: GET_ARTISTS,
            payload: artist,
          });
        } else {
          console.log("error with initial fetch");
          dispatch({
            type: GET_ARTISTS_ERROR,
          });
        }
      } catch (error) {
        console.log("try catch error:", error);
        dispatch({
          type: GET_ARTISTS_ERROR,
        });
      } finally {
        dispatch({
          type: GET_ARTISTS_LOADING,
          payload: false,
        });
      }
    };
  };