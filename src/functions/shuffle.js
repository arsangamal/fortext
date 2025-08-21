/**
 * Shuffle the words in a string
 * @param  {string} [separator=" "] the separator to split and join words
 * @return {string} the string with shuffled words
 */
export default String.prototype.shuffle = function(separator = " ") {
    const trimmed = this.trim();
    if (!trimmed) return trimmed;
    
    const words = trimmed.split(separator).filter(word => word.length > 0);
    
    // Fisher-Yates shuffle algorithm
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    
    return words.join(separator);
}