const navReducer = (state, action) => state ?
    ({type: 'nav',active: action.active})
    : ({type: 'nav',active: 'home'})
export default navReducer