import{S as f,i as m}from"./assets/vendor-4a64600c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="42558168-62173c93aab0d4cbf34bb4fab",h="https://pixabay.com/api/";function g(i){const r=`${h}?key=${p}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()})}function y(i,r){const o=i.map(({webformatURL:s,largeImageURL:e,tags:t,likes:l,views:a,comments:c,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${s}" alt="${t}" />
          </a>

          <ul class="gallery-info-list">
            <li class="gallery-info-list-item"><h4>Likes</h4><p>${l}</p></li>
            <li class="gallery-info-list-item"><h4>Views</h4><p>${a}</p></li>
            <li class="gallery-info-list-item"><h4>Comments</h4><p>${c}</p></li>
            <li class="gallery-info-list-item"><h4>Downloads</h4><p>${u}</p></li>
          </ul>
        </li>`).join("");r.innerHTML=o}const n=document.querySelector(".form"),d=document.querySelector(".search-input"),L=document.querySelector(".gallery"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionsPosition:"bottom"});n.addEventListener("submit",w);function w(i){i.preventDefault();const r=d.value;g(r).then(o=>{const s=o.hits;if(s.length===0)throw new Error;y(s,L),b.refresh()}).catch(()=>{m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,progressBar:!0,close:!0,messageColor:"#000",backgroundColor:"#FF544B"})}).finally(()=>{n.reset()})}
//# sourceMappingURL=commonHelpers.js.map
