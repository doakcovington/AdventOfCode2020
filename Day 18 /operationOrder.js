function operationOrder() {
  fetch("./input.txt")
    .then((response) => response.text())
    .then((input) => {
      let data = input;
      let lines = data.split(/\n/);

      const re = /\([^()]+\)/;

      function calc(l) {
        // console.log(l);
        const parts = l.split(" ");
        let res = +parts[0];
        for (let i = 1; i < parts.length; i += 2) {
          switch (parts[i]) {
            case "+":
              res += +parts[i + 1];
              break;
            case "*":
              res *= +parts[i + 1];
              break;
          }
        }
        return res;
      }

      let result = 0;

      for (let line of lines) {
        let m;
        while ((m = re.exec(line))) {
          const parVal = calc(m[0].substr(1, m[0].length - 2));
          line =
            line.substr(0, m.index) +
            parVal +
            line.substr(m.index + m[0].length);
          // console.log(line);
        }
        result += calc(line);
      }

      console.log(result);
    });
}

operationOrder();