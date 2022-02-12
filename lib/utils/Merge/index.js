"use strict";
module.exports = function merge(model, value) {
    const obj1 = Object.assign({}, model), obj2 = Object.assign({}, value);
    for (const key in obj1) {
        if (typeof obj2[key] === 'object' && obj2[key].constructor === Object)
            obj1[key] = merge(obj1[key], obj2[key]);
        else if (key in obj2)
            obj1[key] = obj2[key];
    }
    return obj1;
};
