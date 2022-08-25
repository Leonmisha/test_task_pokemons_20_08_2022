import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface returnTypes<T> {
    currentItems: T[],
    setPage: Dispatch<SetStateAction<number>>,
    currentPage: number,
    pagesLength: number,
    setNextPage: () => void,
    setPrevPage: () => void,
}

function usePagination<T> (
    items : T[],
    itemsPerPage: number,
    initPage: number = 0,
): returnTypes<T> {
    const pagesLength = Math.ceil(items.length / itemsPerPage);
    const [currentPage, setPage] = useState(initPage > pagesLength + 1 ? 0 : initPage);
    const currentItems = items.slice(currentPage * itemsPerPage, (currentPage+1) * itemsPerPage);

    useEffect(() => {
        setPage(initPage > pagesLength + 1 ? 0 : initPage);
    },[initPage, itemsPerPage, items, pagesLength]);

    const setNextPage = () => setPage(Math.min(currentPage + 1, pagesLength));
    const setPrevPage = () => setPage(Math.max(currentPage - 1, 0));

    return {
        currentItems,
        currentPage,
        pagesLength,
        setPage,
        setNextPage,
        setPrevPage,
    }
}

export default usePagination;