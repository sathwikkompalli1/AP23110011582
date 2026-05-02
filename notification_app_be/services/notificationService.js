require("dotenv").config();
const axios = require("axios");
const Log = require("../../logging_middleware/logger");

const API_URL = "http://20.244.56.144/evaluation-service/notifications";

const TOKEN = (process.env.TOKEN || "").trim().replace(/;+$/, "");

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