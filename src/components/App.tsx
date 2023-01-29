import { globalCss } from "@stitches/react";
import React from "react";
import { Row, Tile } from "../Mahjong";

const globalStyles = globalCss({
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@700&display=swap')",
    ],
    body: {
        fontFamily: "'IBM Plex Serif', serif",
    },
});

function App() {
    globalStyles();
    return (
        <>
            <Row>
                <Tile tile="bambooOne" />
                <Tile tile="bambooTwo" />
                <Tile tile="bambooThree" />
                <Tile tile="bambooFour" />
                <Tile tile="bambooFive" />
                <Tile tile="bambooSix" />
                <Tile tile="bambooSeven" />
                <Tile tile="bambooEight" />
                <Tile tile="bambooNine" />
            </Row>
            <Row>
                <Tile tile="circleOne" />
                <Tile tile="circleTwo" />
                <Tile tile="circleThree" />
                <Tile tile="circleFour" />
                <Tile tile="circleFive" />
                <Tile tile="circleSix" />
                <Tile tile="circleSeven" />
                <Tile tile="circleEight" />
                <Tile tile="circleNine" />
            </Row>
            <Row>
                <Tile tile="characterOne" />
                <Tile tile="characterTwo" />
                <Tile tile="characterThree" />
                <Tile tile="characterFour" />
                <Tile tile="characterFive" />
                <Tile tile="characterSix" />
                <Tile tile="characterSeven" />
                <Tile tile="characterEight" />
                <Tile tile="characterNine" />
            </Row>
            <Row>
                <Tile tile="dragonRed" />
                <Tile tile="dragonGreen" />
                <Tile tile="dragonWhite" />
                <Tile tile="blank" />
                <Tile tile="windEast" />
                <Tile tile="windSouth" />
                <Tile tile="windWest" />
                <Tile tile="windNorth" />
            </Row>
        </>
    );
}

export default App;
