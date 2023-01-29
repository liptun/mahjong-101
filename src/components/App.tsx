import { globalCss } from "@stitches/react";
import React from "react";
import { Row, Tile } from "../Mahjong";

const globalStyles = globalCss({
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap')",
    ],
    body: {
        fontFamily: "'Poppins', sans-serif",
    },
});

function App() {
    globalStyles();
    return (
        <>
            <Row>
                <Tile kind="dragonRed" orientation="left" />
                <Tile kind="dragonRed" orientation="right" />
                <Tile kind="dragonRed" orientation="top" />
                <Tile kind="dragonRed" orientation="bottom" />
            </Row>
            <Row>
                <Tile kind="dragonRed" orientation="left" />
            </Row>

            <Row orientation="left">
                <Tile kind="bambooOne" />
                <Tile kind="bambooTwo" />
                <Tile kind="bambooThree" />
                <Tile kind="bambooFour" />
                <Tile kind="bambooFive" />
                <Tile kind="bambooSix" />
                <Tile kind="bambooSeven" />
                <Tile kind="bambooEight" />
                <Tile kind="bambooNine" />
            </Row>
            <h2>Bambus</h2>
            <Row>
                <Tile kind="bambooOne" />
                <Tile kind="bambooTwo" />
                <Tile kind="bambooThree" />
                <Tile kind="bambooFour" />
                <Tile kind="bambooFive" />
                <Tile kind="bambooSix" />
                <Tile kind="bambooSeven" />
                <Tile kind="bambooEight" />
                <Tile kind="bambooNine" />
            </Row>
            <h2>Kółko</h2>
            <Row>
                <Tile kind="circleOne" />
                <Tile kind="circleTwo" />
                <Tile kind="circleThree" />
                <Tile kind="circleFour" />
                <Tile kind="circleFive" />
                <Tile kind="circleSix" />
                <Tile kind="circleSeven" />
                <Tile kind="circleEight" />
                <Tile kind="circleNine" />
            </Row>
            <h2>Znaki</h2>
            <Row>
                <Tile kind="characterOne" />
                <Tile kind="characterTwo" />
                <Tile kind="characterThree" />
                <Tile kind="characterFour" />
                <Tile kind="characterFive" />
                <Tile kind="characterSix" />
                <Tile kind="characterSeven" />
                <Tile kind="characterEight" />
                <Tile kind="characterNine" />
            </Row>
            <h2>Smoki</h2>
            <Row>
                <Tile kind="dragonRed" />
                <Tile kind="dragonGreen" />
                <Tile kind="dragonWhite" />
            </Row>
            <h2>Wiatry</h2>
            <Row>
                <Tile kind="windEast" />
                <Tile kind="windSouth" />
                <Tile kind="windWest" />
                <Tile kind="windNorth" />
            </Row>
        </>
    );
}

export default App;
