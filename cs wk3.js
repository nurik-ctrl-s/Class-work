const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Введите вашу оценку: ", function (grade) {
  r1.question("Какое у вас поведение? (хорошее/плохое): ", function (behavior) {
    let score = Number(grade);

    if (behavior === "хорошее") {
      score += 5;
    }

    console.log("Итоговый балл:", score);

    if (score >= 95) {
      console.log("Оценка: A+");
    } else if (score >= 90) {
      console.log("Оценка: A");
    } else if (score >= 80) {
      console.log("Оценка: B");
    } else if (score >= 65) {
      console.log("Оценка: C");
    } else {
      console.log("Ты не сдал.");
    }

    r1.close();
  });
});
