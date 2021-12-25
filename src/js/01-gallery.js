// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

const galleryList = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup);

const lightboxOptions = {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
};

const gallery = new SimpleLightbox('.gallery a', lightboxOptions);

console.log(galleryItems);

console.log(galleryItems);
