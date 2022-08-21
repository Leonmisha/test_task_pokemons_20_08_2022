import { useContext, useEffect, useState } from "react";
import { Context } from "../Provider";

// TODO types
// We could use useSyncExternalStoreWithSelector

const useSelector = (
    selector: (state: any) => any,
) => {
    const store = useContext(Context);

    const [localState, setLocalState] = useState(() => selector(store.getState()));

    useEffect(() => {
        return store.subscribe(() => {
            const storeState = selector(store.getState());
            setLocalState((prevValue: any) => prevValue !== storeState ? storeState : prevValue);
        });
    }, [selector, store]);

    return localState;
};

export default useSelector;