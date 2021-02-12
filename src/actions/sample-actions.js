import axios from "axios";

export const getComic = () => async dispatch => {
  dispatch({
    type: "FETCH_COMIC"
  });

  try {
    const res = await axios.get("/info.0.json");
    dispatch({
      type: "FETCH_COMIC_COMPLETED",
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: "FETCH_COMIC_ERROR",
      payload: e
    });
  }
};

export const toggle = () => {
  return {
    type: "TOGGLE"
  };
};
