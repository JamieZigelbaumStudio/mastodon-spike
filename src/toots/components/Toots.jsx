import React, {useState} from "react";
import {Toot} from "./Toot";
import {Mastodon} from "../../api/auth/Mastodon";
import {masToServer} from "../../model/MasToServer";

export const Toots = (props) => {
    const [accessToken,] = useState(props.token);
    const [toots, setToots] = useState();

    const fetchToots = () => {
        const mas = new Mastodon(masToServer.api_url, accessToken);
        mas
            .fetchHome()
            .then(response => setToots(response.data));
    };

    if (!toots) {
        fetchToots();
    }

    const displayToots = () => {
        return toots.map(data => {
            console.log(data);
            return <li>
                <Toot toot={data}/>
            </li>
        });
    };

    return !toots ? <div>Fetching toots</div> : <div>
        Logged In!
        <ul>{displayToots()}</ul>
    </div>
};
