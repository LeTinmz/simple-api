let items = [];
let id = 1;

const resetStore = () => {
  items = [];
  id = 1;
};

module.exports = {
  getItems: () => items,
  setItems: (newItems) => {
    items = newItems;
  },
  getNextId: () => id++,
  resetStore,
};
