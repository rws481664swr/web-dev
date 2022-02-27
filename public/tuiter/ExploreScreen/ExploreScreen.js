import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";


;(function ($) {

    $('#wd-explore').append(`
<div id="wd-row" class="row mt-2">

      <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar('explore')}
    </div>
  
  
  ${ExploreComponent()} 
       
      <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
         ${WhoToFollowList()} 
        </div>
</div>
`)






})($);
const forYou = $("#nav-tab-foryou")
forYou.css({
    borderBottomColor:'#24a0ed',
    borderBottomWidth:"2px",
    borderBottomStyle: "solid"
})
$("#wd-gear").css({
    color:"white",
    borderBottomWidth:'0px'
})
$("#wd-search-div").css({borderColor:"black"})
$("#wd-gear").css({})
$("#wd-mag-glass").css({})

//
// .addClass("active"  )
// $("#nav-tab-foryou").addClass("disabled"  )
