import "functions/lastWord"

test('can get the last word of string', function(){
    var text = "the last word is fortext";

    expect(text.lastWord()).toBe("fortext");
});