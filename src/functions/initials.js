/**
 * @Author: Arsan Gamal <arsangamal>
 * @Date:   2018-09-05T14:58:18+02:00
 * @Email:  arsan.gamal@gmail.com
 * @Filename: initials.js
 * @Last modified by:   arsangamal
 * @Last modified time: 2018-09-05T16:00:14+02:00
 */

/**
 * Get initials of a string
 * @param  {Boolean} isInitialsCapital  return capital letters
 * @param  {[type]}  execludeWordsArray ignore words in execludeWordsArray
 * @return {[String]}                     initials of the string
 */
export default (function() {
    String.prototype.initials = function(isInitialsCapital, execludeWordsArray) {
        var
            result = "",
            words = this.trim().split(" ");
        // if no execlude words go and iterate over the words array
        if (typeof execludeWordsArray == 'undefined' || execludeWordsArray.length == 0) {
            // append each words first letter to result variable
            words.forEach(function(word) {
                result += word.split("")[0];
            })
        } else {
            // ignore execluded words from string
            words.forEach(function(word) {
                if (execludeWordsArray.indexOf(word) == -1) {
                    result += word.split("")[0];
                }
            })
        }
        // return the result uppercase if isInitialsCapital is true else as it is
        return (isInitialsCapital === true ? result.toUpperCase() : result);
    }
})()
