const priorityMap = {
    Placement: 3,
    Result: 2,
    Event: 1
};

export function getTopN(data, n = 10) {
    return [...data]
        .sort((a, b) => {
            if (priorityMap[b.Type] !== priorityMap[a.Type]) {
                return priorityMap[b.Type] - priorityMap[a.Type];
            }
            return new Date(b.Timestamp) - new Date(a.Timestamp);
        })
        .slice(0, n);
}
