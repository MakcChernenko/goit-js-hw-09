console.log("hello form");const t={email:"",message:""},a=document.querySelector(".feedback-form");let r=a.querySelector("input"),s=a.querySelector("textarea"),o=a.elements;o=Array.from(o);o.pop();a.addEventListener("input",n);a.addEventListener("submit",m);window.addEventListener("DOMContentLoaded",f);function n(l){l.preventDefault(),o.forEach(e=>{e.name==="email"?t.email=e.value.trim():e.name==="message"&&(t.message=e.value.trim()),console.log(t),localStorage.setItem("feedback-form-state",JSON.stringify(t))})}function m(l){l.preventDefault();let e=!1;r.value&&s.value?e=!0:(e=!1,a.reset()),e?(t.email=r.value,t.message=s.value,a.reset(),console.log(t)):alert("All form fields must be filled in"),localStorage.removeItem("feedback-form-state")}function f(l){let e={};return localStorage.getItem("feedback-form-state")?(e=JSON.parse(localStorage.getItem("feedback-form-state")),r.value=e.email,s.value=e.message,console.log(e)):console.log(!1)}
//# sourceMappingURL=2-form-f3208e74.js.map
