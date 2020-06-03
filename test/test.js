let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
    
    describe("#palindrome", function() {

        it("Should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("apple");
            assert(!nonPalindrome.palindrome());
        });

        it("Should return false for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return true for a mixed-case palindrome", function() {
            let mixedPalindrome = new Phrase("RaceCar");
            assert(mixedPalindrome.palindrome());
        });

        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert(punctuatedPalindrome.palindrome());
        });

    });

    describe("#letters", function() {
        it("should return only letters", function() {
            let lettersPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(lettersPalindrome.letters(), "MadamImAdam");
        });

        it("should return empty string if no letters", function() {
            let noLettersPalindrome = new Phrase("183492547912369817234");
            assert.strictEqual(noLettersPalindrome.letters(), "");
        });
    });
});