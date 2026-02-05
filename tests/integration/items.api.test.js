const request = require("supertest");
const app = require("../../src/app");
const store = require("../../src/data/store");

beforeEach(() => store.resetStore());

describe("Items API Integration", () => {
  test("full CRUD flow", async () => {
    const create = await request(app).post("/items").send({ name: "X" });
    expect(create.statusCode).toBe(201);

    const id = create.body.id;

    const get = await request(app).get(`/items/${id}`);
    expect(get.body.name).toBe("X");

    await request(app).put(`/items/${id}`).send({ name: "Y" });

    const updated = await request(app).get(`/items/${id}`);
    expect(updated.body.name).toBe("Y");

    await request(app).delete(`/items/${id}`);

    const deleted = await request(app).get(`/items/${id}`);
    expect(deleted.statusCode).toBe(404);
  });
});
