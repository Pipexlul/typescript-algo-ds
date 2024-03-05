import { SimpleLogger } from "../utils/logger";

const logger = new SimpleLogger("FlattenArray");

/**
 * Flattens an array by removing nested arrays and returning a new flattened array.
 *
 * @param rootArray - The array to be flattened.
 * @returns The flattened array.
 */
const flattenArrayMethod = (rootArray: unknown[]): unknown[] => {
  const flattened = rootArray.flat();

  return flattened;
};

/**
 * Recursively flattens an array by removing nested arrays and returning a new flattened array.
 *
 * @param rootArray - The array to be flattened.
 * @returns The flattened array.
 */
const flattenArrayRecursive = (rootArray: unknown[]): unknown[] => {
  const flattened: unknown[] = [];

  for (const elem of rootArray) {
    if (Array.isArray(elem)) {
      flattened.push(...flattenArrayRecursive(elem));
    } else {
      flattened.push(elem);
    }
  }

  return flattened;
};

// TODO: FG: Move these to their own testing section later on
const test1 = [5, 3, 2, 1, 7];
const test2 = [5, 3, [11, 277], [55, 27, [200, 21], 2], [25]];

const test1Str = JSON.stringify(test1, null);
const test2Str = JSON.stringify(test2, null);

logger.log("Methods");
logger.log(test1Str);
logger.log(flattenArrayMethod(test1));
logger.log(test2Str);
logger.log(flattenArrayMethod(test2));

logger.log("Recursive");
logger.log(test1Str);
logger.log(flattenArrayRecursive(test1));
logger.log(test2Str);
logger.log(flattenArrayRecursive(test2));

export { flattenArrayMethod, flattenArrayRecursive };
