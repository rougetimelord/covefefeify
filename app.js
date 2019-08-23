var getElement = id => {
    return document.getElementById(id);
}
var replacements = { 
    'b': 'p', 
    'c': 'g', 
    'd': 't', 
    'f': 'v', 
    'g': 'k', 
    'k': 'g', 
    'p': 'b', 
    's': 'z', 
    't': 'd', 
    'v': 'f', 
    'z': 's' }
var y = 0;
var processText = () => {
    var string = getElement('in').value;
    var strings = string.split(' ');
    var message = "";
    strings.forEach(value => {
        var match = value.match(/[aeiou][b-df-hj-np-tv-z]{1,}[aeiouy]/)
        var out;
        if (match === null) {
            out = value;
        }
        else {
            var first = value.substring(0, match.index + 2);
            var con = first.substr(-1);
            var vowel = match[0].substr(-1);
            var conVowel = (typeof(replacements[con]) == 'undefined') ? con + vowel : replacements[con] + vowel;
            out = first + conVowel.repeat(2);
            console.log([match, first, con, vowel, conVowel, out])
        }
        message += out + " "
    })
    message = message.slice(0, -1);

    if (message == string){
        getElement('in').classList="f";
        return getElement('out').innerHTML = "Autocorrect can't f*ck that up";
    }
    getElement('in').classList = '';
    getElement('out').innerHTML = "That's <div>" + message + "</div> in 3AM twitter";
}
var processTimeout = function () {
    //Sets a timeout until to process the text
    clearTimeout(y);
    y = setTimeout(processText, 500);
}
var clearProcess = function () {
    //Clears the timeout if a new character is added
    if (getElement('in').value.length == 0) {
        getElement('out').innerHTML = "Translate normal language into autocorrect messing up";
        clearTimeout(y);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keypress', processTimeout);
    document.addEventListener('keydown', clearProcess);
})
