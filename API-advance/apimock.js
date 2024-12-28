const axios = require("axios");

async function fetchData(endpoint) {
    try {
        const response = await axios.get(endpoint);
        return response.data
    } catch (error) {
        return "Bad Request"
  }
}

module.exports = { fetchData };
