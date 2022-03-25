const navReducer =
    (state = {active: 'home'}, action) => {
        if (action.type === "nav") {
            return {
                active: state.active,
                ...state
            }
        }
        return state;
    }
export default navReducer