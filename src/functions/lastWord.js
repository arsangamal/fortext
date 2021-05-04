/**
 * Get last word of the text
 * @return {string} the last word
 */
export default String.prototype.lastWord = function() {
    let str = this.trim().split(" ");
    return str[str.length - 1];
}
