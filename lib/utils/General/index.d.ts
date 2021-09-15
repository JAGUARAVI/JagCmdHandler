declare const _default: {
    trimArray(arr: Array<string>, maxLen?: number): Array<string>;
    shorten(text: string, maxLen?: number): string;
    formatNumber(number: number | string, minimumFractionDigits?: number): string;
    base64(text: string, mode?: string): string | null;
    embedURL(title: string, url: string, display: string): string;
    hash(text: string, algorithm: string): string;
    escapeRegex(str: string): string;
    replaceAll(str: string, term: string, replacement: string): string;
    chunk<T>(array: T[], chunkSize?: number): T[][];
    shuffle(obj: Array<any> | string | any): Array<any> | string | any;
    removeFromArray<T_1>(arr: T_1[], ...rem: T_1[]): T_1[];
    capitalize(str: string): string;
    removeDuplicates<T_2>(arr: T_2[]): T_2[];
};
export = _default;
