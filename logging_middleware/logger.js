const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const TOKEN = "eyJhbGcioiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNTcOMZQOLCJpYxQi0jE3NDM1NzQwNDQsImlzcyI6IkFmZm9yZG11ZCIsImp0aSI6ImQ5Y2JiNjk5LTZhMjctNDRhNS04ZDU5LThiMWJ1ZmE4MTZkYSIsInN1YiI6InJhbWtyaXNobmFAYWJjLmVkdSJ9LCJ1bWFpbCI6InJhbwtyaXNobmFAYWJjLmVkdSIsIm5hbwUi0iJyYW0ga3Jpc2huYSIsInJvbGxObyI6ImFhMWJiIiwiYWNjZXNzQ29kZSI6InhnQXNOQyIsImNsaWVudElEIjoiZD1jYmI20TktNmEyNy00NGE1LThkNTktOGIXYmVmYTgxNmRhIiwiY2xpZW50U2VjcmV0IjoidFZKYWFhUkJTZVhjU1h1TSJ9.YApD98gq0IN_OWw7JMfmuUfK1m4hLTm7AIcLDcLAzvg";

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