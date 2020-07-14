import {isObject} from './shared/util';
import {baseHandlers} from './baseHandlers';

//target 即是我当前要代理的对象
export function reactive(target) {
    //创建一个响应式的对象， 目标对象不一定是数组或者是对象  可能还有 set map

    //这里就是一个高阶函数的使用，每次用的时候我都通过这个函数来产生一个新的功能
    return createReactiveObject(target, baseHandlers);
}


//我们在这里根据 target 创建名称而响应式的对象
function createReactiveObject(target, baseHandlers) {
    //不是对象，直接返回即可
    if (!isObject(target)) { return target; }

    //如果是对象，就去代理它的get方法和set方法
    const observed = new Proxy(target, baseHandlers);
    return observed;

}
