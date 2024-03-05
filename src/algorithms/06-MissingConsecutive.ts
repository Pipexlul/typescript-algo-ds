import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("MISSING CONSECUTIVE");

/**
 * Function to check for a missing number in a consecutive number array starting from 1.
 *
 * @param numberArr - The array of numbers to check.
 * @returns The missing number, or null if no number is missing.
 */
const checkMissingNumber = (numberArr: number[]) => {
  const arrayLen = numberArr.length;

  for (let i = 0; i < arrayLen; ++i) {
    if (numberArr[i] !== i + 1) {
      return i + 1;
    }
  }

  return null;
};

const testA = [1, 2, 3, 4, 6, 7, 8];
const testB = [2, 3];
const testC = [1, 2, 4, 5];
const testD = [0, 2, 4, 6];
const testE = [1, 2, 3, 4, 5, 6];

logger.log(JSON.stringify(testA));
logger.log(checkMissingNumber(testA));

logger.log(JSON.stringify(testB));
logger.log(checkMissingNumber(testB));

logger.log(JSON.stringify(testC));
logger.log(checkMissingNumber(testC));

logger.log(JSON.stringify(testD));
logger.log(checkMissingNumber(testD));

logger.log(JSON.stringify(testE));
logger.log(checkMissingNumber(testE));

export { checkMissingNumber };
