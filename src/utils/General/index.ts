import crypto from 'crypto';
import { Message, MessageOptions } from 'discord.js';

export default {
    trimArray(arr: Array<any>, maxLen = 10) {
        if (arr.length > maxLen) {
            arr = arr.slice(0, maxLen);
            arr.push(`${arr.length - maxLen} more...`);
        }
        return arr;
    },

    shorten(text: string, maxLen = 2000) {
        return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
    },

    formatNumber(number: number | string, minimumFractionDigits = 0) {
        return Number.parseFloat(number.toString()).toLocaleString(undefined, {
            minimumFractionDigits,
            maximumFractionDigits: 2
        });
    },

    base64(text: string, mode = 'encode'): string | null {
        if (mode === 'encode') return Buffer.from(text).toString('base64');
        if (mode === 'decode') return Buffer.from(text, 'base64').toString('utf8') || null;
        return null;
    },

    embedURL(title: string, url: string, display: string) {
        return `[${title}](${url.replace(/\)/g, '%27')}${display ? ` '${display}'` : ''})`;
    },

    hash(text: string, algorithm: string) {
        return crypto.createHash(algorithm).update(text).digest('hex');
    },

    escapeRegex(str: string) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },

    replaceAll(str: string, term: string, replacement: string) {
        return str.replace(new RegExp(this.escapeRegex(term), 'g'), replacement);
    },

    chunk(array: Array<any>, chunkSize = 0): Array<Array<any>> {
        if (!Array.isArray(array)) throw new Error('First Parameter must be an array');
        return array.reduce((previous, current) => {
            let chunk: Array<any>;
            if (previous.length === 0 || previous[previous.length - 1].length === chunkSize) {
                chunk = [];
                previous.push(chunk);
            } else {
                chunk = previous[previous.length - 1];
            }
            chunk.push(current);
            return previous;
        }, []);
    },

    shuffle(obj: Array<any> | string | any): Array<any> | string | any {
        if (!obj) return null;
        if (Array.isArray(obj)) {
            let i = obj.length;
            while (i) {
                let j = Math.floor(Math.random() * i);
                let t = obj[--i];
                obj[i] = obj[j];
                obj[j] = t;
            }
            return obj;
        }
        if (typeof obj === 'string') return this.shuffle(obj.split('')).join('');
        return obj;
    },

    removeFromArray(...arr: any) {
        let what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    },

    capitalize(str: string) {
        if (typeof str !== 'string') return '';
        let j = str.split(' ');
        let a = j.map(x => x.charAt(0).toUpperCase() + x.slice(1))
        return a.join(' ')
    },

    async awaitReply(message: Message, question: MessageOptions, limit = 60000, obj = false) {
        const filter = (m: Message) => m.author.id === message.author.id;

        await message.channel.send(question);

        try {
            const collected = await message.channel.awaitMessages({ filter, max: 1, time: limit, errors: ['time'] });
            if (obj) return collected.first();
            return collected.first().content;
        } catch (e) {
            return false;
        }
    },

    removeDuplicates(arr: Array<any>) {
        let n = arr.length;

        if (n == 0 || n == 1)
            return n;

        let temp = new Array(n);

        let j = 0;
        for (let i = 0; i < n - 1; i++)
            if (arr[i] != arr[i + 1])
                temp[j++] = arr[i];

        temp[j++] = arr[n - 1];

        for (let i = 0; i < j; i++)
            arr[i] = temp[i];

        return j;
    }
}