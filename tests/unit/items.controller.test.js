const controller = require("../../src/controllers/items.controller");
const service = require("../../src/services/items.service");

jest.mock("../../src/services/items.service");

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn();
  res.send = jest.fn();
  return res;
};

describe("Items Controller", () => {
  test("getAll should return items", () => {
    const req = {};
    const res = mockRes();

    service.getAllItems.mockReturnValue([{ id: 1, name: "A" }]);

    controller.getAll(req, res);

    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: "A" }]);
  });

  test("getOne should return 404 if not found", () => {
    const req = { params: { id: "1" } };
    const res = mockRes();

    service.getItemById.mockReturnValue(null);

    controller.getOne(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
