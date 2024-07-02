/**
 * Finds the location j in the array A such that:
 * - All elements in the range A[0], ..., A[j - 1] are strictly less than x.
 * - All elements in the range A[j], ..., A[n - 1] are greater than or equal to x.
 *
 * @param A - Sorted array of integers.
 * @param x - Target integer.
 * @returns The index j, or -1 if no suitable location is found.
 */
function binarySearch(A: number[], x: number): number {
  let left = 0;
  let right = A.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (A[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left < A.length ? left : -1;
}

// Example usage:
const A = [1, 2, 4, 4, 5, 6, 8];
const x = 4;
console.log(`${A} is the array A`);
console.log(`The integer x is: ${x}`);
console.log(`The index j is: ${binarySearch(A, x)}`); // Output should be 2

export { binarySearch };
