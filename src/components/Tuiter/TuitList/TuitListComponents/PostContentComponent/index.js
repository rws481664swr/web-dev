
function AttachmentComponent({attachments}) {
    
    const {video,image} =attachments
    if (video){
        return video &&
            <iframe width="100%" height="350px"
                    className="mt-0 wd-border-radius-20px  "
                    style={{width: "100%"}}
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
    }else if(image){
return <img src={image} width={'100%'}  height="350px" alt={'alt'} />
    }else{
        return <></>
    }
}

const TuitContentComponent = (
    {tuit}) => {

    return (<>
        {
            tuit.attachments &&
                <div className=" wd-border-1px wd-rounded-all">
                    {tuit.attachments && < AttachmentComponent attachments={tuit.attachments}/>}
                </div>
        }</>
    )
}


export default TuitContentComponent