
import { InputReducer } from "./inputStore.js";

export const selectReqModifiers = ()=>{
    const modifiers = document.querySelectorAll(".modifiers");
    modifiers.forEach((modifier) => {
      modifier.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset.value);
        InputReducer().setmethod({
          action: "CHANGE",
          payload: e.target.dataset.value,
        });
        renderReqModifiers();
      });
    });
  } 


export const renderReqModifiers = () => {
    const paramsBtn = document.getElementById("paramsbtn");
    const headersBtn = document.getElementById("headersbtn");
    const bodyBtn = document.getElementById("bodybtn");
  
    const params = document.getElementById("params");
    const headers = document.getElementById("headers");
    const body = document.getElementById("body");
  
      if (InputReducer().getMethod() == "params") {
        paramsBtn.classList.add("border-b-0"  , "font-bold");
        headersBtn.classList.remove("border-b-0" , "font-bold");
        bodyBtn.classList.remove("border-b-0" , "font-bold");
  
        params.classList.remove('hidden')
        headers.classList.add('hidden')
        body.classList.add('hidden')
  
      } else if (InputReducer().getMethod() == "headers") {
        paramsBtn.classList.remove("border-b-0" , "font-bold");
        headersBtn.classList.add("border-b-0", "font-bold");
        bodyBtn.classList.remove("border-b-0", "font-bold");
  
        params.classList.add('hidden')
        headers.classList.remove('hidden')
        body.classList.add('hidden')
  
      } else if (InputReducer().getMethod() == "body") {
        paramsBtn.classList.remove("border-b-0", "font-bold");
        headersBtn.classList.remove("border-b-0", "font-bold");
        bodyBtn.classList.add("border-b-0", "font-bold");
  
        params.classList.add('hidden')
        headers.classList.add('hidden')
        body.classList.remove('hidden')
      }
  };