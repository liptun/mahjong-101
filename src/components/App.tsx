import { globalCss } from "@stitches/react";
import React from "react";
import { Tile } from "../Mahjong";

const globalStyles = globalCss({
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@700&display=swap')",
    ],
    "body": {
        fontFamily: "'IBM Plex Serif', serif",
    },
});

function App() {
    globalStyles();
    return (
        <>
            <p>Hello, World!</p>
            <Tile />
        </>
    );
}

export default App;
