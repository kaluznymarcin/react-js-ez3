import { defaultTo, path } from '../../utils';

// mozna napisac selector ogolny przyjmujacy slownik tj
// {
//    pole: path czyli
//    title: 'title',
//    img: { src: 'cover_photo.urls.small'} (funkcja to obslugujaca powinna miec rekursje lub inne sposoby obrobienia danych)
// }

// sloenik powyzszy nie zawiera wartosci domyslnej ale mozna na rozne sposoby to utworzyc np.
/*
  {
    title: {
      path: 'title',
      default: 'No name'
    }
  }
  albo

  {
    title: ['title', 'No name']
  }

  wtedy funckaj ogolna selectora moze wygladac tak:
  const isObject = cos => /Object/.test(Object.prototype.toString.call(cos))
  const selector = (maps, data) => {
    return Object.entries(maps).reduce(
      (acc, [key, value]) => {
        acc[key] = isObject(value) ? selector(value, data) : path(value, data);

        return acc;
      },
      {}
    );
  }
*/

const selector = data => ({
  title: path('title', data),
  img: {
    src: defaultTo('', path('cover_photo.urls.small', data))
  },
  total_photos: defaultTo(0, path('total_photos', data)),
});

export default selector;
