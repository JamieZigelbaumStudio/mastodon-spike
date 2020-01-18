import React from "react";
import {Link} from "react-router-dom";
import {Toot} from "../../toots/components/thread/Toot";

export const ThreadLink = (props) => {
    const displayThread = () => {
        return <Link to={{
            pathname: `/status/${props.toot.id}`,
            query: {
                id: props.toot.id
            },
            mastodon: props.mastodon
        }}>
            <Toot status={props.toot.content}/>
        </Link>
    };

    return displayThread();
};