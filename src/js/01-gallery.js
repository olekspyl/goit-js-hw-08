// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

// Change code below this line
const imgs = galleryItems
    .map(galleryItem => {
        const itemEl = `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
        <img src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}" 
        class="gallery__image"/>
        </a>
        </div>` 
        return itemEl;
    })
    .join(" ");

const listEl = document.querySelector(".gallery");
listEl.insertAdjacentHTML('afterbegin', imgs);

const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener('click', onImageClick);

let instance;

function onImageClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image"))
        return;
   

     instance = basicLightbox
         .create(`<img src="${event.target.dataset.source}" width="800" height="600">`,
             {onShow: (instance) => {window.addEventListener('keydown', onEscPress)},
            onClose: (instance) => {window.removeEventListener('keydown', onEscPress)}
})

instance.show()
}

galleryContainer.addEventListener('keydown', onEscPress)
function onEscPress(event) {
    if (event.code === 'Escape') {
        instance.close()
    }
}

