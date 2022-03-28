import tuits from '../data/tuits.json'

const tuitReducer =(state=tuits,action)=>{
     switch(action.type){
         case 'like-tuit':

            return state.map(tuit=>{
                 if(tuit._id === action.tuit._id){
                    tuit.stats.likes +=  tuit.liked? -1:+1
                     tuit.liked = !tuit.liked
                 }
                 return tuit
             })

         case 'create-tuit':
             const __new= {
             tuit:action.tuit,
             _id:new Date().getTime()+"",
             postedBy :{
                 username:"ReactJS"
             },
             stats:{
                 retuits:111,
                 likes:222,
                 replies:333,
             },

         };
             return [__new, ...state]
         case 'delete-tuit':
             return state.filter(
                 tuit => tuit._id !== action.tuit._id);
         default:
             return state;
     }
}
export default tuitReducer