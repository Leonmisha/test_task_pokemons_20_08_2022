import React, { EffectCallback, ForwardedRef, useEffect, useMemo } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Pokemon } from "pokenode-ts";
import styles from "./index.module.scss";
import PaginationList from "../PagionationList";

export interface PokemonsListProps {
    list: Pokemon[],
    filters: {
        name: string,
    }
    onClick: Function,
    className?: string,
    itemsPerPage?: number,
    onMount?: EffectCallback,
}

const PokemonsList = React.forwardRef((props: PokemonsListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        className,
        filters: {
            name: filterName
        },
        list,
        onClick,
        itemsPerPage = 9,
        onMount = () => {},
    } = props;

    const filteredList = useMemo(
        () => (
            filterName
                ? list.filter(pokemon => pokemon.name.includes(filterName.toLowerCase()))
                : list
        ),
        [filterName, list]
    );

    useEffect(onMount, [onMount]);

    return (
        <Container ref={ ref } className={ className }>
                { filteredList.length === 0 && (
                    <Col key="empty" className={ styles.empty }>
                        <Alert variant="warning">We couldn't find pokemons by these filters</Alert>
                    </Col>
                ) }
                { filteredList.length > 0 && (
                    <PaginationList<Pokemon>
                        list={ filteredList }
                        itemsPerPage={ itemsPerPage }
                    >
                        { itemsList => (
                            <Row>
                                {itemsList.map(pokemon => (
                                    <Col xs={ 6 } md={ 4 } lg={ 3 } key={ pokemon.id } className={ styles.card }
                                         onClick={ () => onClick(pokemon) }>
                                        { pokemon.name }
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </PaginationList>
                )}
        </Container>
    )
});

export default PokemonsList;