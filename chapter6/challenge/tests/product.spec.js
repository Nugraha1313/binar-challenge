const supertest = require("supertest");
const app = require("../app.js");
// const truncate = require("../utils/truncate.js");

// truncate.user();

const product = {
  name: "Meja Kayu",
  description: "Merupakan Material Gergaji",
  component_id: 1
};
const product_id = 1;
const invalid_product_id = 99;

// getAll
describe("Test /products endpoint", () => {
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
describe("Test /products/:product_id endpoint", () => {
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
      const res = await supertest(app).get(
        `/products/${invalid_product_id}`
      );

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
describe("Test /products endpoint", () => {
  // Positive
  test("Positive: valid data", async () => {
    try {
      const res = await supertest(app).post("/products").send(product);

      console.log(res.body);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data).toHaveProperty("name");
      expect(res.body.data).toHaveProperty("quantity");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("Success create new Product");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
  // negative
  test("Negative: data tidak lengkap", async () => {
    try {
      const res = await supertest(app).post("/products").send({
        name: "Meja Kerja",
      });

      console.log(res.body);

      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("Data Tidak Lengkap");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});

// update
// describe("Test /components/:component_id endpoint", () => {
//   // Positive
//   test("Positive: valid component id", async () => {
//     try {
//       const res = await supertest(app).put(`/components/${component_id}`).send({
//         description:
//           "Merupakan Material Gergaji yang berkualitas sangat tinggi",
//       });

//       console.log(res.body);

//       expect(res.statusCode).toBe(201);
//       expect(res.body).toHaveProperty("status");
//       expect(res.body).toHaveProperty("message");
//       expect(res.body).toHaveProperty("data");
//       expect(res.body.status).toBe(true);
//       expect(res.body.message).toBe("Success update Component");
//       expect(res.body.data).toStrictEqual([1]);
//     } catch (error) {
//       expect(error).toBe("error");
//     }
//   });
//   // negative
//   test("Negative: invalid component id", async () => {
//     try {
//       const res = await supertest(app)
//         .put(`/components/${invalid_component_id}`)
//         .send({
//           name: "Kayu Jati",
//           description:
//             "Merupakan Material Gergaji yang berkualitas sangat tinggi",
//         });

//       console.log(res.body);

//       expect(res.statusCode).toBe(400);
//       expect(res.body).toHaveProperty("status");
//       expect(res.body).toHaveProperty("message");
//       expect(res.body).toHaveProperty("data");
//       expect(res.body.status).toBe(false);
//       expect(res.body.message).toBe(
//         `Cant Find Component with id ${invalid_component_id}`
//       );
//       expect(res.body.data).toBe(null);
//     } catch (error) {
//       expect(error).toBe("error");
//     }
//   });
// });

// delete
// describe("Test /components/:component_id endpoint", () => {
//   // Positive
//   // test("Positive: valid component id", async () => {
//   //   try {
//   //     const res = await supertest(app).delete(`/components/${component_id}}`);

//   //     console.log(res.body);

//   //     expect(res.statusCode).toBe(200);
//   //     expect(res.body).toHaveProperty("status");
//   //     expect(res.body).toHaveProperty("message");
//   //     expect(res.body).toHaveProperty("data");
//   //     expect(res.body.status).toBe(true);
//   //     expect(res.body.message).toBe(
//   //       `Success delete Component with id ${component_id}`
//   //     );
//   //     expect(res.body.data).toStrictEqual(1);
//   //   } catch (error) {
//   //     expect(error).toBe("error");
//   //   }
//   // });
//   // negative 1
//   test("Negative: component is used", async () => {
//     try {
//       const res = await supertest(app).delete(`/components/${component_id}`);

//       console.log(res.body);

//       expect(res.statusCode).toBe(400);
//       expect(res.body).toHaveProperty("status");
//       expect(res.body).toHaveProperty("message");
//       expect(res.body).toHaveProperty("data");
//       expect(res.body.status).toBe(false);
//       expect(res.body.message).toBe("Component is used in Product");
//       expect(res.body.data).toBe(null);
//     } catch (error) {
//       expect(error).toBe("error");
//     }
//   });
//   // negative 2
//   test("Negative: invalid component id", async () => {
//     try {
//       const res = await supertest(app).delete(
//         `/components/${invalid_component_id}`
//       );

//       console.log(res.body);

//       expect(res.statusCode).toBe(400);
//       expect(res.body).toHaveProperty("status");
//       expect(res.body).toHaveProperty("message");
//       expect(res.body).toHaveProperty("data");
//       expect(res.body.status).toBe(false);
//       expect(res.body.message).toBe(
//         `Cant Find Component with id ${invalid_component_id}`
//       );
//       expect(res.body.data).toBe(null);
//     } catch (error) {
//       expect(error).toBe("error");
//     }
//   });
// });
