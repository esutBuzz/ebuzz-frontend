export const initialState = {
    totalLikes: 0,
    totalComments: 0,
    likes: [],
    comments: [],
    followers: [],
    following: [],
    lists: [],
    // blocked: [],
    communities: [],
    posts: [],  
    postIde:[],
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

        case 'follow':
        return {
            ...state,
            followers: [...state.followers, action.payload],
        };

        case 'unfollow':
        return {
            ...state,
            followers: state.followers.filter((item) => item.id !== action.payload.id),
        };

        case 'addList':
        return {
            ...state,
            lists: [...state.lists, action.payload],
        };

        case 'removeList':
        return {
            ...state,
            lists: state.lists.filter((list) => list.id !== action.payload),
        };

        case 'joinCommunity':
        return {
            ...state,
            communities: [...state.communities, action.payload],
        };

        case 'exitCommunity':
        return {
            ...state,
            communities: state.communities.filter((community) => community.id !== action.payload),
        };
        case 'addPost':
        return {
            ...state,
            posts: [...state.posts, action.payload],
        };

        case 'editPost':
        const updatedPosts = state.posts.map((post) => {
            if (post.id === action.payload.id) {
                return {
                    ...post,
                    // Update the properties you need to change here
                    // For example, if you want to update the post content:
                    content: action.payload.content,
                };
            } else {
                return post;
            }
        });

        return {
            ...state,
            posts: updatedPosts,
        };

        case 'deletePost':
        return {
            ...state,
            posts: state.posts.filter((post) => post.id !== action.payload),
        };
  
      default:
        throw new Error('Unsupported action type');
    }
}