import { Locale }  from 'discord-api-types/v10';

interface Data {
    [key: string]: string | Data
}

const DefaultData: Data = {
    'en': {
        'errors': {
            'title': 'Error!',
            'header': 'An error occurred!',
            'body': 'An error occurred while completing that operation! Please try again later.',
            'tryAgain': 'Please try again later.',
        },
        'command': {
            'notImplemented': 'This command is not yet implemented.',
            'ownerOnly': 'This command is only available to the bot owner.',
            'serverOwnerOnly': 'This command is only available to the server owner.',
            'botInsufficientPerissions': 'Sorry, but I need the following permissions to perform this command -\n%perms%',
        },
        'welcome': 'Welcome %user%!',
    }
};

export = class Messages {
    data: Data

    constructor(data: Data = {}) {
        this.data = Object.assign(DefaultData, data);
    }

    import(data: Data, language?: string): this {
        if (language) this.data = Object.assign(this.data, { [language]: data });
        else this.data = Object.assign(this.data, data);
        return this;
    }

    get(...keys: string[]): string {
        if (!keys.length) return this.data.toString();

        const path: string[] = [];
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

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    parseVariables(str: string, data: { [key: string]: any }): string {
        return str.replace(/%([^%]+)%/g, (match, key: string) => {
            if (data[key] != null) return data[key].toString();
            return match;
        });
    }

    getKeys(...keys: string[]): string[] {
        if (!keys.length) return Object.keys(this.data);

        const path: string[] = [];
        keys.map((key) => key.split('.').map((_key) => path.push(_key)));

        let ob = this.data as string | Data;
        for (let i = 0; i < path.length; i++) {
            if (typeof ob === 'string') return null;
            ob = ob[path[i]];
            return null;
        }

        return Object.keys(ob);
    }
}