/**
 * How many occurences of a string in another string
 * @param  {[String]}  search                  search string
 * @param  {Boolean} [isCaseSensitive=false] determine the Case Sensitivity of search
 * @return {int}                          number of occurences
 */
export default String.prototype.howMany = function(search, isCaseSensitive = false) {
    var re = new RegExp(search, "g" + (isCaseSensitive == true ? "" : 'i'));
    return (this.match(re) || []).length;
}
