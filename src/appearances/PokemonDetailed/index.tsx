import { useCallback } from "react";
import { currentPokemonSelector, currentPokemonNameSelector, isLoadingSelector } from "./selectors";
import useSelector from "../../reactReduxConnector/hooks/useSelector";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import CardInfo from "./CardInfo";
import useDispatch from "../../reactReduxConnector/hooks/useDispatch";
import { closePokemonDetailed } from "./actions";
import styles from './index.module.scss';

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
        <Modal show dialogClassName={styles.modal__dialog} contentClassName={styles.modal__content}>
            <Modal.Header closeButton={!isLoading} onHide={handleClose}>
                <Modal.Title className={styles.modal__title}>{currentPokemon?.name || pokemonName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isLoading && <Alert><Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                /> Loading...</Alert>}
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