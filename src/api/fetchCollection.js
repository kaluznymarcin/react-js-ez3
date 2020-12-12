import apiFetch from './apiFetch';
import fillPath from '../utils/fillPath';

const COLLECTION_PATH = '/collections/:id/photos';

const fetchCollection = (params, success) =>
  apiFetch(fillPath(COLLECTION_PATH, params))
  .then(success);

export default fetchCollection;
