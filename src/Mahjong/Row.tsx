import { styled } from "@stitches/react";
import React, { FC } from "react";
import { TOrientation } from "./types";

const RowWrapper = styled("div", {
    display: "flex",
    variants: {
        orientation: {
            bottom: {},
            left: {
                flexDirection: "column",
            },
            right: {
                flexDirection: "column",
            },
            top: {
            },
        },
    },
});

interface Props {
    children: React.ReactElement[] | React.ReactElement;
    orientation?: TOrientation;
}

const Row: FC<Props> = ({ children, orientation = "bottom" }) => {
    return (
        <RowWrapper orientation={orientation}>
            {React.Children.map(children, (child) => {
                if (child.props.orientation) {
                    return child;
                } else {
                    return React.cloneElement(child, { orientation });
                }
            })}
        </RowWrapper>
    );
};

export default Row;
