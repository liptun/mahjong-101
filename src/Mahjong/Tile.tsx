import { styled } from "@stitches/react";
import React, { FC } from "react";

import bambooOne from "./assets/bamboo-1.svg";
import bambooTwo from "./assets/bamboo-2.svg";
import bambooThree from "./assets/bamboo-3.svg";
import bambooFour from "./assets/bamboo-4.svg";
import bambooFive from "./assets/bamboo-5.svg";
import bambooSix from "./assets/bamboo-6.svg";
import bambooSeven from "./assets/bamboo-7.svg";
import bambooEight from "./assets/bamboo-8.svg";
import bambooNine from "./assets/bamboo-9.svg";
import circleOne from "./assets/circle-1.svg";
import circleTwo from "./assets/circle-2.svg";
import circleThree from "./assets/circle-3.svg";
import circleFour from "./assets/circle-4.svg";
import circleFive from "./assets/circle-5.svg";
import circleSix from "./assets/circle-6.svg";
import circleSeven from "./assets/circle-7.svg";
import circleEight from "./assets/circle-8.svg";
import circleNine from "./assets/circle-9.svg";
import characterOne from "./assets/character-1.svg";
import characterTwo from "./assets/character-2.svg";
import characterThree from "./assets/character-3.svg";
import characterFour from "./assets/character-4.svg";
import characterFive from "./assets/character-5.svg";
import characterSix from "./assets/character-6.svg";
import characterSeven from "./assets/character-7.svg";
import characterEight from "./assets/character-8.svg";
import characterNine from "./assets/character-9.svg";
import dragonRed from "./assets/dragon-red.svg";
import dragonGreen from "./assets/dragon-green.svg";
import dragonWhite from "./assets/dragon-white.svg";
import windEast from "./assets/wind-east.svg";
import windSouth from "./assets/wind-south.svg";
import windWest from "./assets/wind-west.svg";
import windNorth from "./assets/wind-north.svg";

const Wrapper = styled("div", {
    border: "1px solid black",
    borderRadius: ".5em",
    width: "6em",
    height: "8em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    margin: ".2em",
    padding: ".5em .2em",
});

const Vector = styled("img", { width: "100%" });

type TTile =
    | "bambooOne"
    | "bambooTwo"
    | "bambooThree"
    | "bambooFour"
    | "bambooFive"
    | "bambooSix"
    | "bambooSeven"
    | "bambooEight"
    | "bambooNine"
    | "circleOne"
    | "circleTwo"
    | "circleThree"
    | "circleFour"
    | "circleFive"
    | "circleSix"
    | "circleSeven"
    | "circleEight"
    | "circleNine"
    | "characterOne"
    | "characterTwo"
    | "characterThree"
    | "characterFour"
    | "characterFive"
    | "characterSix"
    | "characterSeven"
    | "characterEight"
    | "characterNine"
    | "dragonRed"
    | "dragonGreen"
    | "dragonWhite"
    | "windEast"
    | "windSouth"
    | "windWest"
    | "windNorth"
    | "blank";

interface Props {
    tile: TTile;
}

const Tile: FC<Props> = ({ tile }) => {
    return (
        <Wrapper>
            {tile === "bambooOne" && <Vector src={bambooOne} />}
            {tile === "bambooTwo" && <Vector src={bambooTwo} />}
            {tile === "bambooThree" && <Vector src={bambooThree} />}
            {tile === "bambooFour" && <Vector src={bambooFour} />}
            {tile === "bambooFive" && <Vector src={bambooFive} />}
            {tile === "bambooSix" && <Vector src={bambooSix} />}
            {tile === "bambooSeven" && <Vector src={bambooSeven} />}
            {tile === "bambooEight" && <Vector src={bambooEight} />}
            {tile === "bambooNine" && <Vector src={bambooNine} />}
            {tile === "circleOne" && <Vector src={circleOne} />}
            {tile === "circleTwo" && <Vector src={circleTwo} />}
            {tile === "circleThree" && <Vector src={circleThree} />}
            {tile === "circleFour" && <Vector src={circleFour} />}
            {tile === "circleFive" && <Vector src={circleFive} />}
            {tile === "circleSix" && <Vector src={circleSix} />}
            {tile === "circleSeven" && <Vector src={circleSeven} />}
            {tile === "circleEight" && <Vector src={circleEight} />}
            {tile === "circleNine" && <Vector src={circleNine} />}
            {tile === "characterOne" && <Vector src={characterOne} />}
            {tile === "characterTwo" && <Vector src={characterTwo} />}
            {tile === "characterThree" && <Vector src={characterThree} />}
            {tile === "characterFour" && <Vector src={characterFour} />}
            {tile === "characterFive" && <Vector src={characterFive} />}
            {tile === "characterSix" && <Vector src={characterSix} />}
            {tile === "characterSeven" && <Vector src={characterSeven} />}
            {tile === "characterEight" && <Vector src={characterEight} />}
            {tile === "characterNine" && <Vector src={characterNine} />}
            {tile === "dragonRed" && <Vector src={dragonRed} />}
            {tile === "dragonGreen" && <Vector src={dragonGreen} />}
            {tile === "dragonWhite" && <Vector src={dragonWhite} />}
            {tile === "windEast" && <Vector src={windEast} />}
            {tile === "windSouth" && <Vector src={windSouth} />}
            {tile === "windWest" && <Vector src={windWest} />}
            {tile === "windNorth" && <Vector src={windNorth} />}
        </Wrapper>
    );
};

export default Tile;
