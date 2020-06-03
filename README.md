# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by Stephen Harnois.

The module can be used as follows:

```
$ npm install --global sharnois-palindrome
$ vim test.js
let Phrase = require("sharnois-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```