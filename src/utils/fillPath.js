const rxFillPath = (path, params) => path.replace(
  /[:*](\w+)/g,
  ($0, $1) => {
    return params[$1]
  }
);

const fillPath = (path, params) => Object.entries(params).reduce(
  (acc, [key, value]) => acc.replace(`:${key}`, value),
  path
);

export {
  fillPath,
  rxFillPath
};

export default rxFillPath;
