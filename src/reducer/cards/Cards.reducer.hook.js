function useCardsReducer() {
  function reducerFunction(state, { type, payload }) {
    switch (type) {
      case "CLEAR":
        return { ...state, requestsMade: 0, searchTechnique: "No Technique" };
      case "SEARCH_TECHNIQUE":
        return { ...state, searchTechnique: payload };
      case "INCREMENT_REQUESTS_MADE":
        return { ...state, requestsMade: state.requestsMade + 1 };
      case "UPDATE_CARDS":
        return { ...state, cards: payload };
      case "UPDATE_STATUS":
        return { ...state, status: payload };
      default:
        throw new Error("default case: unexpected in cards context reducer");
    }
  }

  return {
    reducerFunction,
  };
}

export { useCardsReducer };
