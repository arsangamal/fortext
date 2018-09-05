/**
 * @Author: Arsan Gamal <arsangamal>
 * @Date:   2018-09-05T15:01:35+02:00
 * @Email:  arsan.gamal@gmail.com
 * @Filename: firstWord.js
 * @Last modified by:   arsangamal
 * @Last modified time: 2018-09-05T15:02:12+02:00
 */

export default (function() {
    /**
     * Get first word from string
     * @return {[String]} the first word
     */
    String.prototype.firstWord = function() {
        return this.trim().split(" ")[0];
    }
})()
