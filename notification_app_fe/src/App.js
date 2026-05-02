import { useEffect, useState } from "react";
import { getNotifications } from "./services/api";
import NotificationCard from "./components/NotificationCard";
import FilterBar from "./components/FilterBar";
import { getTopN } from "./utils/priority";
import { Button } from "@mui/material";

function App() {
    const [data, setData] = useState([]);
    const [type, setType] = useState("");
    const [viewed, setViewed] = useState({});
    const [showPriority, setShowPriority] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await getNotifications({
                notification_type: type
            });
            setData(res);
        }

        fetchData();
    }, [type]);

    function markViewed(id) {
        setViewed((prev) => ({
            ...prev,
            [id]: true
        }));
    }

    const displayData = showPriority ? getTopN(data, 10) : data;

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>Notification System</h2>

            <Button
                variant="contained"
                onClick={() => setShowPriority(!showPriority)}
                style={{ marginBottom: "10px" }}
            >
                {showPriority ? "Show All" : "Show Top Priority"}
            </Button>

            <FilterBar value={type} setValue={setType} />

            {displayData.map((item) => (
                <NotificationCard
                    key={item.ID}
                    item={item}
                    viewed={viewed[item.ID]}
                    onClick={() => markViewed(item.ID)}
                />
            ))}
        </div>
    );
}

export default App;
