const { fetchWithHeadersAndParams } = require("./apitestdata");

describe("Request Headers and Params Tests", () => {
  test("Should include custom headers and params in the request", async () => {
    const config = await fetchWithHeadersAndParams();

    // Перевіряємо хедери
    expect(config.headers["Custom-Header"]).toBe("TestHeaderValue");

    // Перевіряємо параметри
    expect(config.params).toEqual({ userId: 1 });
  });
});
