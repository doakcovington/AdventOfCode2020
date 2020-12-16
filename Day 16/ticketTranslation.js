function ticketTranslation() {
  fetch("./input.txt")
    .then((response) => response.text())
    .then((input) => {
      const [fields, tickets] = input.split("\n\n");
      const valid = fields.match(/\d+-\d+/g).reduce((a, v) => {
        let [start, end] = v.split("-").map((a) => parseInt(a));
        for (let j = start; j <= end; j++) {
          a.add(j);
        }
        return a;
      }, new Set());

      const nums = tickets.match(/\d+/g).map((v) => parseInt(v));

      let v = nums.filter((num) => !valid.has(num)).reduce((a, b) => a + b, 0);
      console.log(v);
    });
}

ticketTranslation();