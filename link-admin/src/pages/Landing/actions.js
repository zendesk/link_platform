const actionTypes = {
  UPDATE_TAXONOMY_FILTERS: 'UPDATE_TAXONOMY_FILTERS',
};

export default {
  updateTaxonomyFilters: taxonomy => ({
    type: actionTypes.UPDATE_TAXONOMY_FILTERS,
    taxonomy,
  }),
};

export { actionTypes };
