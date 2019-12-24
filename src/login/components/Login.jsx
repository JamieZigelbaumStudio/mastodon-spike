import React, {useState} from "react";
import {Button} from "../styles/Button";
import {masToServer} from "../../model/MasToServer";
import {Authorization} from "../../api/auth/Authorization";
import {Mastodon} from "../../api/auth/Mastodon";

const getCodeFromUrl = () => {
    const url = window.location.href;

    const code = url.match(/=[\w\d-]+/);

    if (code && code.length > 0) {
        return code[0].substr(1);
    }
};

const fetchToots = (accessToken) => {
    const mas = new Mastodon(masToServer.api_url, accessToken);
    return mas
        .fetchHome()
        .then(response => response.data);
};

const getToots = (authorization, authorizationCode) => {
    return authorization
        .getAccessToken(authorizationCode)
        .catch((err) => console.log("Error in getting access token", err))
        .then(accessToken => {
            console.log(`Access token - ${accessToken}`)
            return fetchToots(accessToken);
        });
};

export const Login = () => {

    const authorization = new Authorization(masToServer);
    const [redirectUrl, setRedirectUrl] = useState("");

    const buttonClicked = () => {
        const authorizationUrl = authorization.getClientAuthorizationUrl();
        authorizationUrl.then(url => setRedirectUrl(url));
    };

    if (redirectUrl) {
        window.location.assign(redirectUrl)
    }

    const authorizationCode = getCodeFromUrl();

    if (authorizationCode) {
        const toots = getToots(authorization, authorizationCode);
        if (toots) {
            console.log(toots)
        }
    }

    return <div>
        {authorizationCode}
        <Button onClick={buttonClicked}>Login with Mastodon</Button>
    </div>
};
