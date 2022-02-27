import HomeComponent from "./HomeComponent.js"
import NavigationSidebar from "../NavigationSidebar/index.js"
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
<div id="wd-row" class="row mt-2">

      <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar('home' )}
    </div>
  
  
  ${HomeComponent()} 
       
      <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
         ${PostSummaryList()} 
        </div>
</div>
`)
})($);

console.log(`loaded module: ${import.meta.url}`)
