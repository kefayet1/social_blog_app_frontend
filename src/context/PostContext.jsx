import { createContext, useReducer } from "react";
import postReducer from "../reducer/postReducer";

export const PostContext = createContext();
const initialState = [];
export const PostContextProvider = ({ children }) => {
    const [postState, postDispatch] = useReducer(postReducer, initialState);
    return (
        <PostContext.Provider value={{ postState, postDispatch }}>
            {children}
        </PostContext.Provider>
    );
};
