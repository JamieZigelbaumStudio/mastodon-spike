import React, {useState} from "react";
import parse from "html-react-parser";

export const TootThread = (props) => {
    const [status, setStatus] = useState();
    const id = props.location.query.id;

    const getStatus = () => {
        return props.location.mastodon
            .fetchStatus(id);
    };

    if (!status) {
        getStatus()
            .then(status => setStatus(status));
    }

    const parseDom = (thread) => {
        return thread.map(stat => {
            return <li>{parse(stat.content)}</li>;
        });
    };

    const displayThread = () => {
        const thread = status.data.descendants;
        if (!thread.length) {
            return <div>No thread</div>
        }
        return <ul>{parseDom(thread)}</ul>;
    };

    return status ? displayThread(status) : "Fetching status"
};