## Fortext

A javascript library for text operations.

### Available functions

#### initials([ isInitialsCapital [ , execludeWordsArray ] ])
##### get the initials of a string capital or as it is, with or without some words

    var text = "national aeronautics and space administration";
    console.log(text.initials()); // output: naasa
    console.log(text.initials(false,["and"])); //output: nasa
    console.log(text.initials(true,["and"])); //output: NASA

#### firstWord()
##### get the first word of a string

    var text = "national aeronautics and space administration";
    console.log(text.firstWord()); //output: national

#### lastWord()
##### get the last word of a string

    var text = "national aeronautics and space administration";
    console.log(text.lastWord()); //output: administration

**More is yet to come ;)** ..
