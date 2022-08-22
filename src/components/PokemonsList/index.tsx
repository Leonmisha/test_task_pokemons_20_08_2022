import React, { useMemo } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Pokemon } from "pokenode-ts";
import styles from "./index.module.scss";

export interface PokemonsListProps {
    list: Pokemon[],
    filters: {
        name: string,
    }
    onClick: Function;
}

const PokemonsList = (props: PokemonsListProps) => {
    const {
        list,
        filters: {
            name: filterName
        },
        onClick,
    } = props;

    const filteredList = useMemo(
        () => (
            filterName
                ? list.filter(pokemon => pokemon.name.includes(filterName))
                : list
        ),
        [filterName, list]
    );

    return (
        <Container className="justify-content-md-center">
            <Row>
                {filteredList.length
                    ? filteredList.map(pokemon => (
                        <Col xs={6} md={4} key={pokemon.id} className={styles.card} onClick={() => onClick(pokemon)}>
                          {pokemon.name}
                        </Col>
                        )
                    )
                    : (
                        <Col key="empty" className={styles.empty}>
                            <Alert variant="warning">We couldn't find pokemons by these filters</Alert>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
}

export default PokemonsList;