const service = require("../../src/services/items.service");
const store = require("../../src/data/store");

beforeEach(() => store.resetStore());

describe("Items Service", () => {
  test("createItem should add item", () => {
    const item = service.createItem("B");

    expect(item.id).toBe(1);
    expect(service.getAllItems().length).toBe(1);
  });

  test("getItemById should return correct item", () => {
    const item = service.createItem("A");
    const found = service.getItemById(item.id);

    expect(found.name).toBe("A");
  });

  test("updateItem should modify item", () => {
    const item = service.createItem("A");
    service.updateItem(item.id, "B");

    expect(service.getItemById(item.id).name).toBe("B");
  });

  test("deleteItem should remove item", () => {
    const item = service.createItem("A");
    service.deleteItem(item.id);

    expect(service.getAllItems().length).toBe(0);
  });
});
