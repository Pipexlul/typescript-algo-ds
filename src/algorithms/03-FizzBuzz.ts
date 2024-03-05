import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("FIZZBUZZ");

const fizzBuzz = (num: number): string => {
  const fizz = num % 3 === 0;
  const buzz = num % 5 === 0;

  if (fizz && buzz) {
    return "FizzBuzz";
  }

  if (fizz) {
    return "Fizz";
  }

  if (buzz) {
    return "Buzz";
  }

  return num.toString();
};

logger.log(3);
logger.log(fizzBuzz(3));

logger.log(5);
logger.log(fizzBuzz(5));

logger.log(15);
logger.log(fizzBuzz(15));

logger.log(22);
logger.log(fizzBuzz(22));

logger.log(125);
logger.log(fizzBuzz(125));

export { fizzBuzz };
