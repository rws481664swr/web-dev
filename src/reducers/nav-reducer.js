const navReducer = (state, action) => state ? ({active: action.active}) : ({active: 'home'})
export default navReducer