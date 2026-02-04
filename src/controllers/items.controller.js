const service = require("../services/items.service");

exports.getAll = (req, res) => {
  res.json(service.getAllItems());
};

exports.getOne = (req, res) => {
  const item = service.getItemById(parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
};

exports.create = (req, res) => {
  const item = service.createItem(req.body.name);
  res.status(201).json(item);
};

exports.update = (req, res) => {
  const item = service.updateItem(parseInt(req.params.id), req.body.name);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
};

exports.remove = (req, res) => {
  service.deleteItem(parseInt(req.params.id));
  res.status(204).send();
};
