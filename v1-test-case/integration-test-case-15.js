const axios = require("axios");

let arrData = [
  JSON.stringify({
    transaction_date: "2024-08-02T12:15:00",
    types: "input",
    location_id: "jakarta",
    qty: 10,
    stock_document_type: "Sales Return",
    price: null,
    sales_return_id: 2,
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
