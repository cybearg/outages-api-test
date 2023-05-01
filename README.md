## Description

The outages api presentes a simple service aimed at fetching and filtering site outages by a given date and site information and uploading filtered outages to a remote endpoint. 

## Setup

Requires:

- node (18) - available from https://nodejs.org/en/download/
- npm - will be installed with node, or see https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

```
npm install
npm start
```

If you need to run it on another port, modify the .env file with a differt value for the PORT variable.

## Problem Solution

To solve the problem for the given task call the ```/update-outages/:siteId``` enpoint. For example: 
```
http://localhost:8000/update-outages/norwich-pear-tree
```

### Domain

The domain for the site outage is made up of two entities and a value type:

- _**SiteInfo**_ holds the id and name for a site combined with a list of devices.
- _**DeviceInfo**_ id and name of each device.
- _**SiteOutage**_ device info as well as begin and end dates for each outage.

- _**App**_ express app exposing three endpoints
- _**OutageController**_ implements route logic for the api and contains the filter logic for outages. Uses the APIClient implementation for remote calls. 

- _**HttpClient**_ module which separates the axios implementation used speak to external api from the controller and the express app.
- _**TestApiClient**_ module used in tests for app and controller.
- _**APIClient**_ interface used for dependency injection to replace the actual http client implementation within unit and integration tests. The injection is done via service-injection.js module which is mocked in tests.


### API

The API has 3 endpoints:

- GET `/outages` gets all outages from multiple sites
- GET `/site-info/:siteId` get site information and devices
- GET `/update-outages/:siteId` this method aggregates calls to the previous two methods for a given site id, then filters outages by hardcoded date and devices belonging to given site. The filtered outages are uploaded to the remote endpoint. 

## Tests

```
npm test
```

To run tests in watch mode: 

```
npm run test-watch
```


## Remaining tasks and refactoring

- The task for this exercise was executed by implementing the whole fetching and filtering logic as part of a single endpoint ```/update-outages/:site-id```. The api endpoint is a GET however nothing is returned to the user. This needs updating with a success status.  
- Alternatively to the first point, combining the logic within one endpoints presents a performace issue as multiple external api requests are executed within the same request thread (two get requests and a post). This can be fixed by changing the implementation to store the site info and outages in memory and the ```/update-outages/``` method would use this stored information. 
- Error handling for remote api calls is not implemented.
- The date is hardcoded within the App. This should be moved to an environment value or read from a query parameter.
- App is doing a few too many things for simple route configuration.
- Simplify the solution:
    - stop using express js as it added an overhead and the need for dependency injection. 
    - OutageController is a class but it doesn't need to be as it holds no state at the moment. 
    - move the filtering logic within the OutageController to a separate service so it can be properly unit tested with edge cases. 