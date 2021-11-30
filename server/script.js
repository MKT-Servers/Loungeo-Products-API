// In the terminal, navigate to the 'server' directory and enter the following command:
// k6 run script.js
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
// const endpoint = `http://localhost:3000/products/${productTested}`;

// 'Styles' endpoint
const endpoint = `http://localhost:3000/products/${productTested}/styles`;

// 'Related items' endpoint
// const endpoint = `http://localhost:3000/products/${productTested}/related`;

export default function () {
  const res = http.get(endpoint);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
