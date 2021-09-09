var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{dateCounter:()=>o,dateInput:()=>s,formValidator:()=>d,media:()=>a.default,style:()=>n.default,submitForm:()=>i,today:()=>r,uiUpdater:()=>l});var n={};e.r(n);var a={};async function i(e){return(await fetch("http://localhost:4000/destination",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"same-origin",body:JSON.stringify(e)})).json()}function r(){let e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e=a+"-"+n+"-"+t,e}function o(e){let t=new Date(e.replace(/\-/g,"/")),n=new Date(r().replace(/\-/g,"/"));const a=(t.getTime()-n.getTime())/864e5.toFixed(0);return a>1?`Is ${a} Days Away!`:1===a?`Is ${a} Day Away!`:0===a?"Be Aware Is Today!":"The Date Has Expired"}function l(e){const t=document.getElementById("results"),n=document.getElementById("destination"),a=document.getElementById("weather");n.innerHTML=`\n    <h2> Your Itinerary ${o(e.date)} </h2>\n    \n        <ul>\n            <li> Destination: <strong> ${e.cityName}, ${e.countryName}</strong></li>\n            <li> Schedule: <strong>${e.date} </strong></li>\n            \n        </ul>\n    <img\n    src=${e.img}\n    alt= "image of ${e.cityName}"\n    />\n    `,a.innerHTML=`\n    <h3> Current Weather in ${e.cityName}: </h3>\n    <ul class= "weather-data" id="weather-data">x\n        <li>${e.temp} &deg; C</li>\n        <li> ${e.weather} </li>\n        <li>\n            <img\n            src= "https://www.weatherbit.io/static/img/icons/${e.icon}.png" alt='weather-icon'>\n        </li>\n    </ul>\n    `,t.style.display="block",t.scrollIntoView({behavior:"smooth"}),o(e.date)}e.r(a);function d(e){e.preventDefault();const t=document.getElementById("city").value,n=document.getElementById("date").value,a={city:t,date:n};""===t||""===n?alert("Please enter a valid destination and a date!"):i(a).then((e=>{l(e)}))}document.getElementById("submit").addEventListener("click",(e=>{d(e)}));const s=document.getElementById("date");s.addEventListener("focus",(e=>{e.preventDefault();let t=document.querySelector('input[type="date"]');t.setAttribute("min",r()),t.setAttribute("max","2030-01-01"),t.value=r()})),Client=t})();