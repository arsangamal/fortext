
/**
 * Add suffix to string
 * 
 * @param str string
 * @returns string
 */
export default String.prototype.suffix = function(str = ''){
    return this + (str || '');
}