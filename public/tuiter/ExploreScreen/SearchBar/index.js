import { icons } from '../../common/index.js'

const Gear = () => icons("fa fa-cog fa-2x  fa-cog-inverted"," align-middle  ","wd-gear")
const MagGlass = () => icons("  fa fa-search wd-fa-search-gr ","",'',"wd-mag-glass")
export default ()=>`
<div class="d-flex ms-4 me-2">
 
    <div id="wd-search-div" class=" border   rounded-pill   input-group border-1 pd-5   mt-2 mb-2  ">
      <span class="input-group-text bg-transparent   p-0 border-0 pt-1 ps-2">
      ${MagGlass()}
<!--    <i class="  fa fa-search wd-fa-search-gr " ></i>-->
</span>
<input type="text" class="form-control border-0 p-1  bg-transparent" placeholder=" Search Twitter"/>

    </div> 
    <a class=" border-0 bg-transparent text-black  input-group-text align-middle" href="explore-settings.html">
${Gear()}
</a>

</div>


`

 export const x = ()=> `  
 <div class="d-flex ms-4 me-2">
    <div class="  border border-dark   rounded-pill   input-group border-1 pd-5   mt-2 mb-2   " >
    <span class"input-group-text bg-transparent   p-0 border-0 pt-1 ps-2">
    <i class="  fa fa-search wd-fa-search-gr " ></i>
</span>
<input type="text" class="form-control border-0 p-1  bg-transparent" placeholder=" Search Twitter"/>
</div>
<a class=" border-0 bg-transparent text-primary  input-group-text align-middle" href="explore-settings.html">
<i class="fa fa-cog fa-2x   align-middle  fa-cog-inverted"></i>
</a>
</div>`