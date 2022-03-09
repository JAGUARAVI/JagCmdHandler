interface Data {
    [key: string]: string | Data
}

const DefaultData: Data = {
    'en': {
        'error': 'An error occurred.',
        'welcome': 'Welcome %user%!'
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

    get(...keys: string[]): string | Data {
        if (!keys.length) return this.data;

        const path: string[] = [];
        keys.map((key) => key.split('.').map((_key) => path.push(_key)));

        let ob = this.data as string | Data;
        for (let i = 0; i < path.length; i++) {
            if (typeof ob === 'string') return ob;
            ob = ob[path[i]];
            if (!ob) {
                if (path[0] != 'en' && this.getKeys().includes(path[0]) && path[1]) {
                    path[0] = 'en';
                    return this.get(...path);
                }
                return null;
            }
        }

        return ob;
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