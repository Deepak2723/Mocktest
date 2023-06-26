function firstUniqChar(s) {
  // Create a frequency map to count occurrences of each character
  const frequencyMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (frequencyMap.has(char)) {
      frequencyMap.set(char, frequencyMap.get(char) + 1);
    } else {
      frequencyMap.set(char, 1);
    }
  }

  // Find the first character with frequency 1 and return its index
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (frequencyMap.get(char) === 1) {
      return i;
    }
  }

  // If no unique character is found, return -1
  return -1;
}

// Example usage:
const s1 = "leetcode";
console.log(firstUniqChar(s1));  // Output: 0

const s2 = "loveleetcode";
console.log(firstUniqChar(s2));  // Output: 2

const s3 = "aabb";
console.log(firstUniqChar(s3));  // Output: -1
