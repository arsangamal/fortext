
/**
 * Get the basename of a path
 */
export default String.prototype.basename = function(){
    var pathArray = this.trim().split("/");
    
    if(pathArray[pathArray.length - 1] == ''){
        pathArray.pop();
    }

    return pathArray[pathArray.length - 1];
}