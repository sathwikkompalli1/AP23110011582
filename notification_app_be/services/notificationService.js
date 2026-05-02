const axios = require("axios");
const Log = require("../../logging_middleware/logger");

const API_URL = "http://20.207.122.201/evaluation-service/notifications";

const TOKEN = "eyJhbGcioiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNTcOMZQOLCJpYxQi0jE3NDM1NzQwNDQsImlzcyI6IkFmZm9yZG11ZCIsImp0aSI6ImQ5Y2JiNjk5LTZhMjctNDRhNS04ZDU5LThiMWJ1ZmE4MTZkYSIsInN1YiI6InJhbWtyaXNobmFAYWJjLmVkdSJ9LCJ1bWFpbCI6InJhbwtyaXNobmFAYWJjLmVkdSIsIm5hbwUi0iJyYW0ga3Jpc2huYSIsInJvbGxObyI6ImFhMWJiIiwiYWNjZXNzQ29kZSI6InhnQXNOQyIsImNsaWVudElEIjoiZD1jYmI20TktNmEyNy00NGE1LThkNTktOGIXYmVmYTgxNmRhIiwiY2xpZW50U2VjcmV0IjoidFZKYWFhUkJTZVhjU1h1TSJ9.YApD98gq0IN_OWw7JMfmuUfK1m4hLTm7AIcLDcLAzvg";
async function fetchNotifications() {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });

        await Log("backend", "info", "service", "Notifications fetched");

        return response.data.notifications;
    } catch (error) {
        await Log("backend", "error", "service", "Failed to fetch notifications");
        console.log("Fetch error:", error.message);
        return [];
    }
}

module.exports = fetchNotifications;