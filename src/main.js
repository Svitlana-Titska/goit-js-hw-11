import { getImagesByQuery } from './pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, no images found. Please try again!',
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});

import 'css-loaders';
