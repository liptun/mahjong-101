import { globalCss } from "@stitches/react";
import React from "react";
import { Row, Tile } from "../Mahjong";
import Board from "../Mahjong/Board";
import Highlight from "../Mahjong/Highlight";

const globalStyles = globalCss({
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap')",
    ],
    "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontSize: "100%",
    },
    body: {
        fontFamily: "'Poppins', sans-serif",
    },
});

function App() {
    globalStyles();
    return (
        <>
            <Row>
                <Tile kind="circleOne" />
                <Tile kind="bambooOne" />
                <Highlight>
                    <Tile kind="bambooTwo" />
                    <Tile kind="bambooThree" />
                    <Tile kind="bambooFour" />
                </Highlight>
                <Tile kind="circleOne" />
                <Tile kind="bambooOne" />
                <Highlight>
                    <Tile kind="circleOne" />
                    <Tile kind="bambooOne" />
                </Highlight>
                <Highlight>
                    <Tile kind="circleOne" />
                    <Tile kind="bambooOne" />
                </Highlight>
            </Row>
            <Row orientation="left">
                <Tile kind="circleOne" />
                <Tile kind="bambooOne" />
                <Highlight>
                    <Tile kind="bambooTwo" />
                    <Tile kind="bambooThree" />
                    <Tile kind="bambooFour" />
                </Highlight>
                <Tile kind="circleOne" />
                <Tile kind="bambooOne" />
            </Row>
            <Board>
                <Row>
                    <Tile kind="dragonRed" orientation="left" />
                    <Tile kind="dragonRed" orientation="top" />
                    <Tile kind="dragonRed" orientation="right" />
                    <Tile kind="dragonRed" orientation="bottom" />
                </Row>
            </Board>
            <h2>Różne orientacje</h2>
            <Row>
                <Tile kind="dragonRed" orientation="left" />
                <Tile kind="dragonRed" orientation="top" />
                <Tile kind="dragonRed" orientation="right" />
                <Tile kind="dragonRed" orientation="bottom" />
            </Row>
            <h2>Jeden kamień na wiersz</h2>
            <Row>
                <Tile kind="dragonRed" orientation="top" />
            </Row>

            <h2>Góra</h2>
            <Row orientation="top">
                <Tile kind="circleOne" />
                <Tile kind="characterThree" />
                <Tile kind="characterOne" />
                <Tile kind="characterTwo" />
            </Row>
            <h2>Prawo</h2>
            <Row orientation="right">
                <Tile kind="circleOne" />
                <Tile kind="characterOne" />
                <Tile kind="characterTwo" />
                <Tile kind="characterThree" />
            </Row>
            <h2>Lewo</h2>
            <Row orientation="left">
                <Tile kind="circleOne" />
                <Tile kind="bambooOne" />
                <Tile kind="bambooTwo" />
                <Tile kind="bambooThree" />
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
