import {
  UNSPLASH_BASE_URL,
  UNSPLASH_COMMON_HEADERS
} from '../constants';

const options = {
  headers: UNSPLASH_COMMON_HEADERS
}

/* async function async_fn() {

} */

const apiFetch = url => fetch(`${UNSPLASH_BASE_URL}${url}`, options)
  .then(response => response.json());

const asyncApiFetch = async url => {
  const response = await fetch(`${UNSPLASH_BASE_URL}${url}`, options);
  const data = await response.json();

  return data;
}

export {
  asyncApiFetch
}

export default apiFetch;
