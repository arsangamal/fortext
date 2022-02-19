import 'functions/suffix'

test('can suffix string with another string', function(){
    var text = 'Robert downey';

    expect(text.suffix(" Jr")).toBe("Robert downey Jr");
});

test('can suffix string with another string', function(){
    var text = 'Robert downey';

    expect(text.suffix(undefined)).toBe("Robert downey");
});