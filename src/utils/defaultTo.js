const defaultTo = (defaultValue, value) =>
  (
    (value === null || value === undefined || value !== value)
      ? defaultValue
      : value
  );

export default defaultTo;
