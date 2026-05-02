const axios = require("axios");
const Log = require("../../logging_middleware/logger");

const API_URL = "http://20.207.122.201/evaluation-service/notifications";

async function fetchNotifications() {
    try {
        const response = await axios.get(API_URL);
        await Log("backend", "info", "service", "Fetched notifications successfully");

        return response.data.notifications;
    } catch (error) {
        await Log("backend", "error", "service", "Failed to fetch notifications");
        return [];
    }
}

module.exports = fetchNotifications;