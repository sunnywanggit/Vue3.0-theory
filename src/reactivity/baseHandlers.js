import {hasKey, isObject} from './shared/util';
import {reactive} from './reactive';

const get = createGetter();
const set = createSetter();

//target 目标对象 key  receiver 原数组
function createGetter() {
    return function get(target, key, receiver) {//proxy reflect
        const res = Reflect.get(target, key, receiver);//等价于target[key]

        console.log('用户对这个对象取值了', target, key, receiver);
        //如果对象里面还有对象，就递归代理这个对象
        if (isObject(res)) {
            return reactive(res);
        }
        return res;
    };
}

function createSetter() {
    return function set(target, key, value, receiver) {
        //需要判断是修改属性还是增加属性，如果原来的值和新设置的值一样，则什么都不做
        const oldValue = target[key];
        const result = Reflect.set(target, key, value, receiver);

        if (!hasKey(target, key)) {
            console.log('新增属性操作',target,key);
        } else if(value !== oldValue){
            console.log('修改操作', target, key);
        }
        //其他情况就是值没有变
        return result;
    };
}

//拦截普通对象和数组的处理
export const baseHandlers = {
    get, set
};
