import { styled } from "@stitches/react";
import React, { FC } from "react";
import { TOrientation } from "./types";

const Wrapper = styled("div", {
    display: "flex",
});

interface Props {
    children: React.ReactElement[] | React.ReactElement;
    orientation?: TOrientation;
}

const Row: FC<Props> = ({ children, orientation = "bottom" }) => {
    return (
        <Wrapper>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, { orientation });
            })}
        </Wrapper>
    );
};

export default Row;
