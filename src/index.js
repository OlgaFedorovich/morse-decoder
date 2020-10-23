const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'space':  ' ',
};

function decode(expr) {
    let letterCode;
    let array = [];
    let k = 0;
    let str = '';
    let array2 = [];
    for( let i = 1; i <= expr.length / 10; i++ ) {

        letterCode = expr.slice(k, (i*10));
        array.push(letterCode);
        k = k + 10;
    }
    console.log(array);

    array.forEach(function(string, index) {
        str = '';
        for (let i = 0; i < string.length; i++) {
            
            if(string[i] === '0') continue;
            if(string[i] === '1' && string[i+1] === '0') {
                str = str + '.';
            }
            if(string[i] === '1' && string[i+1] === '1') {
                str = str + '-';
            }
            if(string[i] === '*') {
                str = 'space';
            }
            i++;
        }
        
        array2.push(MORSE_TABLE[`${str}`]);
    });
    console.log(array2.join(''));
    return array2.join('');
}

module.exports = {
    decode
}