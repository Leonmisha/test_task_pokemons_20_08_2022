import React, { useCallback, useRef, useState } from 'react';
import { Form } from "react-bootstrap";
import Search from "./Search";
import useSelector from "../../reactReduxConnector/hooks/useSelector";
import PokemonsList from "../../components/PokemonsList";
import { pokemonsListSelector, searchSelector } from "./selectors";
import styles from "./index.module.scss";
import Filters from "./Filters";
import useDispatch from "../../reactReduxConnector/hooks/useDispatch";
import { Pokemon } from "pokenode-ts";
import { openPokemonDetailed } from "../PokemonDetailed/actions";

const Main = () => {
    const dispatch = useDispatch();
    const pokemonsList = useSelector(pokemonsListSelector);
    const filterByName = useSelector(searchSelector);

    const handleClickPokemon = useCallback(
        (pokemon: Pokemon) => dispatch(openPokemonDetailed(pokemon.id, pokemon.name)),
        [dispatch]
    );

    const pokemonsListRef = useRef<HTMLDivElement>(null);

    const [itemsPerPage, setItemsPerPage] = useState(9);

    const handleMountPokemonsList = () => {
        const setNewItemsPerPage = () => {
            if (pokemonsListRef.current) {
                const width = window.innerWidth;
                const height = window.innerHeight;

                let itemsPerRow: number;

                if (width >= 992) {
                    itemsPerRow = 4;
                } else if (width >= 768) {
                    itemsPerRow = 3;
                } else {
                    itemsPerRow = 2;
                }

                const minItemsPerPage = itemsPerRow * 3;

                const el = pokemonsListRef.current;
                const elOffsetTop = el.offsetTop;

                const itemsSpace = height - elOffsetTop - 58;

                const rows = Math.floor(itemsSpace / 80);
                const newItemsPerPage = Math.max(minItemsPerPage, rows * itemsPerRow);
                setItemsPerPage(newItemsPerPage);
            }
        }

        setNewItemsPerPage();
        window.addEventListener("resize", setNewItemsPerPage);

        return () => window.removeEventListener("resize", setNewItemsPerPage);
    }

    return <div className={styles.container}>
        <Form className={styles.form}>
            <Search />
            <Filters />
        </Form>
        <PokemonsList
            className={styles.pokemonsList__container}
            filters={ { name: filterByName } }
            itemsPerPage={itemsPerPage}
            list={pokemonsList}
            ref={pokemonsListRef}
            onClick={handleClickPokemon}
            onMount={handleMountPokemonsList}
        />
    </div>
}

export default Main;