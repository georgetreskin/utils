import reduce from 'lodash/reduce';
import has from 'lodash/has';

/**
 * Check if object has all provided keys
 *
 * @param {Object} object The object to query
 * @param {Array|string} paths Paths to check
 * @returns {boolean} Returns `true` if every path exists, else `false`
 *
 */
export default function requiredKeys(obj: Object, keysToCheck: string | string[]): boolean {
  let testKeys = typeof keysToCheck === 'string' 
    ? keysToCheck.split(',')
    : keysToCheck;
  return reduce(testKeys, (result: boolean, path: string) => {
    if (!has(obj, path.trim())) {
      result = false;
    }
    return result;
  }, true);
}
