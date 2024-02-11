export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const heroesDeleting = (id) => {
  return {
    type: "HEROES_DELETING",
    payload: id,
  };
};

export const heroesDeleted = (id) => {
  return {
    type: "HEROES_DELETED",
    payload: id,
  };
};

export const heroesDeletingError = (id) => {
  return {
    type: "HEROES_DELETING_ERROR",
    payload: id,
  };
};

export const heroesCreating = (name) => {
  return {
    type: "HEROES_CREATING",
    payload: name,
  };
};

export const heroesCreated = (hero) => {
  return {
    type: "HEROES_CREATED",
    payload: hero,
  };
};

export const heroesCreatingError = (name) => {
  return {
    type: "HEROES_CREATING_ERROR",
    payload: name,
  };
};
