# RESTful_API_Application
A RESTful API application to manage a collection of properties data. SQLite is used to store the properties data. All columns of data in the data are accessible for the RESTful API operations listed below.

The RESTful API is available at __localhost:3000/api__. i.e. it is running on the localhost on port 3000 and is accessible at /api. 

The RESTful API's allow for the following operations:
- A GET request to __/api__ returns the entire collection of data as a JSON array of JSON objects in the body of the response.
- A GET request to __/api/id__ returns the item with the supplied id as a JSON object in the body of the response.
- A PUT request to __/api__ replaces the entire collection with the collection provided as a JSON array in the body of the request. The API returns the JSON response __{response: "COLLECTION UPDATED"}__.
- A PUT request to __/api/id__ replaces the item in the collection with the supplied id with the item provided as JSON data in the body of the request. The API returns the JSON response __{response: "ITEM UPDATED"}__.
- A DELETE request to __/api__ deletes the entire collection. The API should return the JSON response __{response: "COLLECTION DELETED"}__.
- A DELETE request to __/api/id__ deletes the item in the collection with the supplied id. The API should return the response __{response: "ITEM DELETED"}__.
- A POST request to __/api__ inserts into the collection the item provided as JSON data in the body of the request. The API should return the response __{response: "ITEM INSERTED"}__.

A test script has been created to test the API. The test script accomplishes the following:
1. Inserts multiple items into the collection with POST and PUT operations to update the collection.
2. Deletes an item from the collection.
3. Gets the collection that results from these operations.

The rest script makes a minimum of 6 requests to ensure the API is functioning correctly. HTTP requests are made to the API to execute these tests. Axios and async/await are used to make these requests.
