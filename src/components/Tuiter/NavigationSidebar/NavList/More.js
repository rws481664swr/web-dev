import {Link} from "react-router-dom";

function More({active='', onclick}) {
    // function MoreIcon(){
    //     return  ()
    // }
    console.log("more", active)
    return (
        <Link to={'/tuiter/more'}
                onClick={onclick}
              className={`${active==='more'? 'active':''} list-group-item  d-flex justify-content-start `} >
            <div className="fa-stack">
                <i style={{fontSize: '1em'}} className="fas fa-solid fa-circle fa-stack-1x"/>
                <i style={{fontSize: '.5em'}} className="fas fa-solid text-black bg-transparent fa-ellipsis fa-stack-1x"/>
            </div>
            <div className="d-none  d-xl-block  align-self-start align-self-center align-self-middle ">More</div>
        </Link>
    )
}
export default More