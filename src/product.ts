class Product {
  constructor() {}

  getProducts() {
    const host = 'http://localhost/api/';
    const uri = 'products';
    const json = '?output_format=JSON';
    const authoritation = '&ws_key=FZSTWAX8YGWG9FMYRJGZTUXV6LMPKL9L';

    const url = host + uri + json + authoritation;
    const axios = require('axios');

    // Make request
    axios
      .get(url)

      // Show response data
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}

let p = new Product();
p.getProducts();
