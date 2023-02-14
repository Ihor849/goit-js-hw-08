// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
// / +++++++++++++++++++++  В А Р И А Н Т - 1 через С Т Р О К У ================
const gallery = document.querySelector('.gallery');
const imageMarkup = createImageCardsMarkup(galleryItems);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  
    <a class="gallery__link" href = "${original}" >
      <img
        class= "gallery__image"
        src= "${preview}"
        alt= "${description}"
        title= "Beautiful Image"
      />
    </a>`;
    })
    .join('');
}
gallery.insertAdjacentHTML('beforeend', imageMarkup);

new SimpleLightbox('.gallery a', {
  /* options */
  captionPosition: 'bottom',
  captionDelay: '250',
  captionsData: 'alt',
});
