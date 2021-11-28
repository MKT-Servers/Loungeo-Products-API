import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

const max = 1000000;
const productTested = 1 + Math.floor(Math.random() * max);
console.log('Testing Product Number :', productTested);

// Un-comment one of the following lines to test an endpoint:

// 'Product' endpoint
// const endpoint = 'http://localhost:3000/products/' + productTested;

// 'Related items' endpoint
const endpoint = 'http://localhost:3000/products/' + productTested + '/related';
// const endpoint = 'http://localhost:3000/products/888888/related';

// In the terminal, enter the following command:
// k6 run script.js

export default function () {
  const res = http.get(endpoint);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
