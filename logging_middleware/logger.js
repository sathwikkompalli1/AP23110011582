require("dotenv").config();
const axios = require("axios");

const LOG_API = "http://20.244.56.144/evaluation-service/logs";

const TOKEN = (process.env.TOKEN || "").trim().replace(/;+$/, "");

async function Log(stack, level, pkg, message) {
    try {
        await axios.post(
            LOG_API,
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );
    } catch (error) {
        console.log("Log failed:", error.message);
    }
}

module.exports = Log;