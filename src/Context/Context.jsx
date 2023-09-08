import { createContext, useReducer } from 'react';
import Reducer, { initialState } from './Reducer';

export const UserContext = createContext();

export default function ContextProvider({ children }) {
    
    const [state, dispatch] = useReducer(Reducer, initialState);

    const addLike = (item) => {
        dispatch({
            type: 'addLike',
            payload: item,
        });
    };

    const removeLike = (item) => {
        dispatch({
            type: 'removeLike',
            payload: item,
        });
    };

    const addComment = (item) => {
        dispatch({
            type: 'addComment',
            payload: item,
        });
    };

    const removeComment = (item) => {
        dispatch({
            type: 'removeComment',
            payload: item,
        });
    };

    const contextValue = {
        totalLikes: state.totalLikes,
        totalComments: state.totalComments,
        likes: state.likes,
        comments: state.comments,
        addLike,
        removeLike,
        addComment,
        removeComment,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
