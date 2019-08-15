words = [
    "nuts", "simply", "meme review", "bask", "the colors", "that pill be looking fine", "the", "is",
    "arsenic", "poisoning", "remarkable", "mark", "sticker", "brand", "lifestyle", "philosopher", "designer",
    "programmer", "first", "second", "third",
];

exports.word = function() {
    return words[Math.floor(Math.random() * words.length)];
};

exports.sentence = function() {
    console.log(exports.word());
};
