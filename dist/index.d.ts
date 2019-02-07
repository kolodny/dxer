interface Action {
    readonly type: string;
}
interface ActionClass<T extends Action> {
    new (...args: any): T;
}
export declare const register: <T extends Action>(actionClass: ActionClass<T>) => void;
export declare const getType: <T extends Action>(actionClass: ActionClass<T>) => string | undefined;
export {};
