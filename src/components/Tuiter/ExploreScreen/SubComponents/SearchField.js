import React from "react";
import {CogIcon, MagGlass, Span} from "../../common/index.js";

const SearchTextField = ({className}) => <input type="text" className={className} placeholder="Search Twitter"/>

export const SearchField = () => {
    return (
        <div className={'row'}>
            <div className="d-flex mx-2">
                <div id="wd-search-div"
                     className=" border  bg-white rounded-pill   input-group border-1 pd-5   my-2  ">

                    <Span className={"input-group-text p-0  bg-transparent text-black ps-2  m-1 border-0"}
                          content={<MagGlass/>}
                    />

                    <SearchTextField className={"form-control rounded-pill p-0"}/>

                </div>
                <a className=" border-0 bg-transparent text-black  input-group-text align-middle"
                   href="explore-settings.html">
                    <CogIcon className="text-primary me-2"/>
                </a>
            </div>
        </div>
    );
}
export default SearchField