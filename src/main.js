import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import { fetchImages } from '/js/pixabay-api.js';
import { renderImages } from '/js/render-functions.js';

const FORM = document.querySelector('.form');
const INPUT = document.querySelector('.search-input');
const GALLERY = document.querySelector('.gallery');

const SIMPLY_LIGHTBOX = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionsPosition: 'bottom',
});

FORM.addEventListener('submit', searchPhotos);

function searchPhotos(event) {
  event.preventDefault();

  const query = INPUT.value;

  fetchImages(query)
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        throw new Error();
      }

      renderImages(images, GALLERY);

      SIMPLY_LIGHTBOX.refresh();
    })
    .catch(() => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 5000,
        progressBar: true,
        close: true,
        messageColor: '#000',
        backgroundColor: '#FF544B',
      });
    })
    .finally(() => {
      FORM.reset();
    });
}
