import { createContext, useReducer } from "react";
import categoryReducer from "../reducer/categoryReducer";

export const CategoryContext = createContext();
const initialState = [];
export const CategoryContextProvider = ({ children }) => {
    const [categoryState, dispatchCategory] = useReducer(
        categoryReducer,
        initialState
    );
    return (
        <CategoryContext.Provider value={{ categoryState, dispatchCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};
