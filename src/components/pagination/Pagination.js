import { buttons } from "./Pagination.data";
import {useCardsContext} from "context";

function Pagination() {
    const {pagination:{activePage, rowsPerPage, totalPages, setActivePage, totalRows}} = useCardsContext();

    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage-1) + 1;
    const end = activePage === totalPages ? totalRows : beginning + rowsPerPage - 1;
  return (
    <article className="border-2 border-solid flex flex-col flex-wrap items-center justify-evenly p-1 sticky bottom-0 bg-neutral-800">
        <div className="w-full flex items-center justify-evenly">
      {
        buttons.map((item,index) => (<button className="border-[1px] border-solid p-1 disabled:opacity-30" onClick={() => {
            item.onClickFunction(setActivePage,totalPages);
            window.scrollTo(0,0);
        }} disabled={item.disableLogic(activePage,totalPages)} key={index}>{item.text}</button>))
      }
        </div>
        <div className="w-full">
        <p className="mb-2">
        Page {activePage} of {totalPages}
      </p>
      <p>
        Images: {beginning} - {end} of {totalRows}
      </p>
        </div>
    </article>
  )
}

export {Pagination};