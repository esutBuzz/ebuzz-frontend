import { createContext, useReducer } from "react";
import Reducer, { initialState } from "./Reducer";
import { nanoid } from "nanoid";

export const UserContext = createContext();

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const addUserDetails = (details) => {
    dispatch({
      type: "addUserDetails",
      payload: details,
    });
  };
  const getUserToken = (id) => {
    dispatch({
      type: "getUserToken",
      payload: id,
    });
  };
  const addLike = (item) => {
    dispatch({
      type: "addLike",
      payload: item,
    });
  };

  const removeLike = (item) => {
    dispatch({
      type: "removeLike",
      payload: item,
    });
  };

  const addComment = (item) => {
    // const AddComment = {
    //   id: item.id,
    //   idHandler: item.idHandler,
    //   text: item.text,
    //   likesCount: 0,
    //   comments: [],
    // };
    dispatch({
      type: "addComment",
      payload: item,
    });
  };

  const removeComment = (item) => {
    dispatch({
      type: "removeComment",
      payload: item,
    });
  };

  const follow = (user) => {
    dispatch({
      type: "follow",
      payload: user,
    });
  };

  const unfollow = (user) => {
    dispatch({
      type: "unfollow",
      payload: user,
    });
  };

  const addList = (list) => {
    dispatch({
      type: "addList",
      payload: list,
    });
  };

  const removeList = (listId) => {
    dispatch({
      type: "removeList",
      payload: listId,
    });
  };

  const addEvent = (events) => {
    const timestamp = new Date();
    const newEvent = {
      id: nanoid(),
      timestamp,
      title: events.title,
      desc: events.desc,
      from: events.from,
      to: events.to,
    };

    dispatch({
      type: "addEvent",
      payload: newEvent,
    });
  };

  const editEvent = (updatedEvent) => {
    dispatch({
      type: "editEvent",
      payload: updatedEvent,
    });
  };

  const deleteEvent = (eventId) => {
    dispatch({
      type: "deleteEvent",
      payload: eventId,
    });
  };

  const joinCommunity = (community) => {
    dispatch({
      type: "joinCommunity",
      payload: community,
    });
  };

  const exitCommunity = (communityId) => {
    dispatch({
      type: "exitCommunity",
      payload: communityId,
    });
  };

  const addPost = (post) => {
    const timestamp = new Date();
    // const newPost = {
    //   id: post.id,
    //   timestamp,
    //   text: post.text,
    //   images: post.images,
    //   likes: [],
    //   comments: [],
    //   ide: nanoid(),
    // };
    dispatch({
      type: "addPost",
      payload: post,
    });
  };
  const addPost2 = (post) => {
    dispatch({
      type: "addPost2",
      payload: post,
    });
  };

  const editPost = (updatedPost) => {
    dispatch({
      type: "editPost",
      payload: updatedPost,
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "deletePost",
      payload: postId,
    });
  };

  const mutePost = (postId) => {
    dispatch({
      type: "mutePost",
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
    posts2: state.posts2,
    events: state.events,
    userDetails: state.userDetails,
    userToken: state.userToken,

    getUserToken,
    addUserDetails,
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
    addPost2,
    editPost,
    deletePost,
    mutePost,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
