import { useCallback, useRef, useState } from "react";
import styles from "./index.module.scss";
import MovesList from "../MovesList";
import StatsList from "../StatsList";

interface CardInfoProps {
    currentPokemon: any
}

enum TABS {
    MOVES,
    STATS,
}

const CardInfo = (props: CardInfoProps) => {
    const {
        currentPokemon,
    } = props;

    const [currentTab, setCurrentTab] = useState(TABS.MOVES);
    const isMoves = currentTab === TABS.MOVES;

    const [movesPerPage, setMovesPerPage] = useState(4);
    const movesListRef = useRef<HTMLDivElement>(null);

    const handleMountMovesList = useCallback(() => {
        const setNewItemsPerPage = () => {
        if (movesListRef.current) {
            const height = window.innerHeight;

            const minMovesPerPage = 4;

            const el = movesListRef.current;
            const elOffsetTop = el.offsetTop;

            const itemsSpace = height - elOffsetTop - 300;

            const movesPerPage = Math.floor(itemsSpace / 30);
            const newMovesPerPage = Math.max(minMovesPerPage, movesPerPage);
            setMovesPerPage(newMovesPerPage);
        }
    }

    setNewItemsPerPage();
    window.addEventListener("resize", setNewItemsPerPage);

    return () => window.removeEventListener("resize", setNewItemsPerPage);
}, []);


    return (
        <>
            <div className={styles.tabs}>
                <div className={`${styles.tabs__elem} ${isMoves ? styles.tabs__elem_active : ''}`} onClick={() => setCurrentTab(TABS.MOVES)}>
                    Moves
                </div>
                <div className={`${styles.tabs__elem} ${!isMoves ? styles.tabs__elem_active : ''}`} onClick={() => setCurrentTab(TABS.STATS)}>
                    Stats
                </div>
            </div>
            <div className={styles.content}>
                <img
                    width={200}
                    height={200}
                    className={styles.avatar}
                    src={currentPokemon.sprites.front_default || `${process.env.PUBLIC_URL}/img/no_pokemon.png`}
                    alt={currentPokemon.name}
                    onError={({ currentTarget }) => {
                        console.log('error image')
                        currentTarget.onerror = null;
                        currentTarget.src=`${process.env.PUBLIC_URL}/img/no_pokemon.png`;
                    }}
                />
                {isMoves && <MovesList
                    list={currentPokemon.moves}
                    movesPerPage={movesPerPage}
                    ref={movesListRef}
                    onMount={handleMountMovesList}
                />}
                {!isMoves && <StatsList list={currentPokemon.stats}/>}
            </div>
        </>
    );
}

export default CardInfo;
