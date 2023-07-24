const axios = require('axios');

async function test()
{
  try {
    const response1 = await axios.post("http://localhost:3000/api", 
                                      {"address" : "111 Candlewood Drive", 
                                      "postal_code" : "L8J 0A3",
                                      "city" : "Hamilton", 
                                      "community" : "Stoney Creek",
                                      "province" : "Ontario",
                                      "price" : 1600000,
                                      "bedrooms" : 4,
                                      "bathrooms" : 2,
                                      "img" : "111candlewood",
                                      "description" : "Prepare To Be Swept Off Your Feet By The Absolutely Stunning 111 Candlewood Drive In Stoney Creek."});
	console.log(response1.data);

    const response2 = await axios.put("http://localhost:3000/api/2", 
                                      {"address" : "7th avenue", 
                                      "postal_code" : "1A2 B3C",
                                      "city" : "Hamilton", 
                                      "community" : "Stoney Creek",
                                      "province" : "Ontario",
                                      "price" : 400000,
                                      "bedrooms" : 2,
                                      "bathrooms" : 2,
                                      "img" : "7avenue",
                                      "description" : "This is an amazing house on 7th avenue. Amazing deal."});
	console.log(response2.data);

    const response3 = await axios.post("http://localhost:3000/api", 
                                      {"address" : "8th street", 
                                      "postal_code" : "2B3 C4D",
                                      "city" : "Hamilton", 
                                      "community" : "Ancaster",
                                      "province" : "Ontario",
                                      "price" : 500000,
                                      "bedrooms" : 3,
                                      "bathrooms" : 2,
                                      "img" : "8avenue",
                                      "description" : "This is an amazing house on 8th avenue. Amazing deal."});
	console.log(response3.data);

    const response4 = await axios.post("http://localhost:3000/api", 
                                      {"address" : "9th street", 
                                      "postal_code" : "3C4 D5E",
                                      "city" : "Hamilton", 
                                      "community" : "Dundas",
                                      "province" : "Ontario",
                                      "price" : 600000,
                                      "bedrooms" : 4,
                                      "bathrooms" : 3,
                                      "img" : "9avenue",
                                      "description" : "This is an amazing house on 9th avenue. Amazing deal."});
	console.log(response4.data);

    const response5 = await axios.delete("http://localhost:3000/api/1");
	console.log(response5.data);

    const response6 = await axios.get("http://localhost:3000/api");
	console.log(response6.data);

  } catch (error) {
    console.error(error);
  }	
}

// call our test function
test();
