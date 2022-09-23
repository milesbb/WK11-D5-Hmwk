export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";
export const GET_SONGS_LOADING = "GET_SONGS_LOADING";

export const getSongs = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_SONGS_LOADING,
        payload: true,
      });

      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + query
      );

      if (response.ok) {
        let songs = await response.json();

        dispatch({
          type: GET_SONGS,
          payload: songs,
        });
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_SONGS_ERROR,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_SONGS_ERROR,
      });
    } finally {
      dispatch({
        type: GET_SONGS_LOADING,
        payload: false,
      });
    }
  };
};
