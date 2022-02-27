import { icons } from '../../common/index.js'

const Gear = () => icons("fa fa-cog fa-2x  text-primary fa-cog-inverted"," align-middle  ","wd-gear")
const MagGlass = () => icons("  fa fa-search wd-fa-search-gr ","",'',"wd-mag-glass")
export default ()=>`
<div class="d-flex ms-4 me-2">
    <div id="wd-search-div" class=" border  bg-white rounded-pill   input-group border-1 pd-5   mt-2 mb-2  ">
        <span class="input-group-text bg-transparent text-black ps-2  m-1 border-0">
          ${MagGlass()}
        </span>
        <input type="text" class="form-control rounded-pill border-0 p-1  " 
        placeholder=" Search Twitter"/>
    </div> 
    <a class=" border-0 bg-transparent text-black  input-group-text align-middle" href="explore-settings.html">
        ${Gear()}
    </a>

</div>


`
