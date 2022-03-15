const UnderConstruction = ({name}) => {
    name = name[0].toUpperCase() + name.substring(1)
    return (
        <div className={'row'}>

            <div className="col-10 col-lg-7 col-xl-6">
                <h1>{name}</h1>
                <p>
                    The {name} page is still under construction.
                </p>
            </div>
        </div>
    )
}
export default UnderConstruction