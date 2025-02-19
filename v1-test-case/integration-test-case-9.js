const axios = require("axios");

let arrData = [
  JSON.stringify({
    created_at: "2024-08-07T12:10:00",
    types: "input",
    location_id: "jakarta",
    qty: 25,
    stock_document_type: "Sales Return",
    price: null,
    sales_return_id: 6,
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
