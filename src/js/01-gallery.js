// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
import { addGalleryItems } from './helpers/01-create-markup';
import { handleOpenModal } from './helpers/01-open-modal';

const gallery = document.querySelector('.gallery');
const galleryMarkUp = addGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);

gallery.addEventListener('click', handleOpenModal);


        

