import {useSelector} from "react-redux";
import {Link} from "react-router-dom";





const Profile = ({}) => {
    const profile = useSelector(x => x.pro)
    const {
        firstName,
        lastName,
        profilePicture,
        bannerPicture,
        bio,
        location,
        dateOfBirth,
        followingCount,
        followersCount,
        dateJoined,
        website,
        handle
    } = profile
    const name = `${firstName} ${lastName}`


    return (<>
        <div className={'d-flex'}>
            {/*<Link to={'/tuiter/home'}>*/}
            {/*    <i className=" text-white fa fa-2x fa-arrow-left"  />*/}
            {/*</Link>*/}
            <h3 children={name}/>
        </div>

        <div className={'position-relative py-4'}>
            <img className={'h-auto'} width={'100%'} src={bannerPicture} alt={'banner'}/>
            <img style={{
                zIndex: 20, top: '70%', left: '16px',
                borderStyle: 'solid',
                borderColor: 'black',
                borderWidth: '3px'
            }}
                 className={' border-solid  position-absolute rounded-circle  '}
                 src={profilePicture}
                 alt={'propic'} width={'96px'} height={'96px'}/>

            <div className={'mt-3'}>
                <Link to={'/tuiter/edit-profile'}
                      className={'btn border-white wd-1px-bb border-solid border-1 text-white fw-bold rounded-pill position-absolute'}
                      style={{
                          zIndex: 20, right: '12px'
                      }}>Edit Profile</Link>
            </div>
        </div>

          <ul className={'my-3'} style={{listStyleType: 'none'}}>
            <li className={'text-white fw-bold'}>{name}</li>
            <li className={'wd-text-grey'}>@{handle}</li>
            <li className={'text-white py-2'}>{bio}</li>
            <li>
                <span className={''}>
                    <i className=" fa-solid fa-location-dot"/> {location}
                </span>
                <span className={'mx-2'}>
                                <i className="me-1 fa-solid fa-cake-candles"/>
                   Born {dateToString(dateOfBirth)}
                </span>


                <span className={'mx-2'}>     <i className="me-1 fa fa-calendar"/>
                   Joined {dateToString(dateJoined)}
                </span>
            </li>
            <li className={'py-2'}>
                <span className={'text-white fw-bold'}>{followingCount}   </span>
                Following
                <span className={'text-white fw-bold'}> {followersCount} </span>
                Followers
            </li>
              <li><Link to={website}>My Website : {website}</Link></li>
        </ul>


    </>)
}
const Month = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
function dateToString(date) {
    let _date =       Date.parse(date)

    date=date.split('/').map(e=> parseInt(e))//.map(parseInt)
    let day=0,month,yr
    if (date.length===2){
     [month,yr ]= date
    }else{
     [month,day,yr ]= date
    }

    if(day){
        return `${Month[month]} ${day}, ${yr}`
    }
    else return  `${Month[month]} ${yr}`

}
export default Profile
