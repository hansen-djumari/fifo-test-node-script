const axios = require("axios");

let arrData = [
  JSON.stringify({
    created_at: "2024-08-05T12:10:00",
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
