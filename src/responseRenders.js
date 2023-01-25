import { responseReducer } from "./responseStore.js";


export const selectResponse = ()=>{
  const response = document.querySelectorAll(".response")
  response.forEach(res=>{
    res.addEventListener('click' , (e)=>{
      responseReducer().setmethod({action : 'CHANGE' , payload : e.currentTarget.dataset.value })
      renderResponse()
    })
  })

}

export const renderResponse = ()=>{
  const resBodyBtn = document.getElementById("resBodyBtn")
  const resHeadersBtn = document.getElementById("resHeadersBtn")

  const responseBody = document.getElementById("responseBody")
  const responseHeader = document.getElementById("responseHeader")

  if(responseReducer().getMethod() == 'body'){
    resBodyBtn.classList.add('border-b-0' , "font-bold")
    resHeadersBtn.classList.remove("border-b-0" , "font-bold")
    responseBody.classList.remove("hidden")
    responseHeader.classList.add("hidden")
  }else if (responseReducer().getMethod() == 'headers'){
    resBodyBtn.classList.remove('border-b-0' , "font-bold")
    resHeadersBtn.classList.add("border-b-0" , "font-bold")
    responseBody.classList.add("hidden")
    responseHeader.classList.remove("hidden")
  }
}