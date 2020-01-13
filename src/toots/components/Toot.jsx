import React from "react";
import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html"

export const Toot = (props) => {
    return props.status ? parse(sanitizeHtml(props.status)) : "Fetching status"
};