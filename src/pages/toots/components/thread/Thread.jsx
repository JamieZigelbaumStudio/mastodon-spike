import React, {useState} from "react";
import {Toot} from "./Toot";
import {Assets} from "../assets/Assets";
import {masToServer} from "../../../common/model/MasToServer";
import {Mastodon} from "../../../../api/auth/Mastodon";
import {ThreadContent, ThreadWrapper} from "../../styles/thread/Thread";

export const Thread = (props) => {
    const [status, setStatus] = useState();
    const [selectedAsset, setSelectedAsset] = useState();

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
            return <div key={stat.id}>
                <Toot status={stat.content} asset={selectedAsset}/>
            </div>;
        });
    };

    const assetCallback = (currentAsset) => {
        setSelectedAsset(currentAsset[0]);
    };

    const displayThread = () => {
        const thread = status.data.descendants;
        if (!thread.length) {
            return <ThreadWrapper>No thread found!</ThreadWrapper>
        }
        return (
            <ThreadWrapper>
                <ThreadContent>
                    {getThreadStatus(thread)}
                </ThreadContent>
                <Assets assetCallback={assetCallback}/>
            </ThreadWrapper>
        );
    };

    return status ? displayThread(status) : "Fetching status"
};