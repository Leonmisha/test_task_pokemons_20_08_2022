import { PokemonStat } from "pokenode-ts";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss';

interface StatsListProps {
    list: PokemonStat[],
}

enum statTypes {
    HEALTH = 'hp',
    ATTACK = "attack",
    DEFENSE = "defense",
    SPECIAL_ATTACK = "special-attack",
    SPECIAL_DEFENSE = "special-defense",
    SPEED = "speed",
    ACCURACY = "accuracy",
    EVASION = "evasion",
}

const namesToImagesList: Record<string, string> = {
    [statTypes.HEALTH]: `${process.env.PUBLIC_URL}/img/healthBar.png`,
    [statTypes.ATTACK]: `${process.env.PUBLIC_URL}/img/attack.png`,
    [statTypes.DEFENSE]: `${process.env.PUBLIC_URL}/img/defense.png`,
    [statTypes.SPECIAL_ATTACK]: `${process.env.PUBLIC_URL}/img/special_attack.png`,
    [statTypes.SPECIAL_DEFENSE]: `${process.env.PUBLIC_URL}/img/special_defense.png`,
    [statTypes.SPEED]: `${process.env.PUBLIC_URL}/img/speed.png`,
    [statTypes.ACCURACY]: `${process.env.PUBLIC_URL}/img/accuracy.png`,
    [statTypes.EVASION]: `${process.env.PUBLIC_URL}/img/evasion.png`,
}

const StatsList = (props: StatsListProps) => {
    const { list } = props;

    const localList = list.map(statContainer => ({
        quantity: statContainer.base_stat,
        name: statContainer.stat.name,
        imageSrc: namesToImagesList[statContainer.stat.name],
    }));



    return <div>
        <div className={styles.stats__title}>Stats</div>
        <Container className="justify-content-md-center">
            <Row>
                {localList.map( stat => (
                        <Col xs={3} md={3} key={stat.name} className={styles.stats_item}>
                            <img
                                className={styles.stats_item__image}
                                src={stat.imageSrc} alt={stat.name}
                                title={stat.name}
                            />
                            <div className={styles.stats_item__quantity}>{stat.quantity}</div>
                        </Col>
                    )
                )}
            </Row>
        </Container>
    </div>
}

export default StatsList;