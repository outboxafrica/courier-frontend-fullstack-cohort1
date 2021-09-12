import React,{createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

//initial state
const initialState = {}
//     orders: [ 
//         {OrderNo:'N012',
//         Quantity:4,
//         From:'Fortportal',
//         To:'kampala',
//         Status:'pending',
//         },
//         {OrderNo:'N013',
//         Quantity:2,
//         From:'JINJA',
//         To:'KITGUM',
//         Status:'pending',
//         },
//         {OrderNo:'N014',
//         Quantity:'3',
//         From:'Masaka',
//         To:'masindi',
//         Status:'pending',
//         },
//         {OrderNo:'N015',
//         Quantity:'2',
//         From:'byale',
//         To:'lira',
//         Status:'pending',
//         } 
//                 ]
  
// }
//create context
export const StateContext = createContext();
//provider component
export const StateProvider = ({ children }) => 
{
    const [state, dispatch] = useReducer(reducer,initialState);
    return (<StateContext.Provider value={{
        orders: state.orders,
        // deleteOrder
    }}>
    
    {children}
 </StateContext.Provider>);
}
//actions
// function deleteOrder(orderno) {
//     dispatch({
//         type:'DELETE_ORDER',
//         payload: orderno
//     });
// }


// export const orders;
// hook which let us pull information from the data layer
export const useStateValue = () => useContext(StateContext);