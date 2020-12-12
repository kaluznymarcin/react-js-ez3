// zobacz h1 ex_4.js
const path = (path, object) => {
  const arrayPath = (typeof path === 'string' && path.split(/\./gm))
    || (Array.isArray(path) && path) || [];

  return arrayPath.reduce(
    (parent, name) => (
      parent
      && /^(object|function)$/.test(typeof parent) ? parent[name] : undefined
    ), object
  );
};

export default path;

