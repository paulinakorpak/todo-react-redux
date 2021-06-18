export const FILTER_ALL = 'All';
export const FILTER_ACTIVE = 'Active';
export const FILTER_DONE = 'Done';

export const filters = [FILTER_ALL, FILTER_ACTIVE, FILTER_DONE];

export const filtersMapping = {
  [FILTER_ALL]: () => true,
  [FILTER_ACTIVE]: (item) => !item.completed,
  [FILTER_DONE]: (item) => item.completed,
};
