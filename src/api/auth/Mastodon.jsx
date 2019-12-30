const mastodonAPI = require('mastodon-api');

export class Mastodon {
    TIMELINES_HOME = '/timelines/home';

    constructor(domain, accessToken) {
        this.domain = domain;
        this.accessToken = accessToken;
        this.mastodon = new mastodonAPI(this.getConfig(domain));
    }

    fetchHome = () => {
        return this.mastodon.get(this.TIMELINES_HOME, {limit: 2})
    };

    getConfig = () => {
        return {
            access_token: this.accessToken,
            api_url: this.domain
        };
    }
}