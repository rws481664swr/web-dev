import {useState} from "react";

import {useDispatch} from "react-redux";

const TuitButton = ({onClick,cn})=><button className={cn||''} onClick={onClick}>Tuit</button>
const WhatsHappening = () => {
    const dispatch = useDispatch()

    let [whatsHappening, setWhatsHappening]    = useState('');
    const tuitClickHandler = () => { dispatch({type:'create-tuit',tuit:whatsHappening}) }
    const onChangeSet = (event)=> setWhatsHappening(event.target.value)

    return <div  className={"my-1 d-flex justify-content-start"}>


        <img className={ " mx-2 rounded-circle"} width="48px" height="48px" src={'/images/elon.jpg'} alt={'alt'}/>
      <div className={' w-100'}>
          <textarea

            placeholder={"What's Happening?"}
            className={'wd-text-grey bg-black w-100'}
            value={whatsHappening} onChange={onChangeSet}>
        </textarea>
        <div className={" mt-1 d-flex text-primary justify-content-between" }>

            <div className=" ">
                <i className="fa-solid fa-image mx-1"/>
                <i className="fa-solid fa-chart-line mx-1"/>
                <i className="fa-regular fa-face-smile mx-1"/>
                <i className="fa-regular fa-calendar mx-1 "/>
            </div>
            <TuitButton cn={' rounded-pill me-2 p-2 px-4 bg-primary border-0 text-white my-1'} onClick={tuitClickHandler}/>
        </div>

      </div>
    </div>

}
export default WhatsHappening

