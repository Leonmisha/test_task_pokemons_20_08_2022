import React from 'react';
import { Form } from "react-bootstrap";
import Search from "./Search";
import useSelector from "../../reactReduxConnector/hooks/useSelector";
import PokemonsList from "../../components/PokemonsList";
import { pokemonsListSelector, searchSelector } from "./selectors";
import styles from "./index.module.scss";
import Filters from "./Filters";

const Main = () => {
    const pokemonsList = useSelector(pokemonsListSelector);
    const filterByName = useSelector(searchSelector);

    return <div>
        <Form className={styles.form}>
            <Search />
            <Filters />
        </Form>
        <PokemonsList list={pokemonsList} filters={ { name: filterByName } }/>
    </div>
}

export default Main;