import React from "react";

export const CircleIcon = () => <i className={'fa-solid fa-circle'}/>
export const Heart =()=> <i className="far fa-heart me-1"/>
export const HeartRed =({color})=> <i style={color  || {color:'inherit'}} className="fas fa-heart me-1"/>
export const RemoveIcon =({onClick,classNames})=><i onClick={onClick}  className={`${classNames} fas fa-remove fa-2x  fa-pull-right`}/>

export const MagGlass = () => <i className="  fa fa-search wd-fa-search-gr  wd-mag-glass"/>
export const CogIcon = ({className}) => <i className={`${className} fa fa-cog fa-2x fa-cog-inverted align-middle wd-gear`}/>


export const Comment = ()=> <i className={"  wd-pe6 fa-regular   fa-comment"}/>
export const Retweet = ()=><i className={' wd-ps-6 wd-pe6  fa-solid    fa-retweet"'}/>
export const Share = ()=><i className={' fa-solid   fa-arrow-up-from-bracke'}/>
export function CheckedCircle() {
    return (<i className="fa-solid fa-circle-check"/>);
}
export const VerifiedIcon=()=>(
    <span className="p-0 border-0, m-0 fa-stack ">
                    <i className="fa-solid fa-certificate fa-stack-1x text-white"/>
                    <i className="fa-solid fa-check   fa-stack-1x  text-black"/>
    </span>
)