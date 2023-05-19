const supertest = require("supertest");
const app = require("../app.js");
// const truncate = require("../utils/truncate.js");

// truncate.user();

const component = {
  name: "Kayu",
  description: "Merupakan Material Gergaji",
};
const component_id = 1;
const invalid_component_id = 99;

// getAll
describe("Test /components endpoint", () => {
  // postiive
  test("Positive: get all data", async () => {
    try {
      const res = await supertest(app).get("/components");

      console.log(res.body);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status", true);
      expect(res.body).toHaveProperty("message", "Success get all Component");
      expect(res.body).toHaveProperty("data");
      expect(Array.isArray(res.body.data)).toBe(true);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  //   negative
});

// getSingle
describe("Test /components/:component_id endpoint", () => {
  // postiive
  test("Positive: component_id is valid", async () => {
    try {
      const res = await supertest(app).get(`/components/${component_id}`);

      console.log(res.body);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data).toHaveProperty("name");
      expect(res.body.data).toHaveProperty("description");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Success get Component detail");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  //   negative
  test("Negative: component_id is not valid", async () => {
    try {
      const res = await supertest(app).get(
        `/components/${invalid_component_id}`
      );

      console.log(res.body);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe(
        `Can't find Component with id ${invalid_component_id}`
      );
      expect(res.body.data).toBe(null);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});

// create
describe("Test /components endpoint", () => {
  // Positive
  test("Positive: valid data", async () => {
    try {
      const res = await supertest(app).post("/components").send(component);

      console.log(res.body);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data).toHaveProperty("name");
      expect(res.body.data).toHaveProperty("description");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Success create new Component");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  // negative
  test("Negative: data tidak lengkap", async () => {
    try {
      const res = await supertest(app).post("/components").send({
        description: "Merupakan Material Gergaji",
      });

      console.log(res.body);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("name is required");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});

// update
describe("Test /components/:component_id endpoint", () => {
  // Positive
  test("Positive: valid component id", async () => {
    try {
      const res = await supertest(app).put(`/components/${component_id}`).send({
        description:
          "Merupakan Material Gergaji yang berkualitas sangat tinggi",
      });

      console.log(res.body);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Success update Component");
      expect(res.body.data).toStrictEqual([1]);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  // negative
  test("Negative: invalid component id", async () => {
    try {
      const res = await supertest(app)
        .put(`/components/${invalid_component_id}`)
        .send({
          name: "Kayu Jati",
          description: "Merupakan Material Gergaji yang berkualitas sangat tinggi",
        });

      console.log(res.body);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe(
        `Cant Find Component with id ${invalid_component_id}`
      );
      expect(res.body.data).toBe(null);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});

// delete
describe("Test /components/:component_id endpoint", () => {
  // Positive
  // test("Positive: valid component id", async () => {
  //   try {
  //     const res = await supertest(app).delete(`/components/${component_id}}`);

  //     console.log(res.body);

  //     expect(res.statusCode).toBe(200);
  //     expect(res.body).toHaveProperty("status");
  //     expect(res.body).toHaveProperty("message");
  //     expect(res.body).toHaveProperty("data");
  //     expect(res.body.status).toBe(true);
  //     expect(res.body.message).toBe(
  //       `Success delete Component with id ${component_id}`
  //     );
  //     expect(res.body.data).toStrictEqual(1);
  //   } catch (error) {
  //     expect(error).toBe("error");
  //   }
  // });
  // negative 1
  test("Negative: component is used", async () => {
    try {
      const res = await supertest(app).delete(`/components/${component_id}`);

      console.log(res.body);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("Component is used in Product");
      expect(res.body.data).toBe(null);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  // negative 2
  test("Negative: invalid component id", async () => {
    try {
      const res = await supertest(app).delete(
        `/components/${invalid_component_id}`
      );

      console.log(res.body);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe(
        `Cant Find Component with id ${invalid_component_id}`
      );
      expect(res.body.data).toBe(null);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});
