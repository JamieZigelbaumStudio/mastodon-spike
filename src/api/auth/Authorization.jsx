const mastodon = require('mastodon-api');

export class Authorization {

    constructor(instance) {
        this.instance = instance;
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

    getAccessToken = (authorization_code) => {
        const clientId = this.readCookie("clientID");
        const clientSecret = this.readCookie("clientSecret");


        return mastodon
            .getAccessToken(
                clientId,
                clientSecret,
                authorization_code,
                this.instance.domain_url,
                this.instance.redirectUri,
            )
    };

    deleteCookies = () => {
        this.deleteCookie("clientID");
        this.deleteCookie("clientSecret");
    };

    createCookies = (response) => {
        this.createCookie("clientID", response.client_id);
        this.createCookie("clientSecret", response.client_secret);
    };

    createCookie = (key, value) => {
        document.cookie = escape(key) + "=" + escape(value) + ";";
    };

    readCookie = (name) => {
        let key = name + "=";
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(key) === 0) {
                return cookie.substring(key.length, cookie.length);
            }
        }
        return null;
    };

    deleteCookie = (name) => {
        this.createCookie(name, "", -1);
    }
}