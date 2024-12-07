const baseUrl = "https://jsonplaceholder.typicode.com";

const fetchTodosByIds = (ids) => {
    const userPromises = ids.map(async (id) => {
        try {
            const response = await fetch(`${baseUrl}/todos/${id}`);
            return response.json()
        }
        catch (error) {
            console.error(`Error fetching todo with id ${id}:`, error);
        }
    });
    return Promise.all(userPromises);
};

const fetchUsersByIds = (ids) => {
    const userPromises = ids.map(async (id) => {
        try {
            const response = await fetch(`${baseUrl}/users/${id}`);
            return response.json()
        }
        catch (error) {
            console.error(`Error fetching user with id ${id}:`, error);
        }
    });
    return Promise.all(userPromises);
};

const displayResponse = async (request) => {
    try {
        const results = await request;

        if (Array.isArray(results)) {
            results.forEach((result, index) => {
                console.log(`Result ${index + 1}:`, result);
            });
        } else {
            console.log("Result:", results);
        }
    }
    catch (error) {
        console.error("Error in Promise:", error);
    }
};

const userIds = [1, 2, 3];
const todoIds = [1, 2, 3];

const allRequests = Promise.all([fetchTodosByIds(todoIds), fetchUsersByIds(userIds)]);
displayResponse(allRequests);

const raceRequests = Promise.race([fetchTodosByIds(todoIds), fetchUsersByIds(userIds)]);
displayResponse(raceRequests);
