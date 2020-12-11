function seatingSystem() {
  fetch("./input.txt")
    .then((response) => response.text())
    .then((input) => {
      let seats = input.split("\n").map((x) => x.split(""));

      let adjacent = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
      ];

      function next(seats) {
        let newSeats = seats.map((x) => x.map((y) => y));
        for (let row = 0; row < seats.length; row++) {
          for (let col = 0; col < seats[row].length; col++) {
            if (
              newSeats[row][col] == "L" &&
              adjacent.every((pair) => {
                return (
                  row + pair[0] < 0 ||
                  col + pair[1] < 0 ||
                  row + pair[0] >= seats.length ||
                  col + pair[1] >= seats[row].length ||
                  seats[row + pair[0]][col + pair[1]] != "#"
                );
              })
            ) {
              newSeats[row][col] = "#";
            } else if (
              newSeats[row][col] == "#" &&
              adjacent.reduce((acc, pair) => {
                return (
                  acc +
                  (row + pair[0] >= 0 &&
                  col + pair[1] >= 0 &&
                  row + pair[0] < seats.length &&
                  col + pair[1] < seats[row].length &&
                  seats[row + pair[0]][col + pair[1]] == "#"
                    ? 1
                    : 0)
                );
              }, 0) >= 4
            ) {
              newSeats[row][col] = "L";
            }
          }
        }
        return newSeats;
      }

      let output = seats.map((x) => x.map((y) => y));

      while (true) {
        let nextOutput = next(output);
        if (JSON.stringify(nextOutput) === JSON.stringify(output)) {
          break;
        }
        output = next(output);
      }

      let empty = output.reduce(
        (acc, row) =>
          acc + row.reduce((acc, seat) => acc + (seat === "#" ? 1 : 0), 0),
        0
      );

      console.log("Occupied seats:", empty);

      console.log("Seat map:\n\n" + output.map((x) => x.join("")).join("\n"));
    });
}

seatingSystem();