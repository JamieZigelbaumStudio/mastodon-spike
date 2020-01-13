import React from "react";
import {Link} from "react-router-dom";

export const Timeline = (props) => {
    const displayThread = () => {
        return <Link to={{
            pathname: `/status/${props.toot.id}`,
            query: {
                id: props.toot.id
            },
            mastodon: props.mastodon
        }}>
            {props.toot.id}
        </Link>
    };

    return displayThread();
};