const axios = require("axios");

let arrData = [
  JSON.stringify({
    created_at: "2024-08-09T12:10:00",
    types: "output",
    location_id: "jakarta",
    qty: 5,
    stock_document_type: "Purchase Return",
    price: null,
    sales_return_id: null,
    purchase_return_id: 19,
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
