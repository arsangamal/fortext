import 'functions/exists'

test("can check if text exists in another text", function(){
    var text = "My name is Arsan";
    
    expect(text.exists("Arsan")).toBe(true)
});

test("can check if text does not exist in another text", function(){
    var text = "My name is Arsan";
    
    expect(text.exists("Something")).toBe(false)
});