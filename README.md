# Net Worth Calculator

Intuit take home assessment 2021.

Create a proof of concept for a small business to help them track their assets
and liabilities.

This Node.js and React project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Project

``` text
npm install

# start front-end & back-end in the dev env
npm run start
npm run start-server

# or run the production build
npm run build
node server/index.js
```

## Project Structure

``` text
├── README.md               -- this file
├── build                   -- files are generated here after 'npm run build'
├── docs
│   ├── architecture
│   └── requirements
├── package-lock.json
├── package.json
├── public                  -- favicon, index.html, etc.
├── server
│   ├── index.js            -- main entry point for the server
│   ├── routes
│   │   └── net-worth.js    -- handle post requests
│   └── service
│       ├── accountant      -- calculate totals with exchange rate
│       └── conversion-rate -- fetch exchange rates
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── calculator      -- main part of ui
    │   └── header
    ├── ducks               -- reducers, sagas, axios, types, etc.
    │   ├── networth        -- networth endpoint
    │   ├── rootReducer.js
    │   └── rootSaga.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    └── util
        └── currency

2513 directories, 6479 files
```

## Testing

``` text
npm run test
npm run test-server
```

