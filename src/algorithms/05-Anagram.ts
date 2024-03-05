import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("ANAGRAM");

const alphanumericRegex = /[^a-zA-Z0-9]/g;
const sanitizeString = (str: string): string => {
  return str
    .replace(alphanumericRegex, "") // Remove every symbol and whitespace
    .toLowerCase();
};

const areStringsAnagram = (str1: string, str2: string): boolean => {
  const sanitizedFirst = sanitizeString(str1);
  const sanitizedSecond = sanitizeString(str2);

  if (sanitizedFirst.length !== sanitizedSecond.length) {
    // Not an anagram since both strings don't have the same amount of characters
    return false;
  }

  const charsFirst = sanitizedFirst.split("").sort();
  const charsSecond = sanitizedSecond.split("").sort();

  const textLength = sanitizedFirst.length;

  for (let i = 0; i < textLength; ++i) {
    if (charsFirst[i] !== charsSecond[i]) {
      return false;
    }
  }

  return true;
};

const testA1 = "Angered";
const testA2 = "Enraged";

const testB1 = "dormiTory";
const testB2 = "DIRTY ROOM";

const testC1 = "snooze ALARMS";
const testC2 = "alas, no more Z's";

const testD1 = "helloTHERE";
const testD2 = "hello there";

const testE1 = "fail";
const testE2 = "failure";

logger.log(testA1, testA2);
logger.log(areStringsAnagram(testA1, testA2));
logger.log(testB1, testB2);
logger.log(areStringsAnagram(testB1, testB2));
logger.log(testC1, testC2);
logger.log(areStringsAnagram(testC1, testC2));
logger.log(testD1, testD2);
logger.log(areStringsAnagram(testD1, testD2));
logger.log(testE1, testE2);
logger.log(areStringsAnagram(testE1, testE2));

export { areStringsAnagram };
