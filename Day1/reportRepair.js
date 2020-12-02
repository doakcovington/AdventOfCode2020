async function getReport() {
  fetch("./reportRepair.txt")
    .then((response) => response.text())
    .then((data) => {
    let report = data.split("\n");
    let number1 = 0;
    let number2 = 0;
    for (let i = 0; i < report.length; i++) {
      for (let j= 0; j <= report.length; j++) {
        if (parseInt(report[i],10) + parseInt(report[j],10) === 2020) {
          number1 = parseInt(report[i],10);
          number2 = parseInt(report[j],10);
        }
      }
    }
    return number1 * number2;
  })
}