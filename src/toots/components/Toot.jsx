import React, {useState} from "react";

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
        {status.data.content}
    </div> : "Loading status";
};