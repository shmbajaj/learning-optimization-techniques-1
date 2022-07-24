import { Header, Pagination } from "components";
import { Home } from "pages";
import { CardsProvider } from "context";

export default function App() {
  return (
    <CardsProvider>
      <div className="text-white bg-neutral-800 ">
        <Header />
        <Home />
        <Pagination />
      </div>
    </CardsProvider>
  );
}
