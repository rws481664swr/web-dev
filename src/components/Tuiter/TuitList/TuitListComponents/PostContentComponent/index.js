import TuitTextComponent from "./TuitTextComponent.js";

const TuitContentComponent = (
    {
        data: {
            image: {src},
            content: {text = "", link, title}
        }
    }) => {
    return (
        <div className=" wd-border-1px wd-rounded-all">
            <img
                className={` wd-bottom-border-gray ${text ? "wd-border-round-top-only wd-bottom-border-gray" : " wd-rounded-all"}`}
                src={src} alt={src} width="100%" height="auto"/>
            {text && <TuitTextComponent text={text} title={title} link={link}/>}
        </div>
    )
}


export default TuitContentComponent