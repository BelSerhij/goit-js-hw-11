import{a as u,S as d,i as a}from"./assets/vendor--6n4cVRZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="54669575-c2336e168543ddb8f43b85352",m="https://pixabay.com/api/",y=async t=>(await u.get(m,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits,g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(t,s){const n=t.map(r=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="info">
                <p class="info-item"><b>Likes</b><span>${r.likes}</span></p>
                <p class="info-item"><b>Views</b><span>${r.views}</span></p>
                <p class="info-item"><b>Comments</b><span>${r.comments}</span></p>
                <p class="info-item"><b>Downloads</b><span>${r.downloads}</span></p>
            </div>
        </li>
    `).join("");s.innerHTML=n,g.refresh()}function b(t){t.innerHTML=""}function L(t){t.style.display="block"}function w(t){t.style.display="none"}const l=document.getElementById("datetime-picker"),v=document.querySelector(".form"),c=document.querySelector(".gallery"),p=document.querySelector(".loader");v.addEventListener("submit",async t=>{t.preventDefault();const s=l.value.trim();if(!s){a.warning({message:"Введіть запит!",position:"topRight"});return}b(c),L(p);try{const n=await y(s);if(n.length===0){a.error({message:"На жаль, за вашим запитом нічого не знайдено.",position:"topRight"});return}h(n,c),l.value=""}catch(n){a.error({message:"Помилка сервера!",position:"topRight"}),console.error(n)}finally{w(p)}});
//# sourceMappingURL=index.js.map
