import{S as m,i as p}from"./assets/vendor-4a64600c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="42558168-62173c93aab0d4cbf34bb4fab",g="https://pixabay.com/api/";function y(s){const r=`${g}?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})}function d(s,r){const o=s.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:c,comments:f,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${n}" alt="${t}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${i}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${c}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${f}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${u}</p></li>
          </ul>
        </li>`).join("");r.innerHTML=o}const L="/goit-js-hw-11/assets/error-icon-4ed38f6a.png",a=document.querySelector(".form"),b=document.querySelector(".search-input"),l=document.querySelector(".gallery"),w=new m(".gallery a",{captionsData:"alt",captionDelay:150,captionsPosition:"bottom"});a.addEventListener("submit",$);function $(s){s.preventDefault(),l.innerHTML='<span class="loader"></span>',y(b.value).then(r=>{const o=r.hits;if(o.length===0)throw new Error;d(o,l),w.refresh()}).catch(()=>{l.innerHTML="",p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight",timeout:5e3,progressBar:!0,close:!0,iconUrl:L,messageColor:"#fafafb",iconColor:"#fafafb",backgroundColor:"#FF544B"})}).finally(()=>{a.reset()})}
//# sourceMappingURL=commonHelpers.js.map
