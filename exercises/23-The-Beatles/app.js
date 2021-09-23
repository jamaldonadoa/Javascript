
function sing() {
    var lyrics = "let it be, "
    
    for (var i = 1; i < 4; i++) {
        lyrics += "let it be, "; 
    }
    
    lyrics += "whisper words of wisdom, "

    for (var i = 1; i < 6; i++) {
        lyrics += "let it be, "; 
    }

    lyrics += "there will be an answer, let it be"

    return lyrics
}
//Your code above
console.log(sing());
