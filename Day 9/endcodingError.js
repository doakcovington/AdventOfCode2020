function endcodingError() {
  fetch('./input.txt')
  .then(response => response.text)
  .then((data) => {
    let lines = data.split(/\n/).map(Number);

    const range = 25;
  
    for (let x = range; x < lines.length; x++) {
      const test = lines.slice(x - range, x).sort((a, b) => a - b);
      while (test.length >= 2) {
        if (test[0] + test[test.length - 1] === lines[x]) break;
        if (test[0] + test[test.length - 1] < lines[x]) test.shift();
        if (test[0] + test[test.length - 1] > lines[x]) test.pop();
      }
      if (test.length < 2) return console.log(lines[x]);
    }
  })
}
