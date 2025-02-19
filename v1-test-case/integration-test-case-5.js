const axios = require("axios");

let arrData = [
  JSON.stringify({
    created_at: "2024-08-04T12:10:00",
    types: "input",
    location_id: "jakarta",
    qty: 150,
    stock_document_type: "Buy",
    price: 28000,
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
