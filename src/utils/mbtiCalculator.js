import { questions } from "@/data/questions";

export const calculateMBTI = (answers) => {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  answers.forEach((answer, index) => {
    const question = questions[index];
    const c = answer;
    console.log("c ==>",c, "question ==>", question);
    if (question.type === "E/I") {
      // answer(내가 선택)
      scores[answer === 0 ? "E" : "I"]++;
    } else if (question.type === "S/N") {
      scores[answer === 0 ? "S" : "N"]++;
    } else if (question.type === "T/F") {
      scores[answer === 0 ? "T" : "F"]++;
    } else if (question.type === "J/P") {
      scores[answer === 0 ? "J" : "P"]++;
    }
  });

  const result = `${scores.E >= scores.I ? "E" : "I"}${
    scores.S >= scores.N ? "S" : "N"
  }${scores.T >= scores.F ? "T" : "F"}${scores.J >= scores.P ? "J" : "P"}`;

  return result;
};