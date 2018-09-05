/**
 * @Author: Arsan Gamal <arsangamal>
 * @Date:   2018-09-05T15:02:27+02:00
 * @Email:  arsan.gamal@gmail.com
 * @Filename: lastWord.js
 * @Last modified by:   arsangamal
 * @Last modified time: 2018-09-05T16:00:46+02:00
 */
export default (function() {
    /**
     * Get last word of the text
     * @return {[String]} the last word
     */
    String.prototype.lastWord = function() {
        var str = this.trim().split(" ");
        return str[str.length - 1];
    }
})()
