// assigning weights to each type
const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};


function sortNotifications(notifications) {
    return notifications.sort((a, b) => {

       
        const typeA = priorityMap[a.Type];
        const typeB = priorityMap[b.Type];

        if (typeA !== typeB) {
            return typeB - typeA;
        }

        
        const timeA = new Date(a.Timestamp);
        const timeB = new Date(b.Timestamp);

        return timeB - timeA;
    });
}

// get top N notifications
function getTopN(notifications, n) {
    const sorted = sortNotifications(notifications);
    return sorted.slice(0, n);
}

module.exports = { getTopN };