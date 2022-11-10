// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => ` <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

let instance;

function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.description}"/> `,
    {
      onShow: instance => {
        document.addEventListener('keydown', onModalClose);
      },
      onClose: instance => {
        document.removeEventListener('keydown', onModalClose);
      },
    }
  );
  instance.show();

  {
  }
}

function onModalClose(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
gallery.addEventListener('click', onClick);
