import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector('ul.gallery');
const items = createGallery(galleryItems);




function createGallery(galleryItems) {
  return galleryItems.map(({preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join(``)

}

galleryConteiner.insertAdjacentHTML('beforeend', items)

galleryConteiner.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(e) {
    const imageSource = e.target.dataset.source;
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    } else {
var lightbox = new SimpleLightbox('.gallery a', { 
captionsData: "alt",
captionDelay: 250,
});
    }
}
