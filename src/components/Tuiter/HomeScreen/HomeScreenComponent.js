import TuitList from "../TuitList/index.js";
import WhatsHappening from "../WhatsHappeningComponent.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const HomeScreenComponent = () => {
    const dispatch = useDispatch()
    useEffect(()=>
        dispatch ({type:'nav',active:'home'}),[dispatch])
    return (
    <>
        <WhatsHappening/>
        <TuitList/>
    </>
    )
}
export default HomeScreenComponent