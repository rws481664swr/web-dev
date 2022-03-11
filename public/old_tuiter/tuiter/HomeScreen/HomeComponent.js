import PostList from '../PostList/index.js'
export default ()=> `
<div  class="col-xl-6 col-lg-7  col-sm-10 ps-0 pe-0 border-top-0">
 ${PostList()}
</div>


`
console.log(`loaded module: ${import.meta.url}`)