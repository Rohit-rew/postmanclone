const requestUrl = document.getElementById("requestUrl");
const sendReqBtn = document.getElementById("sendReqBtn");

import {
  loadMethods,
  selectReqMethods,
  dropdownToggler,
} from "./reqmethods.js";
import { reducer } from "./methodStore.js";
import { selectReqModifiers } from "./reqModifiers.js";
import { renderReqModifiers } from "./reqModifiers.js";
import { selectResponse, renderResponse } from "./responseRenders.js";

function start() {
  loadMethods();
  dropdownToggler();
  selectReqMethods();
  selectReqModifiers();
  renderReqModifiers();
  selectResponse();
  renderResponse();
}
start();

const params = [];
const addParamsBtn = document.getElementById("addParamsBtn");
const queryParams = document.getElementById("queryParams");

addParamsBtn.addEventListener("click", (e) => {
  params.push({ key: "", value: "" });
  renderParams(params.length - 1);
});

const renderParams = (id) => {
  const queryParams = document.getElementById("queryParams");
  const node = document.createElement("div");
  node.setAttribute("data-id", id);
  node.classList.add("flex");
  node.innerHTML = `<input class="border w-2/5 h-8 rounded-l border-r-0 outline-none px-2" />
  <input class="border w-2/5 border-r-0 outline-none px-2" />
  <button
  data-id=${id}
    class="removeParamsBtn border w-1/5 rounded-r text-red-500 border-red-500"
  >
    Remove
  </button>`;
  queryParams.appendChild(node);

  const removeParamsBtn = document.querySelectorAll(".removeParamsBtn");
  removeParamsBtn.forEach((removeBtn) => {
    removeBtn.addEventListener("click", (e) => {
      removeQueryParams(e.currentTarget.dataset.id);
    });
  });
};

const removeQueryParams = (id) => {
  const queryParams = document.getElementById("queryParams");
  
  for(let i = 0 ; i<queryParams.children.length ; i++){
    const dataId = queryParams.children[i].attributes["data-id"]
    if(dataId.value == id){
      queryParams.removeChild(queryParams.children[i])
    }
  }
};

// sends the API request
sendReqBtn.addEventListener("click", (e) => {
  const url = requestUrl.value;
  const method = reducer().getMethod();
});

