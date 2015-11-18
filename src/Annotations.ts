import {registry} from "./RouterRegistry";

export function Middleware(middlewares:Array<Function>) {
    return function (object:any, methodName?:string) {
        registry.addMiddleware(object, methodName, middlewares);
    }
}

export function Controller(path?:string) {
    return function (object:any) {
        registry.addController(object, path);
    }
}

export function Get(path:string = '') {
    return function (object:any, methodName:string) {
        registry.addAction(object, methodName, 'get', path);
    }
}

export function Post(path:string = '') {
    return function (object:any, methodName:string) {
        registry.addAction(object, methodName, 'post', path);
    }
}

export function Delete(path:string = '') {
    return function (object:any, methodName:string) {
        registry.addAction(object, methodName, 'delete', path);
    }
}

export function Put(path:string = '') {
    return function (object:any, methodName:string) {
        registry.addAction(object, methodName, 'put', path);
    }
}

export function Patch(path:string = '') {
    return function (object:any, methodName:string) {
        registry.addAction(object, methodName, 'patch', path);
    }
}
