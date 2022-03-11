const ContentComponent = ({data:{image:{src} , content: {text="", link, title}}})=>{

    return (
        <div className=" wd-border-1px wd-rounded-all">
            <img className={` wd-bottom-border-gray ${text? "wd-border-round-top-only wd-bottom-border-gray": " wd-rounded-all"}`}
                 src={src} alt={src} width="100%" height="auto"/>
            {text && <TextComponent text={text} title={title} link={link}/>  }
        </div>
        )
}

// function ContentImageComponent({src, text}){
//     return(
//
//     )
// }


function TextComponent({text ,title ,link}){
    return (
        <div className="wd-text-grey p-2 m-2">
            <div className="text-white  ">{title}</div>
            <div>{text}</div>
            {link && <>
                <i className="fa fa-link"/> <a href={link}>{link}</a>
            </>
            }
        </div>
    )
}

export default ContentComponent