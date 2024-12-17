const axios = require("axios");

const API_URL = "https://jsonplaceholder.typicode.com";

describe("JSONPlaceholder API Tests", () => {
    test("GET /posts - should return a list of posts", async () => {
        const response = await axios.get(`${API_URL}/posts`);
        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(Array);
        expect(response.data.length).toBeGreaterThan(0);
    });


    test("GET /posts/1 - should return a single post", async () => {
        const response = await axios.get(`${API_URL}/posts/1`);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty("id", 1);
        expect(response.data).toHaveProperty("title");
        expect(response.data).toHaveProperty("body");
    });


    test("GET /comments - should return a list of comments", async () => {
        const response = await axios.get(`${API_URL}/comments`);
        expect(response.status).toBe(200);
        expect(response.data).toBeInstanceOf(Array);
    });


    test("POST /comments - should create a new comment", async () => {
        const newComment = {
            postId: 1,
            name: "test comment",
            email: "test@example.com",
            body: "This is a test comment",
        };

        const response = await axios.post(`${API_URL}/comments`, newComment);

        expect(response.status).toBe(201);

        expect(response.data).toHaveProperty("id");
        expect(response.data.name).toBe(newComment.name);
        expect(response.data.email).toBe(newComment.email);
        expect(response.data.body).toBe(newComment.body);
    });
});  
