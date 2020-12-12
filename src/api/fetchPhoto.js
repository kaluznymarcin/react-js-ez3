import apiFetch from './apiFetch';
import fillPath from '../utils/fillPath';

const PHOTO_PATH = '/photos/:id';

const fetchPhoto = (params, success) =>
  apiFetch(fillPath(PHOTO_PATH, params))
  .then(success);

export default fetchPhoto;
