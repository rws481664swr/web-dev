import TuitList from "../TuitList/index.js";
import WhatsHappening from "../WhatsHappeningComponent.js";
import {useDispatch} from "react-redux";

const HomeScreenComponent = () => {
    useDispatch()({type:'nav',active:'home'})
    return (
    <>
        <WhatsHappening/>
        <TuitList/>
    </>
    )
}
export default HomeScreenComponent