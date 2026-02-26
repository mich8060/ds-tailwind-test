import React from "react";
import { Text } from "./Text";

export default {
    title: "UI/Text",
    component: Text,
    argTypes: {
        as: { control: "text" },
        variant: {
            control: "select",
            options: [
                "display-128", "display-96", "display-72", "display-60", "display-48", "display-36",
                "heading-32", "heading-28", "heading-24",
                "body-20", "body-16", "body-14", "body-12"
            ]
        },
        weight: { control: "select", options: ["regular", "medium", "semibold", "bold"] },
        leading: { control: "select", options: ["tight", "regular", "loose"] }
    }
};

export const Playground = {
    args: {
        as: "h2",
        variant: "display-48",
        weight: "bold",
        leading: "regular",
        children: "The quick brown fox jumps over the lazy dog"
    }
};

export const BodyExample = {
    args: {
        as: "p",
        variant: "body-16",
        weight: "regular",
        leading: "loose",
        children:
            "This example shows a body paragraph with loose leading. Resize the viewport to see responsive token overrides."
    }
};
