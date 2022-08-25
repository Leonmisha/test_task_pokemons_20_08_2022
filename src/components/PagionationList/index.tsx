import { ReactNode } from "react";
import usePagination from "../../hooks/usePagination";
import Pagination from "react-bootstrap/Pagination";
import styles from './index.module.scss';

interface PaginationListProps<T> {
    list: T[],
    itemsPerPage: number,
    children: (items: T[]) => ReactNode,
    classNamePagination?: string,
    initPage?: number,
}

function PaginationList<T> (props: PaginationListProps<T>)  {
    const { list, itemsPerPage, children, initPage = 0 } = props;
    const {
        currentItems,
        currentPage,
        pagesLength,
        setPage,
        setNextPage,
        setPrevPage,
    } = usePagination<T>(list, itemsPerPage, initPage);

    return <>
        {children(currentItems)}
        {pagesLength > 1 && (
            <Pagination className={styles.pagination__container}>
                <Pagination.First
                    disabled={currentPage === 0}
                    title="1"
                    onClick={() => setPage(0)}
                />
                <Pagination.Prev
                    disabled={currentPage === 0}
                    title={String(currentPage)}
                    onClick={setPrevPage}
                />
                <Pagination.Item active={true}>{currentPage + 1}</Pagination.Item>
                <Pagination.Next
                    disabled={currentPage === pagesLength - 1}
                    title={String(currentPage+2)}
                    onClick={setNextPage}/>
                <Pagination.Last
                    disabled={currentPage === pagesLength - 1}
                    title={String(pagesLength)}
                    onClick={() => setPage(pagesLength-1)}
                />
            </Pagination>
        )}
    </>
}

export default PaginationList;