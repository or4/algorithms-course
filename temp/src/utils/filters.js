import map from 'lodash/map';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

const isSelected = (filters, filterName) => (
  some(filters, filter => filter.name === filterName && filter.selected)
);
const getCountOfSelected = filters => (
  reduce(filters, (prev, item) => (item.selected ? prev + 1 : prev), 0)
);
const getFilters = (filters, filterNameArray, selected) => (
  map(filters, (filter) => {
    if (some(filterNameArray, filterName => filter.name === filterName)) {
      return { ...filter, selected };
    }
    return filter;
  })
);

const toggleFilter = (filters, filterName) => {
  if (filterName === 'All') { // если включен all - отключаем, иначе включаем
    if (isSelected(filters, filterName)) {
      return map(filters, filter => ({ ...filter, selected: false }));
    }
    return map(filters, filter => ({ ...filter, selected: true }));
  }

  // отключаем фильтр и отключаем all
  if (isSelected(filters, filterName)) {
    return getFilters(filters, [filterName, 'All'], false);
  }

  // включаем all, если все фильтры активированы
  const countOfSelected = getCountOfSelected(filters);
  const shouldBeSelected = filters.length - 2; // 2 because filter "All" and current filter
  if (countOfSelected === shouldBeSelected) {
    return getFilters(filters, [filterName, 'All'], true);
  }

  // включаем фильтр
  return getFilters(filters, [filterName], true);
};

export default toggleFilter;
