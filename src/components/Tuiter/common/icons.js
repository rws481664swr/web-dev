import React from "react";

export const CircleIcon = () => <i className={'fa-solid fa-circle'}/>
export const Heart =()=> <i className="far fa-heart me-1"/>
export const HeartRed =()=> <i style={{color:'red'}} className="fas fa-heart me-1"/>
export const RemoveIcon =({onClick,classNames})=><i onClick={onClick}  className={`${classNames} fas fa-remove fa-2x  fa-pull-right`}/>