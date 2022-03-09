import crypto from 'crypto';

export = {
	trimArray(arr: Array<string>, maxLen = 10): Array<string> {
		if (arr.length > maxLen) {
			arr = arr.slice(0, maxLen);
			arr.push(`${arr.length - maxLen} more...`);
		}
		return arr;
	},

	shorten(text: string, maxLen = 2000): string {
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	},

	formatNumber(number: number | string, minimumFractionDigits = 0): string {
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

	embedURL(title: string, url: string, display: string): string {
		return `[${title}](${url.replace(/\)/g, '%27')}${display ? ` '${display}'` : ''})`;
	},

	hash(text: string, algorithm: string): string {
		return crypto.createHash(algorithm).update(text).digest('hex');
	},

	escapeRegex(str: string): string {
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	},

	replaceAll(str: string, term: string, replacement: string): string {
		return str.replace(new RegExp(this.escapeRegex(term), 'g'), replacement);
	},

	chunk<T>(array: Array<T>, chunkSize = 0): Array<Array<T>> {
		if (!Array.isArray(array)) throw new Error('First Parameter must be an array');
		return array.reduce((previous, current) => {
			let chunk: Array<T>;
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

	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	shuffle<T>(obj: Array<T> | string): Array<T> | string {
		if (!obj) return null;
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
		if (typeof obj === 'string') return (this.shuffle(obj.split('')) as Array<string>).join('');
		return obj;
	},

	removeFromArray<T>(arr: Array<T>, ...rem: Array<T>): Array<T> {
		let what, L = rem.length, ax;
		while (L > 1 && rem.length) {
			what = rem[--L];
			while ((ax = arr.indexOf(what)) !== -1) {
				arr.splice(ax, 1);
			}
		}
		return arr;
	},

	capitalize(str: string): string {
		if (typeof str !== 'string') return '';
		const j = str.split(' ');
		const a = j.map(x => x.charAt(0).toUpperCase() + x.slice(1));
		return a.join(' ');
	},

	removeDuplicates<T>(arr: Array<T>): Array<T> {
		const n = arr.length;

		if (n == 0 || n == 1)
			return arr;

		const temp = new Array<T>(n);

		let j = 0;
		for (let i = 0; i < n - 1; i++)
			if (arr[i] != arr[i + 1])
				temp[j++] = arr[i];

		temp[j++] = arr[n - 1];

		for (let i = 0; i < j; i++)
			arr[i] = temp[i];

		return arr;
	}
}