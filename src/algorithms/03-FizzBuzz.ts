import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("FIZZBUZZ");

/**
 * Returns the corresponding string for a given number based on the FizzBuzz game rules.
 *
 * @param num - The number to be evaluated.
 * @returns The corresponding string for the given number:
 * - "Fizz" if the number is divisible by 3.
 * - "Buzz" if the number is divisible by 5.
 * - "FizzBuzz" if the number is divisible by both 3 and 5.
 * - The number converted to a string if it is not divisible by 3 or 5.
 */
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

// TODO: FG: Move these to their own testing section later on
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
