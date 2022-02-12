export default class Utils {
    static logger: {
        info: (text: any, str?: string) => void;
        success: (text: any, str?: string) => void;
        warn: (text: any, str?: string) => void;
        error: (text: any, str?: string) => void;
        debug: (text: any, str?: string) => void;
    };
    static general: {
        trimArray(arr: string[], maxLen?: number): string[];
        shorten(text: string, maxLen?: number): string;
        formatNumber(number: string | number, minimumFractionDigits?: number): string;
        base64(text: string, mode?: string): string;
        embedURL(title: string, url: string, display: string): string;
        hash(text: string, algorithm: string): string;
        escapeRegex(str: string): string;
        replaceAll(str: string, term: string, replacement: string): string;
        chunk<T>(array: T[], chunkSize?: number): T[][];
        shuffle(obj: any): any;
        removeFromArray<T_1>(arr: T_1[], ...rem: T_1[]): T_1[];
        capitalize(str: string): string;
        removeDuplicates<T_2>(arr: T_2[]): T_2[];
    };
    static time: {
        msToString: (duration: number) => string;
    };
    static parsebool: (v: string) => boolean;
    static merge: (model: {
        [key: string]: any;
    }, value: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
}
