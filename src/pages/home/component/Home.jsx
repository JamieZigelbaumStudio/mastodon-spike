import React, {useState} from "react";
import {ThreadLink} from "./ThreadLink";
import {Mastodon} from "../../../api/auth/Mastodon";
import {masToServer} from "../../common/model/MasToServer";
import * as S from "../styles/Home"
import {HomeHeader, HomeTitle, HomeWrapper, LogoutButton, Timeline} from "../styles/Home"
import {LoginTitle} from "../../login/styles/Login";

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

    const handleLogout = () => {
        window.localStorage.removeItem('token');
        window.location.href = '/';
    };

    return !toots ? <LoginTitle>Loading...</LoginTitle> : <HomeWrapper>
        <HomeHeader>
            <HomeTitle>
                Timeline
            </HomeTitle>
            <LogoutButton onClick={handleLogout}>
                Log Out
            </LogoutButton>
        </HomeHeader>
        <Timeline>
            {displayTimeline()}
        </Timeline>
    </HomeWrapper>
};
