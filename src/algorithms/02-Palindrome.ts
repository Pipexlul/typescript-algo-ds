import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("PALINDROME");

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

logger.log("HowAreYou");
logger.log(isPalindrome("HowAreYou"));

logger.log("Rotator");
logger.log(isPalindrome("Rotator"));

logger.log("RoTAToR rOtATOr");
logger.log(isPalindrome("RoTAToR rOtATOr"));

export { isPalindrome };
