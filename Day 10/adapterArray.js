function adapterArray() {
  fetch("./input.txt")
    .then((response) => response.text())
    .then((input) => {
      let inputArray = input.split("\n");
      let voltages = [];
      for (let i = 0; i < inputArray.length; i++) {
        voltages.push(parseInt(inputArray[i], 10));
      }

      //sort voltages from low int to high
      //last element in sorted array + 3 is device voltage
      voltages.sort((a, b) => a - b);
      console.log(voltages);

      let deviceVoltage = voltages[voltages.length - 1] + 3;
      console.log(deviceVoltage); // => 22

      //iterate over voltages array
      //grab first element and set it to currentVoltage
      //grab next element
      //if the difference b/w 2 elements is 1 add 1 to jolt1
      //if difference is 3 add 1 to jolt3

      let currentVoltage = 0;
      let volt1 = 1;
      let volt3 = 1;

      for (let i = 0; i < voltages.length; i++) {
        let previousVoltage = voltages[i - 1];
        if (voltages[i] - previousVoltage === 1) {
          volt1++;
        } else if (voltages[i] - previousVoltage === 3) {
          volt3++;
        }
      }
      console.log("volt1:", volt1);
      console.log("volt3:", volt3);
    });
}

adapterArray();