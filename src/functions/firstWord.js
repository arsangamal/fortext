/**
 * Get first word from string
 * @return {[String]} the first word
 */

export default String.prototype.firstWord = function() {
    return this.trim().split(" ")[0];
}
