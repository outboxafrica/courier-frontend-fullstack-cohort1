import React,{createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

//initial state
const initialState = {}

//create context
export const StateContext = createContext();
//provider component
export const StateProvider = ({ children }) => 
{
    const [state] = useReducer(reducer,initialState);
    return (<StateContext.Provider value={{
        orders: state.orders,
        
    }}>
    
    {children}
 </StateContext.Provider>);
}

export const useStateValue = () => useContext(StateContext);