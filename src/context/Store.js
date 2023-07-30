import { createContext, useReducer, useState,  } from 'react';
export const Store = createContext();
const initail = {
  cart: {
    cartItem: [],
  },
  userinfo:[]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state, cart: {...state.cart,cartItem: [...state.cart.cartItem, action.payload],},
      };
    case 'LOGIN':
      return {
        ...state,userinfo:[...state.userinfo,action.payload]
      }
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
 const [state,dispatch]=useReducer(reducer,initail)
  const [cart, setCart] = useState([])
  const [userinfo, setUserInFo] = useState([])
  const [like, setLike] = useState(0)
  const [dislike, setDisLike] = useState(0);
   const [likeComment, setLikeComment] = useState(0);
  const [dislikeComment, setDisLikeComment] = useState(0);

  return (
    <Store.Provider
      value={{
        cart,
        setCart,
        userinfo,
        setUserInFo,
        like,
        setLike,
        dislike,
        setDisLike,
        dislikeComment,
        setDisLikeComment,
        likeComment,
        setLikeComment,
        state,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
};
