import React from "react";
import {Row} from "../../common";
// const MagGlass=()=><i className="  fa fa-search wd-fa-search-gr  wd-mag-glass"/>
const SearchTextField=({className})=> <input type="text" className={className} placeholder=" Search Twitter"/>
// const CogIcon = ({className})=><i className={`${className} fa fa-cog fa-2x fa-cog-inverted align-middle wd-gear`}/>
export const SearchField = () => {
    return (
        <div className={'row'}>
        <div className="d-flex ms-4 me-2">
            <div id="wd-search-div"
                 className=" border  bg-white rounded-pill   input-group border-1 pd-5   mt-2 mb-2  ">
                <span className="input-group-text bg-transparent text-black ps-2  m-1 border-0">
                    {/*<MagGlass/>*/}
                    <i className="  fa fa-search wd-fa-search-gr  wd-mag-glass"/>
                </span>
                <input type="text" className={"form-control rounded-pill border-0 p-1"} placeholder=" Search Twitter"/>
               {/*<SearchTextField className={"form-control rounded-pill border-0 p-1"}/>*/}
                <input type="text" className={"form-control rounded-pill border-0 p-1"} placeholder=" Search Twitter"/>
            </div>
            <a className=" border-0 bg-transparent text-black  input-group-text align-middle"
               href="explore-settings.html">
                {/*<CogIcon className="text-primary"/>*/}
                <i className={`text-primary fa fa-cog fa-2x fa-cog-inverted align-middle wd-gear`}/>
            </a>
        </div>
        </div>
    );
}
export default SearchField