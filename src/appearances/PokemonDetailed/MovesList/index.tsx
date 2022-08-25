import { PokemonMove } from "pokenode-ts";
import PaginationList from "components/PagionationList";
import styles from './index.module.scss';
import React, { EffectCallback, ForwardedRef, useEffect } from "react";

interface MovesListProps {
    list: PokemonMove[],
    movesPerPage: number,
    onMount?: EffectCallback,
}

const MovesList = React.forwardRef((props: MovesListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        list,
        movesPerPage,
        onMount = () => {},
    } = props;

    useEffect(onMount, [onMount])

    return (
        <div ref={ref} className={styles.moves}>
            <div className={styles.moves__title}>Moves</div>
            <div className={styles.moves__list}>
                <PaginationList<PokemonMove> list={list} itemsPerPage={movesPerPage}>
                    {(currentItems) => (
                        <div className={styles.moves__items}>
                            {currentItems.map(movesContainer => {
                                    const moveName = movesContainer.move.name;

                                    return <div key={ moveName } className={ styles.moves__item }>{ moveName }</div>
                            })}
                        </div>
                    )}
                </PaginationList>
            </div>
        </div>
    );
});

export default MovesList;