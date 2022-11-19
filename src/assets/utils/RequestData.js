// HTTP method which can be used to fetch data using Axios
// Functionality control for GET and POST.

// In GET parameters are sent in apiurl.
// In POST data is sent as content object.

import axios from "axios";

// Constants - Base URL and Api key
export const urlConsts = {
  baseURL: "https://www.iplayon.in/dev/",
  headers: { "Content-Type": "application/json" },
  apiKey: "dd5e611bf286042db7257ee998e5112b",
  caller: "KTTA1",
  sportID: "QvHXDftiwsnc8gyfJ",
  filterData: "z37CQ3th8i73SQogk", // association Id
  associationId: "z37CQ3th8i73SQogk", // association Id
  // Payment Constants used for Razor Pay in registration
  paymentKeyId: "rzp_live_kApuBzXGZuYXGG",
  // paymentKeyId_test: "rzp_test_GPJxCbdU6QPDOf",
  amount: "50000",
  amountLabel: "500",
};

// This Function is used to call Api's with Response using Axios
export const RequestData = async (httpMethodType, apiURL, content) => {
  if (httpMethodType === "POST") {
    // Constant apikey for POST method
    Object.assign(content, { apiKey: process.env.REACT_APP_API_KEY });
  }
  // Api call
  return axios({
    //Assigning header and method type
    headers: urlConsts.headers,
    method: httpMethodType,
    url: process.env.REACT_APP_BASE_URL + apiURL,

    // assigning data for POST method
    data: httpMethodType === "GET" ? undefined : content,
  })
    .then((response) => {
      // returns response object with status code
      if (response.data) {
        return { status: true, result: response.data, statusCode: 200 };
      }
    })
    .catch((error) => {
      // Error Handling
      if (error && error.response && error.response.data) {
        return {
          status: false,
          result: error.response.data,
          statusCode: error.response.statusCode,
        };
        // Error in case of Server failure
      } else
        return { status: false, result: "unable to connect", statusCode: 400 };
    });
};
