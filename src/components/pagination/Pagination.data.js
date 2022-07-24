const buttons = [
    {
        text:"⏮️ First",
        onClickFunction: (setActivePage) => setActivePage(1),
        disableLogic: (activePage) => activePage === 1
    },
    {
        text:"⬅️ Previous",
        onClickFunction: (setActivePage) => setActivePage(activePage => activePage - 1),
        disableLogic: (activePage) => activePage === 1
    },
    {
        text:"Next ➡️",
        onClickFunction: (setActivePage) => setActivePage(activePage => activePage + 1),
        disableLogic: (activePage, totalPages) => activePage === totalPages
    },
    {
        text:"Last ⏭️",
        onClickFunction: (setActivePage, totalPages) => setActivePage(totalPages),
        disableLogic: (activePage, totalPages) => activePage === totalPages
    },
]

export {buttons};