import NavigationSidebar from "./NavigationSidebar";
export {default as HomeScreen} from './HomeScreen'
export {default as ExploreScreen} from './ExploreScreen'

export const UnderConstruction = ({name}) => {
    const active = name
    name = name[0].toUpperCase() + name.substring(1)
    return (
        <div className={'row'}>
            <div className="col-2">
                <NavigationSidebar active={active}/>
            </div>
            <div className="col-10  ps-0 pe-0 border-top-0">
                <h1>{name}</h1>
                <p>
                    The {name} page is still under construction.
                </p>
            </div>
        </div>
    )
}