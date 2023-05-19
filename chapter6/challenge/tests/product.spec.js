const supertest = require("supertest");
const app = require("../app.js");
// const truncate = require("../utils/truncate.js");

// truncate.user();
const product_id = 1;
const component_id = 1;
const invalid_product_id = 99;
const invalid_component_id = 99;

const product = {
  name: "Meja Kayu",
  quantity: 100,
  component_id: 1,
};

const invalidProduct = {
  name: "Meja Besi",
  quantity: 100,
  component_id: invalid_component_id,
};

// getAll
describe("[GET] /products endpoint", () => {
  // postiive
  test("Positive: get all data", async () => {
    try {
      const res = await supertest(app).get("/products");

      console.log(res.body);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status", true);
      expect(res.body).toHaveProperty("message", "Success get all product");
      expect(res.body).toHaveProperty("data");
      expect(Array.isArray(res.body.data)).toBe(true);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  //   negative
});

// getSingle
describe("[GET] /products/:product_id endpoint", () => {
  // postiive
  test("Positive: product_id is valid", async () => {
    try {
      const res = await supertest(app).get(`/products/${product_id}`);

      console.log(res.body);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data).toHaveProperty("name");
      expect(res.body.data).toHaveProperty("quantity");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Success get product detail");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  //   negative
  test("Negative: product_id is not valid", async () => {
    try {
      const res = await supertest(app).get(`/products/${invalid_product_id}`);

      console.log(res.body);

      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe(
        `Can't find product with id ${invalid_product_id}`
      );
      expect(res.body.data).toBe(null);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});

// create
describe("[POST] /products endpoint", () => {
  // Positive
  test("Positive: valid data", async () => {
    try {
      const res = await supertest(app).post("/products").send(product);

      console.log(res.body);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data[0]).toHaveProperty("id");
      expect(res.body.data[0]).toHaveProperty("name");
      expect(res.body.data[0]).toHaveProperty("quantity");
      expect(res.body.data[1]).toHaveProperty("component_id");
      expect(res.body.data[1]).toHaveProperty("product_id");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Success create new Product");
      expect(Array.isArray(res.body.data)).toBe(true);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  // negative 1
  test("Negative: data tidak lengkap", async () => {
    try {
      const res = await supertest(app).post("/products").send({
        name: "Meja Kerja",
      });

      console.log(res.body);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("Data Tidak Lengkap");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  //   negative 2
  test("Negative: component_id invalid", async () => {
    try {
      const res = await supertest(app).post("/products").send(invalidProduct);

      console.log(res.body);

      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe(
        `Can't find component with id ${invalidProduct.component_id}`
      );
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});

// update
describe("[PUT] /products/:product_id endpoint", () => {
//   Positive
  test("Positive: valid product_id", async () => {
    try {
      const res = await supertest(app).put(`/products/${product_id}`).send({
        quantity: 225,
      });

      console.log(res.body);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Success update product");
      expect(res.body.data).toStrictEqual([1]);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
    // negative 1
    test("Negative: invalid product id", async () => {
      try {
        const res = await supertest(app)
          .put(`/products/${invalid_product_id}`)
          .send({
            quantity: 225,
          });

        console.log(res.body);

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("message");
        expect(res.body).toHaveProperty("data");
        expect(res.body.status).toBe(false);
        expect(res.body.message).toBe(
          `Cant Find product with id ${invalid_product_id}`
        );
        expect(res.body.data).toBe(null);
      } catch (error) {
        expect(error).toBe("error");
      }
    });
    // negative 2
    test("Negative: invalid component_id", async () => {
      try {
        const res = await supertest(app)
          .put(`/products/${product_id}`)
          .send({
            component_id: invalid_component_id
          });

        console.log(res.body);

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("message");
        expect(res.body).toHaveProperty("data");
        expect(res.body.status).toBe(false);
        expect(res.body.message).toBe(
          `Can't find component with id ${invalid_component_id}`
        );
        expect(res.body.data).toBe(null);
      } catch (error) {
        expect(error).toBe("error");
      }
    });
});

// delete
describe("[DELETE] /products/:product_id endpoint", () => {
  // Positive
//   test("Positive: valid product id", async () => {
//     try {
//       const res = await supertest(app).delete(`/products/${product_id}`);

//       console.log(res.body);

//       expect(res.statusCode).toBe(200);
//       expect(res.body).toHaveProperty("status");
//       expect(res.body).toHaveProperty("message");
//       expect(res.body).toHaveProperty("data");
//       expect(res.body.status).toBe(true);
//       expect(res.body.message).toBe(
//         `Success delete product with id ${product_id}`
//       );
//       expect(res.body.data).toStrictEqual(1);
//     } catch (error) {
//       expect(error).toBe("error");
//     }
//   });
  // negative 2
  test("Negative: invalid product_id", async () => {
    try {
      const res = await supertest(app).delete(
        `/products/${invalid_product_id}`
      );

      console.log(res.body);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe(
        `Cant Find product with id ${invalid_product_id}`
      );
      expect(res.body.data).toBe(null);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});
