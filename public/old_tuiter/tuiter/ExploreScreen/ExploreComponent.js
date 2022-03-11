import PostSummaryList from "../PostSummaryList/index.js";
import NavTabs from "./NavTabs/index.js";
import SearchField from "./SearchBar/index.js";
import ImageTextComponent from "./ImageTextComponent.js";
import {icons} from "../common/index.js";

const ExploreComponent = () => { return(`
<div class="col-xl-6 col-lg-7  col-sm-10 ps-0 pe-0 border-top-0">

<div class="row">
<!-- search field and cog -->
${SearchField()}
</div>
<ul id="wd-nav-tabs" class="nav mb-2 nav-tabs">
${NavTabs()}
<!-- tabs -->
 </ul>
<!-- image with overlaid text -->
${ImageTextComponent()}
<!-- postlist -->
${PostSummaryList()} 
</div>
`);

}
export default ExploreComponent