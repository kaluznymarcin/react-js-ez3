import apiFetch, { asyncApiFetch } from './apiFetch';
import fillPath from '../utils/fillPath';

const COLLECTIONS_PATH = '/collections';

const fetchCollections = (params, success) => {
  const output = asyncApiFetch(fillPath(COLLECTIONS_PATH, params));
  return output.then(success);
}
  /* apiFetch(fillPath(COLLECTIONS_PATH, params))
  .then(success); */

export default fetchCollections;
