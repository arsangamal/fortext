import "functions/basename"

test("Can extract basename from file path", function(){
    var file = "/some/where/to/my/file.txt";
    var expected = "file.txt";
    
    expect(file.basename()).toBe(expected);
});


test("Can extract basename from directory path", function(){
    var file = "/some/where/to/my";
    var expected = "my";
    
    expect(file.basename()).toBe(expected);
});

test("Can extract basename from directory path with trailing slash", function(){
    var file = "/some/where/to/my/";
    var expected = "my";
    
    expect(file.basename()).toBe(expected);
});