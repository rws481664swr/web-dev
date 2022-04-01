import {VerifiedIcon} from "../../../common/index.js";

function UserHandle({handle, time}) {
    return (
        <span className="wd-text-grey fw-normal">
                    @{handle} - {time}
                </span>
    )
}

const TuitContentComponent = ({tuit}) => {
    const {postedBy, handle, time, verified, tuit: text} = tuit
    return (
        <>
            <div className="pb-0 mb-0">
                <span className="fw-bold text-white ">
                    {postedBy.username}
                </span>
                {verified && <VerifiedIcon/>}
                <UserHandle handle={handle} time={time}/>
            </div>

            <div className='mt-0 pt-0 pb-2'>
                {text}
            </div>
        </>
    )
}
export default TuitContentComponent