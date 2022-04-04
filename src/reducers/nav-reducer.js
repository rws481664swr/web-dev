const DefaultState={type: 'nav', active: 'home'}
const navReducer = (state = DefaultState, action) => {
       return  ({type: 'nav', active: action.active})
 }
export default navReducer