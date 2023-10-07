import { createContext, useReducer } from 'react';
import Reducer, { initialState } from './Reducer';
import { nanoid } from 'nanoid';

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
        const AddComment = {
            id: nanoid(),
            ...item, likesCount : 0 , comments:[]
        }
        dispatch({
            type: 'addComment',
            payload: AddComment,
        });
    };

    const removeComment = (item) => {
        dispatch({
            type: 'removeComment',
            payload: item,
        });
    };

    const follow = (user) => {
        dispatch({
            type: 'follow',
            payload: user,
        });
    };

    const unfollow = (user) => {
        dispatch({
            type: 'unfollow',
            payload: user,
        });
    };

    const addList = (list) => {
        dispatch({
            type: 'addList',
            payload: list,
        });
    };
    
    const removeList = (listId) => {
        dispatch({
            type: 'removeList',
            payload: listId,
        });
    };

    const addEvent = (events) => {
        const timestamp = new Date()
        const newEvent = {
            id: nanoid(),
            timestamp,
            title: events.title,
            desc: events.desc,
            from: events.from,
            to: events.to,
        };

        dispatch({
            type: 'addEvent',
            payload: newEvent,
        })
    };

    const editEvent = (updatedEvent) => {
        dispatch({
            type: 'editEvent',
            payload: updatedEvent,
        })
    };

    const deleteEvent = (eventId) => {
        dispatch({
            type: 'deleteEvent',
            payload: eventId,
        })
    };
    
    const joinCommunity = (community) => {
        dispatch({
            type: 'joinCommunity',
            payload: community,
        });
    };
    
    const exitCommunity = (communityId) => {
        dispatch({
            type: 'exitCommunity',
            payload: communityId,
        });
    };

    const addPost = (post) => {
        const timestamp = new Date();
        const newPost = {
            id: nanoid(),
            timestamp,
            text: post.text,
            images: post.images,
            likes: [],
            comments: [],
        };
        dispatch({
            type: 'addPost',
            payload: newPost,
        });
    };
          
    
    const editPost = (updatedPost) => {
        dispatch({
            type: 'editPost',
            payload: updatedPost,
        });
    };
    
    const deletePost = (postId) => {
        dispatch({
            type: 'deletePost',
            payload: postId,
        });
    };
    
    const mutePost = (postId) => {
        dispatch({
            type: 'mutePost',
            payload: postId,
        });
    };

    const contextValue = {
        totalLikes: state.totalLikes,
        totalComments: state.totalComments,
        likes: state.likes,
        comments: state.comments,
        followers: state.followers,
        following: state.following,
        lists: state.lists,
        communities: state.communities,
        posts: state.posts,
        events: state.events,
      
        addLike,
        removeLike,
        addComment,
        removeComment,
        follow,
        unfollow,
        addList,
        removeList,
        addEvent,
        editEvent,
        deleteEvent,
        joinCommunity,
        exitCommunity,
        addPost,
        editPost,
        deletePost,
        mutePost,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
