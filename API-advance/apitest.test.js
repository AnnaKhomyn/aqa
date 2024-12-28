const axios = require("axios");
const { fetchFakeData } = require("./apitest");

describe("Error handling", () => {
    test("should return 'Bad Request' when API call fails", async () => {
        const response = await fetchFakeData();
        expect(response).toBe("Bad Request");
    });
});

