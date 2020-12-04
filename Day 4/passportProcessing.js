
function passportProcessing() {
  fetch("./input.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      let input = data.split("\n\n");
      console.log("input:", input);
      //for each element in input
      //split each key/value in passport into array element
      let passports = [];

      for (let i = 0; i < input.length; i++) {
        passports.push(input[i].split(" "));
      }
      console.log("passports:", passports);
    });
}