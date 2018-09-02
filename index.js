exports.fortext = (function() {
    // initials function
    String.prototype.initials = function(isInitialsCapital, execludeWordsArray) {
        var
            result = "",
            words = this.trim().split(" ");
        // if no execlude words go and iterate over the words array
        if ( execludeWordsArray.constructor === Array && execludeWordsArray.length == 0) {
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
})();
