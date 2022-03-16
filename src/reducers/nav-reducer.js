 const navReducer=
    (state={active:'home'},action)=> {

        console.log('nav came thru with value: '+state.active);

        return {
            active:state.active,
            ...state, /*type: action.type*/
        }
    }
export default navReducer