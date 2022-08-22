import {
    useContext,
    useEffect,
    useState,
    useRef,
    // useSyncExternalStore
} from "react";
import { Context } from "../Provider";

// TODO types
// We could use useSyncExternalStoreWithSelector

const useIsMounted = () => {
    const isMounted = useRef(false);
    useEffect(
        () => {
            isMounted.current = true;

            return () => {
                isMounted.current = false
            };
        },
        []);
    return isMounted;
}

const useSelector = (
    selector: (state: any) => any,
) => {
    const store = useContext(Context);
    const mounted = useIsMounted();

    const [localState, setLocalState] = useState(() => selector(store.getState()));

    useEffect(() => {
        return store.subscribe(() => {
            const storeState = selector(store.getState());

            if (!mounted.current) {
                return;
            }

            setLocalState((prevValue: any) => prevValue !== storeState ? storeState : prevValue);
        });
    }, [selector, store, mounted]);

    return localState;
};

// const useSelectorNew = (
//     selector: (state: any) => any,
// ) => {
//     const store = useContext(Context);
//
//     const selectedField = useSyncExternalStore(
//         store.subscribe,
//         () => selector(store.getState()),
//     );
//
//     return selectedField;
// };

export default useSelector;