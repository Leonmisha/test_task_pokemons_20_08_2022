import React, { SyntheticEvent } from "react";
import Form from "react-bootstrap/Form";
import useDispatch from "reactReduxConnector/hooks/useDispatch";
import useSelector from "reactReduxConnector/hooks/useSelector";
import { searchSelector } from "../selectors";
import { setSearchName } from "../actions";
import styles from "./index.module.scss";

const Search = () => {
    const dispatch = useDispatch();
    const searchInputText = useSelector(searchSelector);

    const onChangeSearch = React.useCallback(
        (e: SyntheticEvent) => dispatch(setSearchName((e.target as HTMLInputElement).value)),
        [dispatch],
    );

    return (
        <>
            <Form.Label className={styles.search__title} htmlFor="search">Search</Form.Label>
            <Form.Control
                id="search"
                type="search"
                placeholder="Enter pokemon name"
                value={searchInputText}
                onChange={onChangeSearch}
            />
        </>
    );
}

export default Search;