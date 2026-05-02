import { Select, MenuItem } from "@mui/material";

export default function FilterBar({ value, setValue }) {
    return (
        <Select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ marginBottom: "20px" }}
        >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Event">Event</MenuItem>
            <MenuItem value="Result">Result</MenuItem>
            <MenuItem value="Placement">Placement</MenuItem>
        </Select>
    );
}
