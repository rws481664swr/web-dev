import NavigationSidebar from "../NavigationSidebar";

const Empty = () => {
    return (<></>)
}
const ThreeCols = ({active, MiddleCol = Empty, RightCol = Empty}) => {

    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active={active}/>
            </div>

            <div className="col-xl-6 col-lg-7  col-sm-10 ps-0 pe-0 border-top-0">
                <MiddleCol/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <RightCol/>
            </div>
        </div>
    )
}
export default ThreeCols