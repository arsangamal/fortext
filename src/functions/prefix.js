
/**
* Add prefix to a string

* @param str string
* @returns string
*/
export default String.prototype.prefix = function (str = '') {
    return (str || '') + this;
};