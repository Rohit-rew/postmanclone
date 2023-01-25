import { reducer } from "./methodStore.js";


const reqOptions = document.getElementById("reqOptions");
const reqTypeSelector = document.getElementById("reqTypeSelector");


const methods = ["GET", "POST", "PUT", "DEL"];

export const loadMethods = () => {
  const methodsHtml = methods
    .map((method) => {
      return `<p class="reqItem hover:cursor-pointer hover:bg-gray-200 px-4 py-1" data-value="${method}">${method}</p>`;
    })
    .join("");
  reqOptions.innerHTML = methodsHtml;
  reqTypeSelector.innerHTML = `${reducer().getMethod()} <i class="fa-solid fa-chevron-down"></i>`;
};

export const selectReqMethods = () => {
  const selectedMethod = document.querySelectorAll(".reqItem");
  selectedMethod.forEach((method) => {
    method.addEventListener("click", (e) => {
      console.log("clicked");
      reqOptions.classList.add("hidden");
      method = e.target.dataset.value;
      reducer().setmethod({ action: "CHANGE", payload: method });
      reqTypeSelector.innerHTML = `${reducer().getMethod()} <i class="fa-solid fa-chevron-down"></i>`;
    });
  });
};

export const dropdownToggler = ()=>{
  reqTypeSelector.addEventListener("click", (e) => {
    reqOptions.classList.toggle("hidden");
  });
}
