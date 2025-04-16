import{a as u,S as d,i}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="49684805-156d2cdb1a1bccc9916216ec8";async function m(s){return(await u.get(f,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a");function y(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p>👍 ${t.likes}</p>
          <p>👁️ ${t.views}</p>
          <p>💬 ${t.comments}</p>
          <p>⬇️ ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search term!",position:"topRight"});return}g(),L();try{const t=await m(o);if(t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}y(t.hits)}catch{i.error({message:"Oops! Something went wrong.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
