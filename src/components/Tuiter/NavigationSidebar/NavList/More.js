
function More() {
    function MoreIcon(){
        return  ( <div className="fa-stack">
            <i style={{fontSize: '1em'}} className="fas fa-solid fa-circle fa-stack-1x"/>
            <i style={{fontSize: '.5em'}} className="fas fa-solid text-black bg-transparent fa-ellipsis fa-stack-1x"/>
        </div>)
    }
    return (
        <a className="list-group-item  d-flex justify-content-start " href="#">
            <MoreIcon/>
            <div className="d-none  d-xl-block  align-self-start align-self-center align-self-middle ">More</div>
        </a>
    )
}
export default More