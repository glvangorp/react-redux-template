const sampleReducer = (
  state = {
    toggled: false,
    fetchingComic: false,
    comic: null,
    fetchingComicError: null
  },
  action
) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        toggled: !state.toggled
      };
    case "FETCH_COMIC":
      return {
        ...state,
        fetchingComic: true
      };
    case "FETCH_COMIC_COMPLETED":
      return {
        ...state,
        fetchingComic: false,
        comic: action.payload
      };
    case "FETCH_COMIC_ERROR":
      return {
        ...state,
        fetchingComic: false,
        fetchingComicError: action.payload
      };
    default:
      return { ...state };
  }
};

export default sampleReducer;
