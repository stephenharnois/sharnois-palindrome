String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

// Define a Phrse object.
function Phrase(content) {
    this.content = content;
    
    this.processedContent = function () {
        return this.content.toLowerCase();
    }

    this.palindrome = function () {
        return this.processedContent() === this.processedContent().reverse();
    }

    this.louder = function () {
        return this.content.toUpperCase();
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    this.processedContent = function () {
        return this.translation.toLowerCase();
    }
}

TranslatedPhrase.prototype = new Phrase();

let phrase = new Phrase("Racecar");
console.log(`Are you a palindrome? ${phrase.palindrome()}`);

let scream = new Phrase("yo adrian!");
console.log(scream.louder());

let frase = new TranslatedPhrase("recognize", "reconocer");
console.log(`Are you a palindrome? ${frase.palindrome()}`);

let napoleonsLament = new Phrase("Able was I ere I saw Elba")
console.log(`Are you a palindrome? ${napoleonsLament.palindrome()}`);
