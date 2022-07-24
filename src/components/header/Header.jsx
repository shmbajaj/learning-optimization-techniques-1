import { useState, useRef, useEffect } from "react";
import { useCardsContext } from "context";

function Header() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const searchInputRef = useRef(null);
  const { filterCards, requestsMade, searchTechnique, dispatch } =
    useCardsContext();

  useEffect(() => {
    if (showSearchBox) {
      searchInputRef.current.focus();
    }else{
      dispatch({type:"CLEAR"});
    }
  }, [showSearchBox]);

  return (
    <header className="grid place-items-center grid-cols-2 grid-rows-2 sticky top-0 px-8 py-4 bg-neutral-800 border-solid border-b-4 border-black">
      <span>Header</span>

      <button
        onClick={() => {
          setShowSearchBox((p) => !p);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {showSearchBox && (
        <input
          type="text"
          className="w-full bg-neutral-800 outline-none border-b-2 border-solid border-white focus:border-b-2 active:border-b-2 col-start-1 col-end-3 text-center"
          required
          onChange={(e) => {
            filterCards(e.target.value, requestsMade);
          }}
          ref={searchInputRef}
        />
      )}
      {showSearchBox && (
        <div className="w-full flex justify-evenly items-center">
          <fieldset>
            <figcaption>Select either of the options:</figcaption>
            <label
              htmlFor="debouncing"
            >
              <input
                type="radio"
                name="betterFilter"
                value={"debouncing"}
                id="debouncing"
                checked={searchTechnique === "debouncing"}
                onChange={(e) =>
                  dispatch({
                    type: "SEARCH_TECHNIQUE",
                    payload: e.target.value,
                  })
                }
              />
              debouncing
            </label>
            <label
              htmlFor="throttling"
            >
              <input
                type="radio"
                name="betterFilter"
                value={"throttling"}
                id="throttling"
                checked={searchTechnique === "throttling"}
                onChange={(e) =>
                  dispatch({
                    type: "SEARCH_TECHNIQUE",
                    payload: e.target.value,
                  })
                }
              />
              throttling
            </label>
          </fieldset>
          <p>
            Requests made:{" "}
            <span className="font-black text-orange-600">{requestsMade}</span>{" "}
          </p>
          <p>
            Search Technique Using:{" "}
            <span className="font-black text-orange-600">
              {searchTechnique}
            </span>
          </p>
          <button
            className="bg-gray-400 border-2 border-solid  text-neutral-900 px-2 py-1"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
      )}
    </header>
  );
}

export { Header };
