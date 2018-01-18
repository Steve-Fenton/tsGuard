export class TSGuard {
    public static readonly number = 1;
    public static readonly string = 'A';
    public static readonly boolean = true;

    static isNumber(item: number | any): item is number {
        return (typeof item === 'number');
    }
    
    static isString(item: string | any): item is string {
        return (typeof item === 'string');
    }
    
    static isObject(item: object | any): item is object {
        return (typeof item === 'object');
    }
    
    static isStructure<T>(item: any | {[key: string]: any}, matcher: T): item is T {
        for (let key in matcher) {
            if (typeof item[key] !== typeof matcher[key]) {
                return false;
            }
        }

        return true;
    }
}