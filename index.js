import{a as d,i as a,S as u}from"./assets/vendor-F1LeQrrD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="54669575-c2336e168543ddb8f43b85352",f="https://pixabay.com/api/",g=async i=>(await d.get(f,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;function y(i){const o=document.querySelector(".gallery"),s=i.map(r=>`
        <div class="photo-card">
            <a href="${r.largeImageURL}" class="lightbox">
                <img src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="info">
                <p><b>Likes:</b> ${r.likes}</p>
                <p><b>Views:</b> ${r.views}</p>
                <p><b>Comments:</b> ${r.comments}</p>
                <p><b>Downloads:</b> ${r.downloads}</p>
            </div>
        </div>
    `).join("");o.innerHTML=s}const l=document.getElementById("datetime-picker"),h=document.querySelector(".form"),c=document.querySelector(".gallery"),p=document.querySelector(".loader");h.addEventListener("submit",async i=>{i.preventDefault();const o=l.value.trim();if(!o){a.warning({message:"Введіть запит!",position:"topRight"});return}c.innerHTML="<p>Loading images, please wait...</p>",p.classList.add("is-visible");try{const s=await g(o);if(s.length===0){c.innerHTML="",a.error({message:"На жаль, за вашим запитом нічого не знайдено.",position:"topRight"});return}y(s),b.refresh(),l.value=""}catch(s){c.innerHTML="",a.error({message:"Помилка сервера!",position:"topRight"}),console.error(s)}finally{p.classList.remove("is-visible")}});const b=new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
