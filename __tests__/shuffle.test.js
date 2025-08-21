import "functions/shuffle"

test('can shuffle words in a string', function(){
    var text = "hello world test";
    var shuffled = text.shuffle();
    
    // Check that the result is different length but same words
    expect(shuffled.length).toBe(text.length);
    
    // Check that all original words are still present
    var originalWords = text.split(" ").sort();
    var shuffledWords = shuffled.split(" ").sort();
    expect(shuffledWords).toEqual(originalWords);
});

test('can shuffle words with custom separator', function(){
    var text = "apple,banana,cherry";
    var shuffled = text.shuffle(",");
    
    // Check that the result has same length
    expect(shuffled.length).toBe(text.length);
    
    // Check that all original words are still present
    var originalWords = text.split(",").sort();
    var shuffledWords = shuffled.split(",").sort();
    expect(shuffledWords).toEqual(originalWords);
});

test('handles single word', function(){
    var text = "hello";
    var shuffled = text.shuffle();
    
    expect(shuffled).toBe("hello");
});

test('handles empty string', function(){
    var text = "";
    var shuffled = text.shuffle();
    
    expect(shuffled).toBe("");
});

test('handles string with extra spaces', function(){
    var text = "  hello   world  ";
    var shuffled = text.shuffle();
    
    // Should trim and handle properly
    var originalWords = text.trim().split(" ").filter(word => word.length > 0).sort();
    var shuffledWords = shuffled.split(" ").filter(word => word.length > 0).sort();
    expect(shuffledWords).toEqual(originalWords);
});