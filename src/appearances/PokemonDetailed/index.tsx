import { useCallback } from "react";
import { currentPokemonSelector, currentPokemonNameSelector, isLoadingSelector } from "./selectors";
import useSelector from "../../reactReduxConnector/hooks/useSelector";
import { Alert, Button, Modal } from "react-bootstrap";
import CardInfo from "./CardInfo";
import useDispatch from "../../reactReduxConnector/hooks/useDispatch";
import { closePokemonDetailed } from "./actions";

const PokemonDetailed = () => {
    const dispatch = useDispatch();
    const currentPokemon = useSelector(currentPokemonSelector);
    const isLoading = useSelector(isLoadingSelector);
    const pokemonName = useSelector(currentPokemonNameSelector);

    const handleClose = useCallback(() => {
        if (!isLoading) {
            dispatch(closePokemonDetailed())
        }
    }, [dispatch, isLoading])

    if (!isLoading && !currentPokemon) {
        return null;
    }

    return (
        <Modal show>
            <Modal.Header closeButton={!isLoading} onHide={handleClose}>
                <Modal.Title>{currentPokemon?.name || pokemonName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isLoading && <Alert>Loading...</Alert>}
                {currentPokemon && <CardInfo currentPokemon={currentPokemon} />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" disabled={isLoading} onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PokemonDetailed;