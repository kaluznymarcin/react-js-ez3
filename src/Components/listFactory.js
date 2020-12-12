const listFactory = (Cmp, list) =>
  (Array.isArray(list)
    && list.map(
      (item, index) => <Cmp
        key={`col-${item.id}-${index}`}
        data={item}
      />
    ))
    || [];

    export default listFactory;
