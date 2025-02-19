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
  JSON.stringify({
    created_at: "2024-08-03T12:30:00",
    types: "output",
    location_id: "jakarta",
    qty: 80,
    stock_document_type: "Sold",
    price: 33000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-06T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 100,
    stock_document_type: "Sold",
    price: 33000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-07T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 25,
    stock_document_type: "Buy",
    price: 32000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-05T12:30:00",
    types: "input",
    location_id: "jakarta",
    qty: 10,
    stock_document_type: "Buy",
    price: 29000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-08T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 35,
    stock_document_type: "Buy",
    price: 29000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-10T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 200,
    stock_document_type: "Sold",
    price: 42000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-02T13:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 200,
    stock_document_type: "Buy",
    price: 27000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-11T12:00:00",
    types: "output",
    location_id: "jakarta",
    qty: 110,
    stock_document_type: "Sold",
    price: 45000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-13T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 20,
    stock_document_type: "Buy",
    price: 30000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-14T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 35,
    stock_document_type: "Buy",
    price: 31000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-15T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 45,
    stock_document_type: "Buy",
    price: 30000,
    sales_return_id: null,
    purchase_return_id: null,
  }),
  JSON.stringify({
    created_at: "2024-08-12T12:00:00",
    types: "input",
    location_id: "jakarta",
    qty: 300,
    stock_document_type: "Buy",
    price: 39000,
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
