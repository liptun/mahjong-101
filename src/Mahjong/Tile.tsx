import { styled } from "@stitches/react";
import React, { FC } from "react";

import { TKind, TOrientation } from "./types";

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

const scale = 32;
const tile = {
    width: 2.4 * scale,
    height: 3.2 * scale,
    depth: 0.6 * scale,
};

const Wrapper = styled("div", {
    width: tile.width,
    height: tile.height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f2e7",
    margin: ".1em",
    padding: ".5em .2em",
    position: "relative",
    "&::after, &::before": {
        content: "",
        position: "absolute",
        display: "block",
    },
    "&::after": {
        width: tile.depth,
        height: "100%",
        left: "100%",
        top: tile.depth / 2,
        background: "#e8e5d8",
        transform: "skewY(45deg)",
    },
    "&::before": {
        content: "",
        position: "absolute",
        top: "100%",
        left: tile.depth / 2,
        display: "block",
        width: "100%",
        height: tile.depth,
        background: "#d5d1c2",
        transform: "skewX(45deg)",
    },
    variants: {
        orientation: {
            bottom: {},
            left: {
                width: tile.height,
                height: tile.width,
                "& img": {
                    transform: "rotateZ(90deg)",
                },
            },
            right: {
                width: tile.height,
                height: tile.width,
                "& img": {
                    transform: "rotateZ(-90deg)",
                },
            },
            top: {
                "& img": {
                    transform: "rotateZ(180deg)",
                },
            },
        },
    },
});

const Vector = styled("img", { width: tile.width });

interface Props {
    kind: TKind;
    orientation?: TOrientation;
}

const Kind: FC<Props> = ({ kind, orientation = "bottom" }) => {
    return (
        <Wrapper orientation={orientation}>
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
