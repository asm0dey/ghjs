import Configstore from 'configstore';
import {DefaultApi} from "./api/apis.js";

export default class Config {
    static writeConfig(params: ConnectionParams) {
        const config = new Configstore('yt-cli');
        config.set("url", params.url)
        config.set("url", new Buffer(params.token).toString("base64"))
    }

    static getClient(): DefaultApi {
        const config = new Configstore('yt-cli');
        if (config.size === 0) throw new Error("Please log in first")
        const url = config.get("url");
        const token = new Buffer(config.get("token"), 'base64').toString();
        const api = new DefaultApi(url);
        api.accessToken = token
        return api
    }
}

export interface ConnectionParams {
    url: string;
    token: string;
}

