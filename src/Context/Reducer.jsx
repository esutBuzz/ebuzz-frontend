export const initialState = {
    totalLikes: 0,
    totalComments: 0,
    likes: [],
    comments: [],
};
  
export default function Reducer(state, action) {
    switch (action.type) {
        case 'addLike':
        return {
          ...state,
          totalLikes: state.totalLikes + 1,
          likes: [...state.likes, action.payload],
        };
  
        case 'removeLike':
        return {
          ...state,
          totalLikes: state.totalLikes - 1,
          likes: state.likes.filter((item) => item.id !== action.payload.id),
        };
  
        case 'addComment':
        return {
          ...state,
          totalComments: state.totalComments + 1,
          comments: [...state.comments, action.payload],
        };
  
        case 'removeComment':
        return {
          ...state,
          totalComments: state.totalComments - 1,
          comments: state.comments.filter((item) => item.id !== action.payload.id),
        };
  
      default:
        throw new Error('Unsupported action type');
    }
}
  