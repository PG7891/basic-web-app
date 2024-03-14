export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return (
      "Prathik"
    );
  }

  const regex = /What is (\d+) plus (\d+)?/;

  const match = query.match(regex);
  
  if (match) {
    // Extract numbers from the regex groups and calculate the sum
    const number1 = parseInt(match[1], 10);
    const number2 = parseInt(match[2], 10);
    const sum = number1 + number2;

    // Return the sum as a string
    return sum.toString();
  }

  const regex2 = /Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/;

  const match2 = query.match(regex2);
  
  if (match2) {
    // Extract numbers from the regex groups and calculate the sum
    const number1 = parseInt(match2[1], 10);
    const number2 = parseInt(match2[2], 10);
    const number3 = parseInt(match2[3], 10);
    const sum = Math.max(number1, number2, number3)

    // Return the sum as a string
    return sum.toString();
  }

  const regex3 = /What is (\d+) multiplied by (\d+)?/;

  const match3 = query.match(regex3);
  
  if (match3) {
    // Extract numbers from the regex groups and calculate the sum
    const number1 = parseInt(match3[1], 10);
    const number2 = parseInt(match3[2], 10);
    const sum = number1 * number2;

    // Return the sum as a string
    return sum.toString();
  }

  const regex4 = /Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)?/;

  const match4 = query.match(regex4);
  
  if (match4) {
    for(let i = 1; i < 8; i++){
      const number = parseInt(match4[i], 10);
      const squareRoot = Math.sqrt(number);
      const cubeRoot = Math.cbrt(number);
      if(squareRoot === Math.round(squareRoot) && cubeRoot === Math.round(cubeRoot)){
        return number.toString();
      }
    }

    // Return the sum as a string

  }

  const regex5 = /What is (\d+) plus (\d+) plus (\d+)?/;

  const match5 = query.match(regex5);
  
  if (match5) {
    // Extract numbers from the regex groups and calculate the sum
    const number1 = parseInt(match5[1], 10);
    const number2 = parseInt(match5[2], 10);
    const number3 = parseInt(match5[3], 10);
    const sum = number1 + number2 + number3;

    // Return the sum as a string
    return sum.toString();
  }

  const regex6 = /What is (\d+) minus (\d+)?/;

  const match6 = query.match(regex6);
  
  if (match6) {
    // Extract numbers from the regex groups and calculate the sum
    const number1 = parseInt(match6[1], 10);
    const number2 = parseInt(match6[2], 10);
    const sum = number1 - number2;

    // Return the sum as a string
    return sum.toString();
  }


  return "";
}
