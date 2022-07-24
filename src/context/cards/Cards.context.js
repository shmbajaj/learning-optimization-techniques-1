import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { useCardsReducer } from "reducer";
import { useCardsSearchTechnique } from "hooks";

const CardsContext = createContext(null);
const initialState = {
  status: "idle",
  cards: [],
  requestsMade: 0,
  searchTechnique: "No Technique",
};

function useCardsContext() {
  return useContext(CardsContext);
}

function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const rowsPerPage = 12;
  const totalPages = 10;
  const totalRows = rowsPerPage * totalPages;
  const { reducerFunction } = useCardsReducer();
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const { getSearchFunction } = useCardsSearchTechnique(cards, dispatch);
  const filterCards = getSearchFunction(state.searchTechnique);

  useEffect(() => {
    dispatch({ type: "UPDATE_STATUS", payload: "loading" });
    async function getCards() {
      fetch(`https://picsum.photos/v2/list?page=${activePage}&limit=${rowsPerPage}`)
        .then((response) => response.json())
        .then((cards) => {
          setCards(cards);
          setTimeout(() => {
            dispatch({ type: "UPDATE_STATUS", payload: "success" });
            dispatch({ type: "UPDATE_CARDS", payload: cards });
          }, 500);
        })
        .catch(() => {
          setCards([]);
          dispatch({ type: "UPDATE_CARDS", payload: [] });
          dispatch({ type: "UPDATE_STATUS", payload: "failure" });
        });
    }
    getCards();
  }, [activePage]);

  return (
    <CardsContext.Provider
      value={{
        status: state.status,
        cards: state.cards,
        searchTechnique: state.searchTechnique,
        requestsMade: state.requestsMade,
        pagination: {activePage, setActivePage, rowsPerPage, totalPages, totalRows},
        dispatch,
        filterCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}

export { useCardsContext, CardsProvider };
