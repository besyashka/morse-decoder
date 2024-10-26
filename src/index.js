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
    ' ': ' ',
};

function decode(expr) {
    const arr = [];

    for (let i = 0; i < expr.length; i+= 10) {
      const encodedLetter = expr.slice(i, i + 10);
      arr.push(encodedLetter);
    }

    const symbolsArr = arr.map((item) => {
      item = item.replaceAll('**********', ' ');
      item = item.replaceAll('00', '')
      item = item.replaceAll('10', '.');
      item = item.replaceAll('11', '-');
      return item;
    })
  
    return symbolsArr.reduce((acc, item) => {
      acc += MORSE_TABLE[item];
      return acc;
    }, '');
}

module.exports = {
    decode
}