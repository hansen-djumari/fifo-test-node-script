// Use Case 1 = User create sales invoices using the same batch of stocks

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
