import { Button, Modal } from "react-bootstrap";
import { SyntheticEvent, useState } from "react";
import { Form } from "react-bootstrap";
import useSelector from "reactReduxConnector/hooks/useSelector";
import { filtersSelector } from "../selectors";
import styles from './index.module.scss';
import { typesSelector } from "../../../reducers/entities/selectors";
import { setFilter } from "../actions";
import useDispatch from "../../../reactReduxConnector/hooks/useDispatch";

const Filters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(filtersSelector);
    const types = useSelector(typesSelector);
    const mapTypes = Object.values(types);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChangeType = (e: SyntheticEvent)  => {
        dispatch(
            setFilter(
                'type',
                (e.target as HTMLSelectElement).value
            )
        );
    }


    return (
        <>
            <Button variant="light" className={styles["open-btn"]} onClick={handleShow}>
                Filters
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label htmlFor="type">Type</Form.Label>
                    <Form.Select id="type" value={filters.type} onChange={handleChangeType}>
                        <option value=''>Any type</option>
                        {mapTypes.map((type: any) => (
                            <option value={type.name} key={type.name}>
                                {type.name}
                            </option>
                        ))}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Filters;