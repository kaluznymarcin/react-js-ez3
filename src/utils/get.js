import defaultTo from './defaultTo';
import path from './path';

const get = (defaultValue, pathAsStrOrArr, object) =>
  defaultTo(defaultValue, path(pathAsStrOrArr, object));

export default get;
