import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../../../styles/edit-pro.css'

const EditProfile = () => {
    const dispatch = useDispatch();
    dispatch({type:'nav',active:'profile'})

    const profile = useSelector(x => x.pro)
    const {
        firstName,
        lastName,
        profilePicture,
        bannerPicture,
        bio,
        location,
        dateOfBirth,
        website,
    } = profile
    let un = useNavigate('/tuiter/profile')
    const ymdTomdy = (date) => `${date[1]}/${date[2]}/${date[0]}`
    const dob2type = (dob) => `${dob[2]}-${dob[0]}-${dob[1]}`
    const [edits, editStates] = useState({
        website,
        firstName,
        lastName,
        location,
        dateOfBirth: dob2type(dateOfBirth.split('/')),
        bio
    })
    const save = () => {
        edits.dateOfBirth = ymdTomdy(edits.dateOfBirth.split('-'))
        dispatch({type: 'save-profile', update: edits})
        un('/tuiter/profile')
    }
    return (
        <>
            <div className={'d-flex justify-content-between'}>
                <div className={'d-flex justify-content-start'}>
                     <div className={'me-4 align-self-center'}>   <Link to={'/tuiter/profile'}  >
                            <i className=" text-white fa  fa-2x fa-x"/>
                        </Link></div>

                    <h3 className={'align-self-middle'} children={`${firstName} ${lastName}`}/>
                </div>
                <button
                    onClick={save}
                    className={'align-self-center fw-bold btn btn-dark bg-white rounded-pill'}>
                    Save
                </button>

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
            </div>

            <div className={'row'}>
                <label className={'form-label'} htmlFor={'first-name'}>First</label>
                <input
                    onChange={e => editStates({...edits, firstName: e.target.value})}
                    id={'first-name'}
                    type={'text'}
                    className={'form-control'}
                    value={edits.firstName}/>


                <label className={'form-label'} htmlFor={'last-name'}>Last</label>
                <input
                    onChange={e => editStates({...edits, lastName: e.target.value})}
                    id={'last-name'}
                    type={'text'}
                    className={'form-control'}
                    value={edits.lastName}/>


                <label className={'form-label'} htmlFor={'location'}>Location</label>
                <input
                    onChange={e => editStates({...edits, location: e.target.value})}
                    id={'location'}
                    type={'text'}
                    className={'form-control'}
                    value={edits.location}/>


                <label className={'form-label'} htmlFor={'dob'}>DOB</label>

                <input value={edits.dateOfBirth} type={'date'} id={'dob'}
                       onChange={e => {
                           let split = e.target.value.split('-')
                           console.log(split)
                           editStates({...edits, dateOfBirth: e.target.value})
                           console.log(e.target.value)
                       }
                       }
                />

                <label className={'form-label'} htmlFor={'website'}>Website</label>
                <input type={'url'} id={'website'}
                       onChange={e => editStates({...edits, website: e.target.value})}
                />

                <label className={'form-label'} htmlFor={'bio-label'}>Bio</label>
                <textarea
                    onChange={e => editStates({...edits, bio: e.target.value})}
                    value={edits.bio}/>

            </div>
        </>
    )
}

export default EditProfile