/**
 * @Author: arsan
 * @Date:   2018-09-03T18:57:11+02:00
 * @Last modified by:   arsan
 * @Last modified time: 2018-09-03T19:09:35+02:00
 */

(function() {


    /**
     * Get initials of a string
     * @param  {Boolean} isInitialsCapital  return capital letters
     * @param  {[type]}  execludeWordsArray ignore words in execludeWordsArray
     * @return {[String]}                     initials of the string
     */
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

    /**
     * Get first word from string
     * @return {[String]} the first word
     */
    String.prototype.firstWord = function() {
        return this.trim().split(" ")[0];
    }

    /**
     * Get last word of the text
     * @return {[String]} the last word
     */
    String.prototype.lastWord = function(){
        var str = this.trim().split(" ");
        return str[str.length-1];
    }


})();
