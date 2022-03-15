
const TuitContentComponent = ({tweet: {userName, handle, time, text}}) => {
    return (
        <>
            <div className="pb-0 mb-0">
                <span className="fw-bold text-white ">
                    {userName}
                </span>
                <span className="p-0 border-0, m-0 fa-stack ">
                    <i className="fa-solid fa-certificate fa-stack-1x text-white"/>
                    <i className="fa-solid fa-check   fa-stack-1x  text-black"/>
                </span>
                <span className="wd-text-grey fw-normal">
                    @{handle} - {time}
                </span>
            </div>

            <div className='mt-0 pt-0 pb-2'>
                {text}
            </div>
        </>
    )
}
export default TuitContentComponent