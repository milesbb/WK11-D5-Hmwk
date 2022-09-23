export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ALBUMS_ERROR = "GET_ALBUMS_ERROR";
export const GET_ALBUMS_LOADING = "GET_ALBUMS_LOADING";

export const getAlbums = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ALBUMS_LOADING,
        payload: true,
      });

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );

      if (response.ok) {
        let albums = await response.json();

        dispatch({
          type: GET_ALBUMS,
          payload: albums,
        });
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_ALBUMS_ERROR,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_ALBUMS_ERROR,
      });
    } finally {
      dispatch({
        type: GET_ALBUMS_LOADING,
        payload: false,
      });
    }
  };
};
