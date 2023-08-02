import { createContext, useReducer, useState } from 'react';
export const Store = createContext();
const initail = {
  cart: {
    cartItem: [],
  },
  userinfo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = action.payload;
      const exist = state.cart.cartItem.find((f) => f._id === item._id);
      const cartItem = exist
        ? state.cart.cartItem.map((i) => (i._id === exist._id ? item : i))
        : [...state.cart.cartItem, item];
      return {
        ...state,
        cart: { ...state.cart, cartItem },
      };
    case 'DELE_ITEM':
      const itemDel = action.payload;
      const itemDelete = state.cart.cartItem.filter(
        (f) => f._id !== itemDel._id
      );
      return { ...state, cart: { ...state.cart, cartItem: itemDelete } };

    case 'DEC_ITEM_CONTER':
      const itemsConter = action.payload;
      const conters = state.cart.cartItem.find(
        (f) => f._id === itemsConter._id
      );
      conters.conter -= 1;
      return { ...state, cart: { ...state.cart, conters } };

    case 'ADD_ITEM_CONTER':
      const itemConter = action.payload;
      const conter = state.cart.cartItem.find((c) => c._id === itemConter._id);
      conter.conter += 1;
      return { ...state, cart: { ...state.cart, conter } };

    case 'LOGIN':
      return {
        ...state,
        userinfo: [...state.userinfo, action.payload],
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initail);
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const [likeComment, setLikeComment] = useState(0);
  const [dislikeComment, setDisLikeComment] = useState(0);

  return (
    <Store.Provider
      value={{
        // cart,
        // setCart,
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

// ...state,
// cart: { ...state.cart, cartItem: [...state.cart.cartItem, item] },
