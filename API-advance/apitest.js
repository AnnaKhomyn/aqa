const axios = require("axios");

const fetchFakeData = async() => {
    try {
    const response = await axios.get("https://jsfakedata.com")
    return response.data
} catch (error) {
    return "Bad Request"
}
}

module.exports = {
    fetchFakeData
}