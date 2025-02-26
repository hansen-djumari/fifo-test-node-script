const axios = require("axios");

let arrData = [
  JSON.stringify({
    transaction_date: "2024-08-03T12:15:00",
    types: "input",
    location_id: "jakarta",
    qty: 50,
    stock_document_type: "Buy",
    price: 29000,
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
