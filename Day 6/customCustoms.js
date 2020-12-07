function cutsomCustoms() {
  fetch("./input.txt")
    .then((response) => response.text())
    .then((data) => {
      const groups = data.split("\n\n").map((group) => {
        return group
          .split(/\s+/)
          .map((answer) => {
            return answer.split("");
          })
          .reduce((a, b) => a.filter((c) => b.includes(c))).length;
      });
      console.log(
        groups.reduce((sum, current) => {
          return sum + current;
        }, 0)
      );
    });
}

cutsomCustoms();
