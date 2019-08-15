words = [
    "nuts", "simply", "meme review", "bask", "the colors", "that pill be looking fine", "the", "is",
    "arsenic", "poisoning", "remarkable", "mark", "sticker", "brand", "lifestyle", "philosopher", "designer",
    "programmer", "first", "second", "third",
];

exports.word = function() {
    return words[Math.floor(Math.random() * words.length)];
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.sentence = function() {
    let count = Math.floor(Math.random() * 9);
    // Add root word
    let string = capitalize(exports.word());
    for (let word = 0; word < count; word++) {
        if (Math.random() < 0.2) {
            string += ","
        }
        string += " " + exports.word();
    }
    string += punctuation();
    return string;
};

console.log(exports.sentence());
