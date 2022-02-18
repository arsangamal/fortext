import 'functions/firstWord'

test("can get first word of text", function(){
    var text = "Package name is forext";

    expect(text.firstWord()).toBe("Package");
});