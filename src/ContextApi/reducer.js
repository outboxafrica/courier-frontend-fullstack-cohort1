
export const initialState = {
    user: localStorage.getItem("userName"),
    email: localStorage.getItem("email"),
    // user: null,
};
console.log(initialState.user)
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_EMAIL: "SET_EMAIL"
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
            
    }
    switch (action.type) {
        case actionTypes.SET_EMAIL:
            return{
                ...state,
                email: action.email,
            };
            
    
        default:
            return state;
    }
};
export default reducer;