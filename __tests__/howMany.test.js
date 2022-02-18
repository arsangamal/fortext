import "functions/howMany"

test('can count how many string in another string', function(){
    var text = "Dont repeat what i dont repeat";

    expect(text.howMany("repeat")).toBe(2);
});

test('can count how many case sensitive string in another string', function(){
    var text = "Dont repeat what i dont Repeat";

    expect(text.howMany("repeat", true)).toBe(1);
});