const axios = require("axios");
const { fetchData } = require("./apimock");



jest.mock("axios");

describe ("Mocking Axios in Jest Tests", () => {
    test("Should handle successful HTTP request", async () => {
      
      const mockData = { id: 1, title: "Test Post" };
      axios.get.mockResolvedValue({ data: mockData });
  
      const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
      expect(data).toEqual(mockData);
    });
  
    test("Should handle failed HTTP request", async () => {
   
      const mockErrorMessage = "Bad Request";
      axios.get.mockRejectedValue(new Error(mockErrorMessage));
  
      const data = await fetchData("https://jsonplaceholder.typicode.com/invalid-endpoint");
      expect(data).toBe(mockErrorMessage);
    });
  });