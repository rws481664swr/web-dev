const profileData = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: 'jannunzi',
    profilePicture: '/images/profile.png',
    bannerPicture: '/picsum/wide/300_1.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.  Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 312,
    followersCount: 180
}
const proReducer = (state = profileData, action) => {

    switch (action.type){
        // case 'save-profile':
         //     return {...state,...action.profile}
        case "save-profile":
            return {...state,...action.update}
        default:
            return state
    }
}
export default proReducer