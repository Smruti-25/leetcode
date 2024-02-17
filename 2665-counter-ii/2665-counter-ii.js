/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const a = init;
    return {
        reset : function() {
            init = a;
            return init;
        },
        increment : function(){
            init++;
            return init;
        },
        decrement : function(){
            init--;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */