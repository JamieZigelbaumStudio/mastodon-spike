import React, {useState} from "react";
import parse from 'html-react-parser';

export const Toot = (props) => {

    const [status, setStatus] = useState();

    const getStatus = () => {
        return props.mastodon
            .fetchStatus(props.toot.id);

    };

    if (!status) {
        getStatus()
            .then(status => setStatus(status));
    }

    return status ? <div>
        {parse(status.data.content)}
    </div> : "Loading status";
};