// Use Case 3 = User create a sales invoice using >1 batch of stocks

const axios = require("axios");

let arrData = [
  JSON.stringify({
    transaction_date: "2024-08-01T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 100,
    stock_document_type: "Buy",
    stock_movement_id: "123",
    price: 30000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    transaction_date: "2024-08-02T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 20,
    stock_document_type: "Sold",
    stock_movement_id: "123",
    price: 35000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    transaction_date: "2024-08-03T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 10,
    stock_document_type: "Sold",
    stock_movement_id: "123",
    price: 38000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    transaction_date: "2024-08-02T12:30:00",
    types: "output",
    location_id: "jakarta",
    qty: 5,
    stock_document_type: "Sold",
    stock_movement_id: "123",
    price: 40000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    transaction_date: "2024-08-04T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 150,
    stock_document_type: "Buy",
    stock_movement_id: "123",
    price: 28000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    transaction_date: "2024-08-05T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 75,
    stock_document_type: "Sold",
    stock_movement_id: "123",
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
      url: "http://localhost:8080/invoice/incoming",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios.request(config);
  }
})();
