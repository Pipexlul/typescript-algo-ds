import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("BINARY SEARCH");

/**
 * Performs a binary search on a sorted array to find the index of a given element.
 *
 * @param sortedArray - The sorted array to search in.
 * @param elemToFind - The element to find in the array.
 * @returns The index of the element in the array, or -1 if the element is not found.
 */
const binarySearch = <T extends string | number>(
  sortedArray: T[],
  elemToFind: T
): number => {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    const valMid = sortedArray[mid];

    if (valMid === elemToFind) {
      return mid;
    }

    if (valMid < elemToFind) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }

  return -1;
};

const testA1 = [2, 5, 8, 120, 255, 500];
const testA2 = 5;

const testB1 = [122, 156, 231, 900, 9900];
const testB2 = 9900;

const testC1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const testC2 = 11;

const testD1 = testC1;
const testD2 = 15;

logger.log(testA1);
logger.log(testA2);
logger.log(binarySearch(testA1, testA2));
logger.log("---");

logger.log(testB1);
logger.log(testB2);
logger.log(binarySearch(testB1, testB2));
logger.log("---");

logger.log(testC1);
logger.log(testC2);
logger.log(binarySearch(testC1, testC2));
logger.log("---");

logger.log(testD1);
logger.log(testD2);
logger.log(binarySearch(testD1, testD2));
logger.log("---");

export { binarySearch };
