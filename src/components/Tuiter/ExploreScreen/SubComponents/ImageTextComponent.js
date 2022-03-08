import React from "react";


export const ImageTextComponent = () => {
    return (
        <div className="position-relative wd-ab pt-0 ">
            <img className="p2 w-100 h-auto mb-2" src="/images/content/starship.jpg"/>
            <div className="position-absolute wd-text-grey display-6 font-weight-bold  bottom-0 pb-2 ps-1">
                SpaceX's Starship
            </div>
        </div>
    );
}
export default ImageTextComponent
