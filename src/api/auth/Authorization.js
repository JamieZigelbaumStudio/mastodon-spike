import {Cookie} from './Cookie';

const mastodon = require('mastodon-api');

export class Authorization {

    constructor(instance) {
        this.instance = instance;
        this.cookie = new Cookie();
    }

    registerApp = () => {
        return mastodon.createOAuthApp(
            this.instance.apps_url,
            this.instance.name,
            this.instance.scopes,
            this.instance.redirectUri
        );
    };

    getClientAuthorizationUrl = () => {
        return this.registerApp()
            .catch((err) => console.error(err))
            .then((res) => {

                this.deleteCookies();
                this.createCookies(res);

                return mastodon.getAuthorizationUrl(
                    res.client_id,
                    res.client_secret,
                    this.instance.domain_url,
                    this.instance.scopes,
                    this.instance.redirectUri
                )
            });
    };

    getAccessToken = (authorizationCode) => {
        const clientId = this.cookie.readCookie("clientID");
        const clientSecret = this.cookie.readCookie("clientSecret");


        return mastodon
            .getAccessToken(
                clientId,
                clientSecret,
                authorizationCode,
                this.instance.domain_url,
                this.instance.redirectUri,
            )
    };

    deleteCookies = () => {
        this.cookie.deleteCookie("clientID");
        this.cookie.deleteCookie("clientSecret");
    };

    createCookies = (response) => {
        this.cookie.createCookie("clientID", response.client_id);
        this.cookie.createCookie("clientSecret", response.client_secret);
    };
}
