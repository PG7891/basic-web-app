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

  const regex = /What is (\d+) plus (\d+)/;

  const match = query.match(regex);
  
  if (match) {
    // Extract numbers from the regex groups and calculate the sum
    const number1 = parseInt(match[1], 10);
    const number2 = parseInt(match[2], 10);
    const sum = number1 + number2;

    // Return the sum as a string
    return sum.toString();
  }


  return "";
}
