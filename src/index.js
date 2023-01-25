import { methods } from "./methods.js";
import { reducer } from "./methodStore.js";
import { InputReducer } from "./inputStore.js";


const reqTypeSelector = document.getElementById("reqTypeSelector");
const reqOptions = document.getElementById("reqOptions");
const requestUrl = document.getElementById("requestUrl");
const sendReqBtn = document.getElementById("sendReqBtn");

const loadMethods = () => {
  const methodsHtml = methods
    .map((method) => {
      return `<p class="reqItem hover:cursor-pointer hover:bg-gray-200 px-4 py-1" data-value="${method}">${method}</p>`;
    })
    .join("");
  reqOptions.innerHTML = methodsHtml;
};
loadMethods();
//sets the default method to GET
reqTypeSelector.innerHTML = `${reducer().getMethod()} <i class="fa-solid fa-chevron-down"></i>`;

// selects req method from dropdown
const selectedMethod = document.querySelectorAll(".reqItem");
selectedMethod.forEach((method) => {
  method.addEventListener("click", (e) => {
    reqOptions.classList.add("hidden");
    method = e.target.dataset.value;
    console.log(method);
    reducer().setmethod({ action: "CHANGE", payload: method });
    reqTypeSelector.innerHTML = `${reducer().getMethod()} <i class="fa-solid fa-chevron-down"></i>`;
  });
});

// toggles the dropdown display
reqTypeSelector.addEventListener("click", (e) => {
  reqOptions.classList.toggle("hidden");
});



const modifiers = document.querySelectorAll(".modifiers");
modifiers.forEach((modifier) => {
  modifier.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset.value);
    InputReducer().setmethod({
      action: "CHANGE",
      payload: e.target.dataset.value,
    });
    renderAttacher();
  });
});

const attachers = document.getElementById("attachers");
const renderAttacher = () => {
  const paramsBtn = document.getElementById("params");
  const headersBtn = document.getElementById("headers");
  const bodyBtn = document.getElementById("body");
  const render = () => {
    if (InputReducer().getMethod() == "params") {
      paramsBtn.classList.add("border-b-0");
      headersBtn.classList.remove("border-b-0");
      bodyBtn.classList.remove("border-b-0");

      return `     <div class="pt-8 pb-16  border border-t-0 relative">

        <div class=" p-3   flex flex-col gap-5">

          <div class="flex">
            <input class="border w-2/5 h-8 rounded-l border-r-0"/>
            <input class="border w-2/5 border-r-0"/>
            <button class="border w-1/5 rounded-r border-red-500 text-red-500">Remove</button>
          </div>
          <div class="flex">
            <input class="border w-2/5 h-8 rounded-l border-r-0"/>
            <input class="border w-2/5 border-r-0"/>
            <button class="border w-1/5 rounded-r text-red-500 border-red-500">Remove</button>
          </div>

          <button class="border  px-4 py-2 rounded absolute bottom-3 left-3 border-green-500 text-green-500">Add</button>
        </div>

      </div>`;
    } else if (InputReducer().getMethod() == "headers") {
      paramsBtn.classList.remove("border-b-0");
      headersBtn.classList.add("border-b-0");
      bodyBtn.classList.remove("border-b-0");
      return `<div class="pt-8 pb-16  border border-t-0 relative">

        <div class=" p-3   flex flex-col gap-5">

          <div class="flex">
            <input class="border w-2/5 h-8 rounded-l border-r-0"/>
            <input class="border w-2/5 border-r-0"/>
            <button class="border w-1/5 rounded-r border-red-500 text-red-500">Remove</button>
          </div>
          <div class="flex">
            <input class="border w-2/5 h-8 rounded-l border-r-0"/>
            <input class="border w-2/5 border-r-0"/>
            <button class="border w-1/5 rounded-r text-red-500 border-red-500">Remove</button>
          </div>

          <button class="border  px-4 py-2 rounded absolute bottom-3 left-3 border-green-500 text-green-500">Attach</button>
        </div>

      </div>`;
    } else if (InputReducer().getMethod() == "body") {
      paramsBtn.classList.remove("border-b-0");
      headersBtn.classList.remove("border-b-0");
      bodyBtn.classList.add("border-b-0");
      return ` <div class="w-full  border h-32 border-t-0 p-3">
        <textarea class="w-full h-full resize-none outline-none p-3 font-thin text-xs border" ></textarea>
      </div>`;
    }
  };
  attachers.innerHTML = render();
};
renderAttacher();

// sends the API request
sendReqBtn.addEventListener("click", (e) => {
  const url = requestUrl.value;
  const method = reducer().getMethod();
});
