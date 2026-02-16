
export function renderImages(images) {
    const gallery = document.querySelector(".gallery");
    const markup = images.map(image => `
        <div class="photo-card">
            <a href="${image.largeImageURL}" class="lightbox">
                <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <div class="info">
                <p><b>Likes:</b> ${image.likes}</p>
                <p><b>Views:</b> ${image.views}</p>
                <p><b>Comments:</b> ${image.comments}</p>
                <p><b>Downloads:</b> ${image.downloads}</p>
            </div>
        </div>
    `).join("");
    gallery.innerHTML = markup;
}

