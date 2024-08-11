import { createContext, useReducer } from "react";
import commentReducer from "../reducer/commentReducer";

export const CommentContext = createContext();
const initialState = [];
export const CommentContextProvider = ({ children }) => {
    const [commentState, dispatchComment] = useReducer(
        commentReducer,
        initialState
    );
    return (
        <CommentContext.Provider value={{ commentState, dispatchComment }}>
            {children}
        </CommentContext.Provider>
    );
};
