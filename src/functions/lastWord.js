/**
 * Get last word of the text
 * @return {[String]} the last word
 */
export default String.prototype.lastWord = function() {
    var str = this.trim().split(" ");
    return str[str.length - 1];
}
