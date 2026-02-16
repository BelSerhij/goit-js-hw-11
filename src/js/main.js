
import { getImagesByQuery } from './pixabay.js'; 
import { renderImages } from './render-functions.js'; 

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.getElementById('datetime-picker');
const form = document.querySelector('.form'); 
const gallery = document.querySelector(".gallery");
const loader = document.querySelector('.loader'); 

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = input.value.trim();

    if (!query) {
        iziToast.warning({ message: 'Введіть запит!', position: 'topRight' });
        return;
    }

    gallery.innerHTML = '<p>Loading images, please wait...</p>'; 
    loader.classList.add('is-visible');

    try {
        const images = await getImagesByQuery(query);

        if (images.length === 0) {
            gallery.innerHTML = '';
            iziToast.error({
                message: 'На жаль, за вашим запитом нічого не знайдено.',
                position: 'topRight'
            });
            return;
        }

        renderImages(images);
        lightbox.refresh();
        input.value = ''; 
        
    } catch (error) {
        gallery.innerHTML = '';
        iziToast.error({ message: 'Помилка сервера!', position: 'topRight' });
        console.error(error);
    }
    finally {
        loader.classList.remove('is-visible');
    }
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
