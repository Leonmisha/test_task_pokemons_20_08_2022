import { useState } from "react";
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
    const switchTab = () => setCurrentTab( isMoves ? TABS.STATS : TABS.MOVES);

    return (
        <>
            <div className={styles.tabs}>
                <div className={styles.tabs__elem} onClick={switchTab}>
                    {isMoves ? 'Stats' : 'Moves'}
                </div>
            </div>
            <img className={styles.avatar} src={currentPokemon.sprites.front_default} alt={currentPokemon.name}/>
            {isMoves && <MovesList list={currentPokemon.moves} movesPerPage={20}/>}
            {!isMoves && <StatsList list={currentPokemon.stats}/>}
        </>
    );
}

export default CardInfo;
