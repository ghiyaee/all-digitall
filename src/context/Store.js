import { createContext, useReducer, useState,  } from 'react';
export const Store = createContext();
// const initail = {
//   cart: {
//     cartItem: [],
//   },
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return {
//         ...state, cart: {...state.cart,cartItem: [...state.cart.cartItem, action.payload],},
//       };
//     default:
//       return state;
//   }
// };

export const StoreProvider = ({ children }) => {
//  const [state,despatch]=useReducer(reducer,initail)
  const [cart,setCart]=useState([])
  return (
    <Store.Provider value={{ cart,setCart }}>{children}</Store.Provider>
  );
};
