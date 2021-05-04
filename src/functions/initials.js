/**
 * Get initials of a string
 * @param  {Boolean} isInitialsCapital  return capital letters
 * @param  {type}  excludedWordsArray ignore words in execludeWordsArray
 * @return {String} initials of  a string
 */
export default String.prototype.initials = function(isInitialsCapital, excludedWordsArray) {
    var
        result = "",
        words = this.trim().split(" ");
    // if no exclude words go and iterate over the words array
    if (typeof excludedWordsArray == 'undefined' || excludedWordsArray.length === 0) {
        // append each words first letter to result variable
        words.forEach(function(word) {
            result += word.split("")[0];
        })
    } else {
        // ignore excluded words from string
        words.forEach(function(word) {
            if (excludedWordsArray.indexOf(word) === -1) {
                result += word.split("")[0];
            }
        })
    }
    // return the result uppercase if isInitialsCapital is true else as it is
    return (isInitialsCapital === true ? result.toUpperCase() : result);
}
