/**
 * Checks if value is an Array and not an empty Array
 * 
 * @param {any} value to check
 * @returns {boolean} result
 */
export default function definitelyArray(value: any): boolean {
  return !!value && Array.isArray(value) && value.length > 0;
}
