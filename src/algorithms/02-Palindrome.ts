import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("PALINDROME");

/**
 * Determines whether a given string is a palindrome.
 *
 * @param str - The string to check for palindrome.
 * @returns True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str: string): boolean => {
  const sanitizedStr = str.trim().toLowerCase();
  const strLen = sanitizedStr.length;

  let leftIdx = 0;
  let rightIdx = strLen - 1;

  while (leftIdx < rightIdx) {
    const leftChar = sanitizedStr[leftIdx];
    const rightChar = sanitizedStr[rightIdx];

    if (leftChar !== rightChar) {
      return false;
    }

    ++leftIdx;
    --rightIdx;
  }

  return true;
};

// TODO: FG: Move these to their own testing section later on
logger.log("HowAreYou");
logger.log(isPalindrome("HowAreYou"));

logger.log("Rotator");
logger.log(isPalindrome("Rotator"));

logger.log("RoTAToR rOtATOr");
logger.log(isPalindrome("RoTAToR rOtATOr"));

export { isPalindrome };
