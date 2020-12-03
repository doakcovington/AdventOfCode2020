function tobogganTrajectory() {
  let pointer;
  fetch("./input.txt")
    .then((response) => response.text())
    .then((data) => {
      let input = data.split("\n");
      let treesHit = 0;
      
      for (let i = 0; i < input.length; i++) {
        let row = input[i].split("");
        for (let j = 0; j < row.length; j++) {
          let pointer = j + 3;
          if (row[pointer] === "#") {
            treesHit++;
            pointer += 3;
            break;
          }
        }
      }
    console.log("treesHit:", treesHit);
  });
}

tobogganTrajectory();