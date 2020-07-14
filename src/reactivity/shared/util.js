export const isObject = (val) => typeof val === 'object' && val !== null;

export const hasKey = (target, key) => Object.prototype.hasOwnProperty.call(target, key);
