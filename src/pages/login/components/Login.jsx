import React, {useState} from "react";
import {Button} from "../styles/Button";
import {masToServer} from "../../common/model/MasToServer";
import {Authorization} from "../../../api/auth/Authorization";
import {Home} from "../../home/component/Home";

const getAuthorizationCode = () => {
    const url = window.location.href;

    const code = url.match(/=[\w\d-]+/);

    if (code && code.length > 0) {
        return code[0].substr(1);
    }
};

const getAccessToken = (authorization, authorizationCode) => {
    return authorization
        .getAccessToken(authorizationCode)
        .catch((err) => console.log("Error in getting access token", err))
        .then(accessToken => {
            return accessToken;
        });
};

export const Login = () => {

    const authorization = new Authorization(masToServer);
    const [redirectUrl, setRedirectUrl] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const tokenInStorage = window.localStorage.getItem('token');
    if (tokenInStorage) {
        return <Home token={tokenInStorage}/>
    }

    if (accessToken) {
        if (!window.localStorage.getItem('token')) {
            window.localStorage.setItem('token', accessToken);
        }
        return <Home token={accessToken}/>
    }

    const buttonClicked = () => {
        const authorizationUrl = authorization.getClientAuthorizationUrl();
        authorizationUrl.then(url => setRedirectUrl(url));
    };

    if (redirectUrl) {
        window.location.assign(redirectUrl)
    }

    const authorizationCode = getAuthorizationCode();

    if (authorizationCode) {
        getAccessToken(authorization, authorizationCode)
            .then(token => setAccessToken(token));
    }

    return <div>
        <Button onClick={buttonClicked}>Login with Mastodon</Button>
    </div>
};
