import { PokemonMove } from "pokenode-ts";
import Pagination from 'react-bootstrap/Pagination';
import styles from './index.module.scss';
import { useState } from "react";

interface MovesListProps {
    list: PokemonMove[],
    movesPerPage: number,
}

const MovesList = (props: MovesListProps) => {
    const { list, movesPerPage } = props;
    const [currentPage, setCurrentPage] = useState(0);

    const pagesLength = Math.ceil(list.length / movesPerPage);
    const paginationItems = Array(pagesLength).fill(0).map((_, index) => (
            <Pagination.Item key={index} active={index === currentPage} onClick={() => setCurrentPage(index)}>
                {index+1}
            </Pagination.Item>
    ));



    const moves = list.slice(currentPage * movesPerPage, (currentPage+1) * movesPerPage).map(movesContainer => {
        const moveName = movesContainer.move.name;

        return <div key={moveName} className={styles.moves__item}>{moveName}</div>
    })

    return <div className={styles.moves}>
        <div className={styles.moves__title}>Moves</div>
        <div className={styles.moves__items}>{moves}</div>
        <Pagination>{paginationItems}</Pagination>
    </div>
}

export default MovesList;