import { Locale } from 'discord-api-types/v10';
import * as DefaultData from '../languages/default.json';
import { Data } from '../types/index';
import Utils from '../utils';

export = class Messages {
    data: Data;

    constructor(data: Data = {}) {
        this.data = Utils.merge(DefaultData, data, false);
    }

    /** Import data. */
    import(data: Data, language?: string): this {
        if (language) this.data = Utils.merge(this.data, { [language]: data }, false);
        else this.data = Utils.merge(this.data, data, false);
        return this;
    }

    /** Get data from object path. (Example- 'en.errors.title') */
    get(...keys: Array<string>): string {
        if (!keys.length) return this.data.toString();

        const path: Array<string> = [];
        keys.map((key) => key.split('.').map((_key) => path.push(_key)));

        let ob = this.data as string | Data;
        for (let i = 0; i < path.length; i++) {
            if (typeof ob === 'string') return ob;
            ob = ob[path[i]];
            if (!ob) {
                if (path[0] != 'en' && (this.getKeys().includes(path[0]) || Object.values(Locale).map((k) => k.toString()).includes(path[0])) && path[1]) {
                    path[0] = 'en';
                    return this.get(...path);
                }
                return null;
            }
        }

        return ob.toString();
    }

    /** Parse variables in string. */
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parseVariables(str: string, data: { [key: string]: any } = {}): string {
        if (!str) return '';
        data.nl = '\n';
        return str.replace(/%([^%]+)%/g, (match, key: string) => {
            if (data[key] != null) return data[key].toString();
            return match;
        });
    }

    /** Get keys of objects from path. */
    getKeys(...keys: Array<string>): Array<string> {
        if (!keys.length) return Object.keys(this.data);

        const path: Array<string> = [];
        keys.map((key) => key.split('.').map((_key) => path.push(_key)));

        let ob = this.data as string | Data;
        for (let i = 0; i < path.length; i++) {
            if (typeof ob === 'string') return null;
            ob = ob[path[i]];
            return null;
        }

        return Object.keys(ob);
    }

    /**
     * Reset all data.
     * @param keepDefault If true, keep default data.
     */
    clear(keepDefault = true): this {
        if (keepDefault) this.data = Object.assign({}, DefaultData);
        else this.data = {};
        return this;
    }
}