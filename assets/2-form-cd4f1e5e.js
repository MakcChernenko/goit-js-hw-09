console.log("hello form");const a={email:"",message:""},t=document.querySelector(".feedback-form");let r=t.querySelector("input"),s=t.querySelector("textarea"),o=t.elements;o=Array.from(o);o.pop();t.addEventListener("input",n);t.addEventListener("submit",m);window.addEventListener("DOMContentLoaded",f);function n(l){l.preventDefault(),o.forEach(e=>{e.name==="email"?a.email=e.value.trim():e.name==="message"&&(a.message=e.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(a))})}function m(l){l.preventDefault();let e=!1;r.value&&s.value?e=!0:(e=!1,t.reset()),e?(a.email=r.value,a.message=s.value,t.reset(),console.log(a)):alert("All form fields must be filled in"),localStorage.removeItem("feedback-form-state")}function f(l){let e={};return localStorage.getItem("feedback-form-state")?(e=JSON.parse(localStorage.getItem("feedback-form-state")),r.value=e.email,s.value=e.message,console.log(e)):console.log("not data from localstorage")}
//# sourceMappingURL=2-form-cd4f1e5e.js.map