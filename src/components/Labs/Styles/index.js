import React from 'react'

const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }

    const bgBlue = {
        "backgroundColor": "lightblue",

    }
    const bgRed = {
        backgroundColor: "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    return(
        <div>
            <h1>Styles</h1>
            <div style={{"backgroundColor":"lightYellow"  ,
                "color":"black",
                padding:"10px"
            }}>
                Yellow Background
            </div>
            <div style={bgRed}>Red Background</div>
            <div style={bgBlue}>BLue Background</div>
        </div>
    )
}
export default Styles