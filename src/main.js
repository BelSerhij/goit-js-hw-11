import { getImagesByQuery } from './js/pixabay-api.js'; 
import { renderImages, clearGallery, showLoader, hideLoader } from './js/render-functions.js'; 

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.getElementById('datetime-picker');
const form = document.querySelector('.form'); 
const galleryContainer = document.querySelector(".gallery");
const loaderElement = document.querySelector('.loader'); 

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = input.value.trim();

    if (!query) {
        iziToast.warning({ message: 'Введіть запит!', position: 'topRight' });
        return;
    }

    clearGallery(galleryContainer);
    showLoader(loaderElement);

    try {
        const images = await getImagesByQuery(query);

        if (images.length === 0) {
            iziToast.error({
                message: 'На жаль, за вашим запитом нічого не знайдено.',
                position: 'topRight'
            });
            return;
        }

        renderImages(images, galleryContainer);
        input.value = ''; 
        
    } catch (error) {
        iziToast.error({ message: 'Помилка сервера!', position: 'topRight' });
        console.error(error);
    }
    finally {
         hideLoader(loaderElement);
    }
});

