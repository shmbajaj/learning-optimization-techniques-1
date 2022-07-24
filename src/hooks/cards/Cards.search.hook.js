function useCardsSearchTechnique(cards, dispatch) {
  
  function filterCards(query, dispatch) {
    dispatch({ type: "INCREMENT_REQUESTS_MADE" });
    if (query.length === 0 || query.replaceAll(" ", "").length === 0) {
      dispatch({ type: "UPDATE_CARDS", payload: cards });
    } else {
      const fc = cards.filter((card) =>
        card.author.toLowerCase().includes(query.toLowerCase())
      );
      dispatch({ type: "UPDATE_CARDS", payload: fc });
    }
  }

  function filterCardsDebouncing(fn, delay) {
    let timerId = null;
    return function () {
      const context = this;
      const args = arguments;
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      timerId = setTimeout(() => {
        fn.apply(context, [args[0], dispatch]);
      }, delay);
    };
  }

  function filterCardsThrottling(fn, delay) {
    let isFunctionCallable = true;
    return function () {
      let context = this;
      let args = arguments;
      if (isFunctionCallable) {
        fn.apply(context, [args[0], dispatch]);
        isFunctionCallable = false;
        setTimeout(() => {
          isFunctionCallable = true;
        }, delay);
      }
    };
  }

  function getSearchFunction(searchTechnique) {
    if (searchTechnique === "debouncing") {
      return filterCardsDebouncing(filterCards, 300);
    } else if (searchTechnique === "throttling") {
      return filterCardsThrottling(filterCards, 300);
    } else {
      return function () {
        filterCards.apply(this, [arguments[0], dispatch]);
      };
    }
  }

  return { getSearchFunction };
}

export { useCardsSearchTechnique };
