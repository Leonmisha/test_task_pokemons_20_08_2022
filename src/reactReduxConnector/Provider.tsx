import { Store } from 'redux';
import { ReactNode, createContext } from 'react';
import store from "../store";

interface ProviderProps {
    store: Store,
    children: ReactNode
}

export const Context = createContext(store);

const Provider = ({
  store,
  children
}: ProviderProps) => {
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
};

export default Provider;