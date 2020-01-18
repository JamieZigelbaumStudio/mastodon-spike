import React, {useState} from "react";
import {Toot} from "./Toot";
import {Styled} from "../../styles/thread/Toot"
import {Assets} from "../assets/Assets";
import {masToServer} from "../../../common/model/MasToServer";
import {Mastodon} from "../../../../api/auth/Mastodon";

export const Thread = (props) => {
    const [status, setStatus] = useState();

    const getStatus = () => {
        function createMastodonInstance() {

            const tokenInStorage = window.localStorage.getItem('token');
            return new Mastodon(masToServer.api_url, tokenInStorage);
        }

        const mastodon = props.location.mastodon ?
            props.location.mastodon : createMastodonInstance();

        const id = props.location.query ?
            props.location.query.id : window.location.hash.match(/\d+$/);

        return mastodon
            .fetchStatus(id);
    };

    if (!status) {
        getStatus()
            .then(status => setStatus(status));
    }

    const getThreadStatus = (thread) => {
        return thread.map(stat => {
            return <li key={stat.id}>
                <Toot status={stat.content}/>
            </li>;
        });
    };

    const displayThread = () => {
        const thread = status.data.descendants;
        if (!thread.length) {
            return <Styled.ThreadWrapper>No thread</Styled.ThreadWrapper>
        }
        return (
            <Styled.ThreadWrapper>
                <Styled.Thread>
                    <ul>{getThreadStatus(thread)}</ul>
                </Styled.Thread>
                <Assets/>
            </Styled.ThreadWrapper>
        );
    };

    return status ? displayThread(status) : "Fetching status"
};