import React, {useState} from "react";
import {Toot} from "./Toot";
import {Mastodon} from "../../api/auth/Mastodon";
import {masToServer} from "../../model/MasToServer";

export const Toots = (props) => {
    const [accessToken,] = useState(props.token);
    const [toots, setToots] = useState();
    const mastodon = new Mastodon(masToServer.api_url, accessToken);

    const fetchToots = () => {
        mastodon
            .fetchHome()
            .then(response => setToots(response.data));
    };

    if (!toots) {
        fetchToots();
    }

    const displayToots = () => {
        return toots.map(data => {
            return <li>
                <Toot toot={data} mastodon={mastodon}/>
            </li>
        });
    };

    return !toots ? <div>Fetching toots</div> : <div>
        Logged In!
        <ul>{displayToots()}</ul>
    </div>
};
