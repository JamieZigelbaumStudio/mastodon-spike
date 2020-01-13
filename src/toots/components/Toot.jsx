import React from "react";
import parse from "html-react-parser";

export const Toot = (props) => {
    return props.status ? parse(props.status) : "Fetching status"
};