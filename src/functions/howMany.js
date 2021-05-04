/**
 * How many occurrences of a string in another string
 * @param  {string}  search                  search string
 * @param  {Boolean} [isCaseSensitive=false] determine the Case Sensitivity of search
 * @return {int}                          number of occurrences
 */
export default String.prototype.howMany = function(search, isCaseSensitive = false) {
    let modifier = "g" + "g" + (isCaseSensitive === true ? "" : 'i');
    let re = new RegExp(search, modifier);
    return (this.match(re) || []).length;
}
