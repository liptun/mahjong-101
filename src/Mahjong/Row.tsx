import { styled } from "@stitches/react";
import React, { FC, ReactNode } from "react";

const Wrapper = styled("div", {
    display: "flex",
    gridGap: ".3em",
});

interface Props {
    children: ReactNode;
}

const Row: FC<Props> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Row;
