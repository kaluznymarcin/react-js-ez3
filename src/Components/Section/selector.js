import { defaultTo, path } from '../../utils';

const selector = data => ({
  img: {
    src: defaultTo('', path('urls.small', data)),
    alt: defaultTo('', path('alt_description', data))
  },
  description: defaultTo('', path('description', data))
});

export default selector;
