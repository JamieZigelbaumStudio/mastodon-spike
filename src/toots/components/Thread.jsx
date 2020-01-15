import React, {useState} from "react";
import {Toot} from "./Toot";
import {Styled} from "../styles/Toot"
import {Assets} from "../assets/Assets";

export const Thread = (props) => {
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
                <Styled.Assets>
                    <Assets/>
                </Styled.Assets>
            </Styled.ThreadWrapper>
        );
    };

    return status ? displayThread(status) : "Fetching status"
};