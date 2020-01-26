const MastodonAPI = require('mastodon-api');

const TIMELINES_HOME = '/timelines/home';
const STATUS = '/statuses';

export class Mastodon {

    constructor(domain, accessToken) {
        this.domain = domain;
        this.accessToken = accessToken;
        this.mastodon = new MastodonAPI(this.getConfig(domain));
    }

    fetchHome = () => {
        return this.mastodon.get(TIMELINES_HOME, {limit: 40})
    };

    fetchStatus = (id) => {
        return this.mastodon.get(`${STATUS}/${id}/context`);
    };

    getConfig = () => {
        return {
            access_token: this.accessToken,
            api_url: this.domain
        };
    }
}
