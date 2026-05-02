import axios from "axios";

const BASE_URL = "http://20.207.122.201/evaluation-service/notifications";

const TOKEN = process.env.REACT_APP_TOKEN;

export async function getNotifications(params = {}) {
    try {
        const res = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            },
            params
        });

        return res.data.notifications;
    } catch (err) {
        console.log("API error:", err.response?.status);
        return [];
    }
}
