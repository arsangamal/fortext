import 'functions/prefix'

test('can prefix a string with other string', function(){
    var text = "John Doe";

    expect(text.prefix("Mr ")).toBe("Mr John Doe");
});

test('can prefix a string with undefined', function(){
    var text = "John Doe";

    expect(text.prefix(undefined)).toBe("John Doe");
});