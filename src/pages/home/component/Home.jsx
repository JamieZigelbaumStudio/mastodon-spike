import React, {useState} from "react";
import {ThreadLink} from "./ThreadLink";
import {Mastodon} from "../../../api/auth/Mastodon";
import {masToServer} from "../../common/model/MasToServer";
import * as S from "../styles/Home"

export const Home = (props) => {
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

    const displayTimeline = () => {
        return toots.map(data => {
            return <S.StatusID key={data.id.toString()}>
                <ThreadLink toot={data} mastodon={mastodon}/>
            </S.StatusID>
        });
    };

    return !toots ? <div>Fetching toots</div> : <div>
        Logged In!
        {displayTimeline()}
    </div>
};
