import { styled } from "@stitches/react";
import React, { FC } from "react";

import bambooOne from "./assets/bamboo-1.min.svg";

const Wrapper = styled("div", {
    border: "1px solid black",
    borderRadius: ".5em",
    width: "6em",
    height: "8em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
});

const Vector = styled("img", { width: "100%" });

const Tile: FC = () => {
    return (
        <Wrapper>
            <Vector src={bambooOne} />
        </Wrapper>
    );
};

export default Tile;
