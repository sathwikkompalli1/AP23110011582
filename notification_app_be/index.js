const fetchNotifications = require("./services/notificationService");
const { getTopN } = require("./utils/priority");
const Log = require("../logging_middleware/logger");

async function main() {
    try {
        const notifications = await fetchNotifications();

        console.log("Total fetched:", notifications.length);

        const top10 = getTopN(notifications, 10);

        console.log("\nTop Priority Notifications:\n");

        top10.forEach((n, i) => {
            console.log(
                `${i + 1}. [${n.Type}] ${n.Message} - ${n.Timestamp}`
            );
        });

        await Log("backend", "info", "service", "Top 10 calculated");
    } catch (error) {
        console.log("Something went wrong");
        await Log("backend", "fatal", "service", "Main function crashed");
    }
}

main();