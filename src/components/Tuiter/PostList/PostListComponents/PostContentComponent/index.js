const ContentComponent = ({data:{image:{src} , content: {text, link, title}}})=>{

    return (
        <div className=" wd-border-1px wd-rounded-all">
      <ContentImageComponent src={src} text={text||''}/>

            {text ? <TextComponent text={text} title={title} link={link}/> : "" }
        </div>
        )
}

function ContentImageComponent({src, text}){
    const rounding =text? "wd-border-round-top-only wd-bottom-border-gray": " wd-rounded-all"
    return(
        <img className={` wd-bottom-border-gray ${rounding}`}
             src={src} width="100%" height="auto"/>
    )
}


function TextComponent({text ,title ,link}){
    return (
        <div className="wd-text-grey p-2 m-2">
            <div className="text-white  ">{title}</div>
            <div>{text}</div>
            {link?  <MyLinkComponent link={link}/>:""}
        </div>
    )
}

function MyLinkComponent({link}){
   return (
       <>
         <i className="fa fa-link"/> <a href={link}>{link}</a>
       </>
   )
}
export default ContentComponent