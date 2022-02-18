import "functions/initials";

test('can get initials from a string', function(){
    var text = "Arsan Gamal";

    expect(text.initials()).toBe("AG");
});

test('can get initials as uppercase from a string', function(){
    var text = "arsan gamal";

    expect(text.initials(true)).toBe("AG");
});

test('can get initials execluding words from a string', function(){
    var text = "arsan gamal";

    expect(text.initials(true, "gamal")).toBe("A");
});