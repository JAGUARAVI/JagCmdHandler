"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const crypto_1 = __importDefault(require("crypto"));
module.exports = {
    trimArray(arr, maxLen = 10) {
        if (arr.length > maxLen) {
            arr = arr.slice(0, maxLen);
            arr.push(`${arr.length - maxLen} more...`);
        }
        return arr;
    },
    shorten(text, maxLen = 2000) {
        return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
    },
    formatNumber(number, minimumFractionDigits = 0) {
        return Number.parseFloat(number.toString()).toLocaleString(undefined, {
            minimumFractionDigits,
            maximumFractionDigits: 2
        });
    },
    base64(text, mode = 'encode') {
        if (mode === 'encode')
            return Buffer.from(text).toString('base64');
        if (mode === 'decode')
            return Buffer.from(text, 'base64').toString('utf8') || null;
        return null;
    },
    embedURL(title, url, display) {
        return `[${title}](${url.replace(/\)/g, '%27')}${display ? ` '${display}'` : ''})`;
    },
    hash(text, algorithm) {
        return crypto_1.default.createHash(algorithm).update(text).digest('hex');
    },
    escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },
    replaceAll(str, term, replacement) {
        return str.replace(new RegExp(this.escapeRegex(term), 'g'), replacement);
    },
    chunk(array, chunkSize = 0) {
        if (!Array.isArray(array))
            throw new Error('First Parameter must be an array');
        return array.reduce((previous, current) => {
            let chunk;
            if (previous.length === 0 || previous[previous.length - 1].length === chunkSize) {
                chunk = [];
                previous.push(chunk);
            }
            else {
                chunk = previous[previous.length - 1];
            }
            chunk.push(current);
            return previous;
        }, []);
    },
    shuffle(obj) {
        if (!obj)
            return null;
        if (Array.isArray(obj)) {
            let i = obj.length;
            while (i) {
                const j = Math.floor(Math.random() * i);
                const t = obj[--i];
                obj[i] = obj[j];
                obj[j] = t;
            }
            return obj;
        }
        if (typeof obj === 'string')
            return this.shuffle(obj.split('')).join('');
        return obj;
    },
    removeFromArray(arr, ...rem) {
        let what, L = rem.length, ax;
        while (L > 1 && rem.length) {
            what = rem[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    },
    capitalize(str) {
        if (typeof str !== 'string')
            return '';
        const j = str.split(' ');
        const a = j.map(x => x.charAt(0).toUpperCase() + x.slice(1));
        return a.join(' ');
    },
    removeDuplicates(arr) {
        const n = arr.length;
        if (n == 0 || n == 1)
            return arr;
        const temp = new Array(n);
        let j = 0;
        for (let i = 0; i < n - 1; i++)
            if (arr[i] != arr[i + 1])
                temp[j++] = arr[i];
        temp[j++] = arr[n - 1];
        for (let i = 0; i < j; i++)
            arr[i] = temp[i];
        return arr;
    }
};
