/**
 * Check the existence of a string in the string
 * @return {[Boolean]} existence of string
 */

export default String.prototype.exists = function(str) {
    return this.indexOf(str) !== -1;
}
