const mastodonAPI = require('mastodon-api');

const TIMELINES_HOME = '/timelines/home';
const STATUS = '/statuses';

export class Mastodon {

    constructor(domain, accessToken) {
        this.domain = domain;
        this.accessToken = accessToken;
        this.mastodon = new mastodonAPI(this.getConfig(domain));
    }

    fetchHome = () => {
        return this.mastodon.get(TIMELINES_HOME, {limit: 2})
    };

    fetchStatus = (id) => {
        return this.mastodon.get(`${STATUS}/${id}`);
    };

    getConfig = () => {
        return {
            access_token: this.accessToken,
            api_url: this.domain
        };
    }
}