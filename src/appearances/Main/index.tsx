import React, { useCallback } from 'react';
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

    return <div>
        <Form className={styles.form}>
            <Search />
            <Filters />
        </Form>
        <PokemonsList
            list={pokemonsList}
            filters={ { name: filterByName } }
            onClick={handleClickPokemon}
        />
    </div>
}

export default Main;