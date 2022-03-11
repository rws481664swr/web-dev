
export default ({userName, text, handle, time}) => `
   <div>
              <span class="fw-bold text-white ">  ${userName} </span>
              <span style="padding:0;border:0;margin:0;" class="fa-stack ">
              <i style="" class="fa-solid fa-certificate fa-stack-1x text-white"></i>
              <i style=""   class="fa-solid fa-check   fa-stack-1x  text-black"></i>

              </span> 
                 <span class="wd-text-grey fw-normal"> 
                        ${handle} - ${time} 
                    </span>
                </div>
               
                <div>
                ${text}
                </div>
`