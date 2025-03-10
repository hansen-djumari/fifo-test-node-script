const axios = require("axios");

let arrData = [
  JSON.stringify({
    transaction_date: "2024-08-06T12:20:00",
    types: "output",
    location_id: "jakarta",
    qty: 5,
    stock_document_type: "Purchase Return",
    price: null,
    sales_return_id: null,
    purchase_return_id: 5,
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
