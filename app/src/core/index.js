import "./index.css";
import { useState } from "react";
import { Card } from "@mui/material";
import { Main, Search } from "./pages";

const Core = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState({ data: null, forecast: null, error: false, loading: false });

    return (
        <Card
            elevation={10}
            sx={{
                width: 1200,
                height: 700,
                display: "flex",
                borderRadius: 5,
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#F0F6FE"
            }}>
            <Search location={location} setLocation={setLocation} setWeather={setWeather} />
            <Main weather={weather} />
        </Card>
    );
};

export { Core };