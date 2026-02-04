const store = require("../data/store");

const getAllItems = () => store.getItems();

const getItemById = (itemId) => {
  return store.getItems().find((i) => i.id === itemId);
};

const createItem = (name) => {
  const newItem = { id: store.getNextId(), name };
  const items = store.getItems();
  items.push(newItem);
  return newItem;
};

const updateItem = (id, name) => {
  const item = getItemById(id);
  if (!item) return null;
  item.name = name;
  return item;
};

const deleteItem = (id) => {
  const items = store.getItems();
  const newItems = items.filter((i) => i.id !== id);
  store.setItems(newItems);
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
