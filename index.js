import{a as d,S as f,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="49684805-156d2cdb1a1bccc9916216ec8";async function g(o){return(await d.get(m,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${i}" alt="${e}" />
        </a>
        <div class="image-info">
          <p>Likes: ${t}</p>
          <p>Views: ${n}</p>
          <p>Comments: ${u}</p>
          <p>Downloads: ${p}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function w(){l.style.display="block"}function S(){l.style.display="none"}const q=document.querySelector(".form");q.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}b(),w();try{const i=await g(r);if(i.hits.length===0){a.info({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}L(i.hits)}catch{a.error({message:"Oops! Something went wrong.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
