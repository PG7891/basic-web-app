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

  if (query.toLowerCase().includes("What is (\d+) plus (\d+)\?")) {
    const number1 = parseInt(query[1], 10);
    const number2 = parseInt(query[2], 10);
    const sum = number1+number2
    return (
      sum.toString()
    );
  }


  return "";
}
