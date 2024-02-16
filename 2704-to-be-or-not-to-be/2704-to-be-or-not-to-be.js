/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const equals = (a) => {
        if(val!==a)
            throw new Error("Not Equal");
        else
            return true;
    };
    const notEquals = (b) => {
        if(val===b)
            throw new Error("Equal");
        else
            return true;
    };
    let result = {
        toBe: equals,
        notToBe: notEquals
    }
    return result;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */