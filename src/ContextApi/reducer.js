
export const initialState = {
    user: localStorage.getItem("userName"),
    email: localStorage.getItem("email"),
    orderno: localStorage.getItem("orderno"),
    quantity: localStorage.getItem("quantity"),
    from: localStorage.getItem("from"),
    to: localStorage.getItem("to"),
    status: localStorage.getItem("status"),
    action: localStorage.getItem("action"),
    // user: null,
};
console.log(initialState.user)
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_EMAIL: "SET_EMAIL",
    SET_ORDERNO: "SET_ORDERNO",
    SET_QUANTITY: "SET_QUANTITY",
    SET_FROM: "SET_FROM",
    SET_TO: "SET_TO",
    SET_STATUS: "SET_STATUS",
    SET_ACTION: "SET_ACTION",
};

const reducer = (state, action) => {
    console.log(action);
    console.log(state);

    switch (action.type) {
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
            };
            
        case actionTypes.SET_EMAIL:
            return{
                ...state,
                email: action.email,
            };
        case actionTypes.SET_ORDERNO:
            return{
                ...state,
                orderno: action.orderno,
            };

        case actionTypes.SET_QUANTITY:
            return{
                ...state,
                quantity: action.quantity,
            };

        case actionTypes.SET_FROM:
            return{
                ...state,
                from: action.from,
            };

        case actionTypes.SET_TO:
            return{
                ...state,
                to: action.to,
            };

        case actionTypes.SET_ACTION:
            return{
                ...state,
                action: action.action,
            };

           
        default:
            return state;
    }
};
export default reducer;