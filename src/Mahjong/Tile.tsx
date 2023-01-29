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

type TKind =
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
    kind: TKind;
    label?: string
}

const Kind: FC<Props> = ({ kind }) => {
    return (
        <Wrapper>
            {kind === "bambooOne" && <Vector src={bambooOne} />}
            {kind === "bambooTwo" && <Vector src={bambooTwo} />}
            {kind === "bambooThree" && <Vector src={bambooThree} />}
            {kind === "bambooFour" && <Vector src={bambooFour} />}
            {kind === "bambooFive" && <Vector src={bambooFive} />}
            {kind === "bambooSix" && <Vector src={bambooSix} />}
            {kind === "bambooSeven" && <Vector src={bambooSeven} />}
            {kind === "bambooEight" && <Vector src={bambooEight} />}
            {kind === "bambooNine" && <Vector src={bambooNine} />}
            {kind === "circleOne" && <Vector src={circleOne} />}
            {kind === "circleTwo" && <Vector src={circleTwo} />}
            {kind === "circleThree" && <Vector src={circleThree} />}
            {kind === "circleFour" && <Vector src={circleFour} />}
            {kind === "circleFive" && <Vector src={circleFive} />}
            {kind === "circleSix" && <Vector src={circleSix} />}
            {kind === "circleSeven" && <Vector src={circleSeven} />}
            {kind === "circleEight" && <Vector src={circleEight} />}
            {kind === "circleNine" && <Vector src={circleNine} />}
            {kind === "characterOne" && <Vector src={characterOne} />}
            {kind === "characterTwo" && <Vector src={characterTwo} />}
            {kind === "characterThree" && <Vector src={characterThree} />}
            {kind === "characterFour" && <Vector src={characterFour} />}
            {kind === "characterFive" && <Vector src={characterFive} />}
            {kind === "characterSix" && <Vector src={characterSix} />}
            {kind === "characterSeven" && <Vector src={characterSeven} />}
            {kind === "characterEight" && <Vector src={characterEight} />}
            {kind === "characterNine" && <Vector src={characterNine} />}
            {kind === "dragonRed" && <Vector src={dragonRed} />}
            {kind === "dragonGreen" && <Vector src={dragonGreen} />}
            {kind === "dragonWhite" && <Vector src={dragonWhite} />}
            {kind === "windEast" && <Vector src={windEast} />}
            {kind === "windSouth" && <Vector src={windSouth} />}
            {kind === "windWest" && <Vector src={windWest} />}
            {kind === "windNorth" && <Vector src={windNorth} />}
        </Wrapper>
    );
};

export default Kind;
