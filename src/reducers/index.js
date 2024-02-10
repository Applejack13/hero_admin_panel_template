const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HEROES_DELETING":
      return {
        ...state,
        heroesLoadingStatus: "deleting",
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };

    case "HEROES_DELETED":
      return {
        ...state,
        heroesLoadingStatus: "idle",
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };

    case "HEROES_DELETING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "idle",
      };

    default:
      return state;
  }
};

export default reducer;
