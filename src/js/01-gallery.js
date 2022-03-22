// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkUp = addGalleryItems(galleryItems);

function addGalleryItems(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');

}

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);

gallery.addEventListener('click', handleOpenModal);

function handleOpenModal(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    modalShow(event.target.dataset.source);
}

let instance;

function modalShow(src) {
  instance = basicLightbox.create(
    `<div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>`,
    {
      onShow: instance => {
        addListener();
      },
      onClose: instance => {
        removeListener();
      },
    },
  );
    instance.show();
const modal = document.querySelector('.basicLightbox');
modal.addEventListener('click', handleCloseModal);
}

function handleCloseModal() {
    instance.close();
}



function addListener() {
  window.addEventListener('keydown', handleEscClick);
}

function handleEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', handleEscClick);
}