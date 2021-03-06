# Functional Requirements

## Verbatim

- The client web UI will display two tables, assets and liabilities.
Initially, the data should be stored in the front end in javascript and
rendered to the UI using templates (react, angular).
- When an account line amount is edited, a request should be sent to the server
which will calculate the totals and net worth and return them.
- The UI will render the calculated amounts upon response from the server.
- The "Select Currency" list should be a drop down with ten hard coded currency
code values of your choice. The currency should be included in the payload to
the service, and the service should call an upstream service to get an exchange
rate to apply to the totals.
- The service should also return adjusted account line amounts in the new
currency for each of the editable rows. The updated values should be formatted
for the currency of selection and include the new currency sign on the left for
each of the updated values.
- The service should include unit tests to cover all API calls.
- Diagram your design and prepare to explain your design choices.
- 48 hours prior to your interview please share the code with your contact at
Intuit. Use github or similar software version control.

## Tasks

- [x] The client web UI will display two tables, assets and liabilities.
  - [x] data should be stored in the front end in javascript
  - [x] rendered to the UI using templates (react, angular).
- [x] When an account line amount is edited, a request should be sent to the server
  - [ x which will calculate the totals and net worth and return them.
- [x] The UI will render the calculated amounts upon response from the server.
- [x] The "Select Currency" list should be a drop down
  - [x] with ten hard coded currency code values of your choice.
  - [x] The currency should be included in the payload to the service
  - [x] the service should call an upstream service to get an exchange rate to
  apply to the totals.
- [x] The service should also return adjusted account line amounts in the new
currency for each of the editable rows.
  - [x] The updated values should be formatted for the currency of selection
  - [x] and include the new currency sign on the left for each of the updated values.
- [x] The service should include unit tests to cover all API calls.
- [x] Diagram your design and prepare to explain your design choices.
- [x] 48 hours prior to your interview please share the code with your contact
at Intuit.
  - [x] Use github or similar software version control.
