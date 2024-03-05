import { SimpleLogger } from "../utils/logger";

const disableLogger = false;
const logger = new SimpleLogger("REVERSE STRING", disableLogger);

/**
 * Reverse a string using core JavaScript methods
 * @param str - String to be reversed
 * @returns - Reversed string
 */
const reverseStringMethods = (str: string): string => {
  return str.split("").reverse().join("");
};

/**
 * Reverse a string using a loop
 * @param str - String to be reversed
 * @returns - Reversed string
 */
const reverseStringLoop = (str: string): string => {
  // An array is used to prevent concatenating to a string with each iteration
  // Similar to using StringBuilder(s) in other languages
  const reversedArr: string[] = [];

  const strLen = str.length; // Save this here to prevent accessing it in the loop every iteration

  for (let i = strLen - 1; i >= 0; --i) {
    reversedArr.push(str[i]);
  }

  return reversedArr.join("");
};

// TODO: FG: Move these to their own testing section later on
logger.log("METHOD");
logger.log("Hello There");
logger.log(reverseStringMethods("Hello There"));
logger.log("ArriVeDerci");
logger.log(reverseStringMethods("ArriVeDerci"));

logger.log("LOOP");
logger.log("Hello There");
logger.log(reverseStringLoop("Hello There"));
logger.log("ArriVeDerci");
logger.log(reverseStringLoop("ArriVeDerci"));

export { reverseStringMethods, reverseStringLoop };
