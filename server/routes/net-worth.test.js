const axios = require("axios");
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const netWorth = require("./net-worth");

jest.mock('axios');
axios.get.mockResolvedValue({
  data: {
    base: "CAD",
    date: "2021-03-11",
    rates: {
      CAD: 1.0,
      EUR: 0.5,
      JPY: 40,
      NZD: 2,
      USD: 1,
    },
  }
});

const app = express();
app.use(bodyParser.json())
app.use(netWorth);


test("should return 400 if no data is posted", (done) => {
  request(app)
    .post('/')
    .expect('Content-Type', /json/)
    .expect(400, done);
});

test("should return 200 if required fields are present", (done) => {
  request(app)
    .post('/')
    .send({
      "current-currency": "CAD",
      assets: { a: 10 },
      liabilities: { b: 5 }
    })
    .expect(200, done);
});

test("should return correct totals for null new currency", (done) => {
  const res = {
    assets: { a: 10 },
    liabilities: { b: 5 },
    'total-assets': 10,
    'total-liabilities': 5,
    'total-net-worth': 5,
    info: [],
    warning: [],
    error: [],
    'current-currency': 'CAD',
    'new-currency': null

  };
  request(app)
    .post('/')
    .send({
      "current-currency": "CAD",
      assets: { a: 10 },
      liabilities: { b: 5 }
    })
    .expect(200, res, done);
});

test("should return correct totals for new currency (0.5 exchange)", (done) => {
  const res = {
    assets: { a: 5 },
    liabilities: { b: 2.5 },
    'total-assets': 5,
    'total-liabilities': 2.5,
    'total-net-worth': 2.5,
    info: [],
    warning: [],
    error: [],
    'current-currency': 'EUR',
    'new-currency': null

  };
  request(app)
    .post('/')
    .send({
      "current-currency": "CAD",
      "new-currency": "EUR",
      assets: { a: 10 },
      liabilities: { b: 5 }
    })
    .expect(200, res, done);
});

test("should return correct totals for new currency (4x exchange)", (done) => {
  const res = {
    assets: { a: 20, c: 0 },
    liabilities: { b: 10, d: 4 },
    'total-assets': 20,
    'total-liabilities': 14,
    'total-net-worth': 6,
    info: [],
    warning: [],
    error: [],
    'current-currency': 'NZD',
    'new-currency': null

  };
  request(app)
    .post('/')
    .send({
      "current-currency": "EUR",
      "new-currency": "NZD",
      assets: { a: 5, c: 0 },
      liabilities: { b: 2.5, d: 1 }
    })
    .expect(200, res, done);
});
