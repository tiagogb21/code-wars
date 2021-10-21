const Converter = {
  toAscii: function (str) {
    let hex = str.toString();
    let str1 = '';
    for (let n = 0; n < hex.length; n += 2) {
      str1 += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str1;
  },
  toHex: (str = '') => {
    const res = [];
    const { length: len } = str;
    for (let n = 0, l = len; n < l; n++) {
      const hex = Number(str.charCodeAt(n)).toString(16);
      res.push(hex);
    };
    return res.join('');
  }
}
