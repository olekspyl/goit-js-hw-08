// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line


// Change code below this line
const imgs = galleryItems
    .map(galleryItem => {
        const itemEl = `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" /></a>` 
        return itemEl;
    })
    .join(" ");

const listEl = document.querySelector(".gallery");
listEl.insertAdjacentHTML('afterbegin', imgs);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener('click', onImageClick);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 250,

})

// function onImageClick(event) {
//     event.preventDefault();
//     if (!event.target.classList.contains("gallery__image"))
//         return;
// }



// galleryContainer.addEventListener('keydown', onEscPress)
// function onEscPress(event) {
//     if (event.code === 'Escape') {
//         instance.close()
//     }
// }
    





