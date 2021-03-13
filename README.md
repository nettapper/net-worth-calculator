# Net Worth Calculator

[![CircleCI](https://circleci.com/gh/nettapper/net-worth-calculator.svg?style=shield)](https://app.circleci.com/pipelines/github/nettapper/net-worth-calculator)

Intuit take home assessment 2021.

Create a proof of concept for a small business to help them track their assets
and liabilities.

This Node.js and React project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Project

To run this project in the development environment please start both the
front-end and back-end servers.

Alternatively, this project can be run after generating the optimized build.

``` text
npm install

# start front-end & back-end in the dev env
npm run start
npm run start-server

# or run the production build
npm run build
node server/index.js
```

## Testing

Testing for this project is done via [jest](https://jestjs.io/) and [supertest](https://github.com/visionmedia/supertest#readme).

To test the front-end or back-end run the following command respectively.

Note: That there is only 1 front-end test. It has been modified from the Create
React App example to ensure that react component renders, but not to test functionality.

``` text
npm run test
npm run test-server
```

## Requirements

Please see the following materials to get an overview of the requirements

- [Net Worth Calculator.pdf](./docs/requirements/A4A%20Exercise%20-%20Net%20Worth%20Calculator.pdf)
- [Functional Requirements](./docs/requirements/functional-requirements.md)
- [Technical Requirements](./docs/requirements/technical-requirements.md)
- [Discussion Points](./docs/requirements/discussion-points.md)

## Architecture Documentation

![High Level Architecture Diagram](./docs/architecture/Intuit%20Net%20Worth%20Calculator%20Architecture.svg)

- [Client to Server JSON example](./docs/architecture/client-to-server-request.json)
- [Server to Client JSON example](./docs/architecture/server-to-client-response.json)

## Project Structure

The following is a printout produced by `tree` to give a high-level overview of
the project structure.
Additionally, I've added comments to call out important files or directories.

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
│   │   └── net-worth.js    -- handle post requests for net-worth route
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

