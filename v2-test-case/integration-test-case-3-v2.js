// Use Case 3 = User create a sales invoice using >1 batch of stocks

const axios = require("axios");

let arrData = [
  JSON.stringify({
    created_at: "2024-08-01T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 100,
    stock_document_type: "Buy",
    price: 30000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-02T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 20,
    stock_document_type: "Sold",
    price: 35000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-03T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 10,
    stock_document_type: "Sold",
    price: 38000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-02T12:30:00",
    types: "output",
    location_id: "jakarta",
    qty: 5,
    stock_document_type: "Sold",
    price: 40000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-04T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 150,
    stock_document_type: "Buy",
    price: 28000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-05T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 75,
    stock_document_type: "Sold",
    price: 33000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
];

(async () => {
  for (let data of arrData) {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/invoice",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios.request(config);
  }
})();
