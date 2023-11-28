import {createContext, ReactElement, ReactNode, useContext} from "react";
import ReactDOM from "react-dom/client";

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider ({children}:ShoppingCartProviderProps) {
    return (
      <ShoppingCartContext.Provider value={{}}>
        {children}
      </ShoppingCartContext.Provider>
    );
}