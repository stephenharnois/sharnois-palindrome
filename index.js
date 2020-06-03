module.exports = Phrase;

String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

// Define a Phrse object.
function Phrase(content) {
    this.content = content;
    
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }

    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    this.louder = function () {
        return this.content.toUpperCase();
    }
}
