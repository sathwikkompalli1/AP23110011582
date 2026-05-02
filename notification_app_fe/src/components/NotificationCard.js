import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function NotificationCard({ item, viewed, onClick }) {
    return (
        <Card
            onClick={onClick}
            sx={{
                marginBottom: 2,
                backgroundColor: viewed ? "#f5f5f5" : "#e3f2fd",
                cursor: "pointer"
            }}
        >
            <CardContent>
                <Typography variant="h6">{item.Message}</Typography>
                <Typography variant="body2">{item.Type}</Typography>
                <Typography variant="caption">{item.Timestamp}</Typography>

                {!viewed && (
                    <Chip label="NEW" color="primary" size="small" />
                )}
            </CardContent>
        </Card>
    );
}
