Certainly! Here are some common string operations in JavaScript:

1. **Concatenation:**
   - Combining two or more strings.

   ```javascript
   const str1 = 'Hello';
   const str2 = 'World';

   const result = str1 + ', ' + str2;
   console.log(result); // Output: 'Hello, World'
   ```

   In ES6, you can also use template literals for concatenation:

   ```javascript
   const result = `${str1}, ${str2}`;
   ```

2. **String Length:**
   - Finding the length of a string.

   ```javascript
   const str = 'JavaScript';

   console.log(str.length); // Output: 10
   ```

3. **Accessing Characters:**
   - Accessing individual characters in a string.

   ```javascript
   const str = 'Hello';

   console.log(str[0]); // Output: 'H'
   console.log(str.charAt(1)); // Output: 'e'
   ```

4. **Substring:**
   - Extracting a portion of a string.

   ```javascript
   const str = 'JavaScript';

   console.log(str.substring(0, 4)); // Output: 'Java'
   ```

5. **Index of and Last Index of:**
   - Finding the index of a substring.

   ```javascript
   const str = 'Hello, World';

   console.log(str.indexOf('World')); // Output: 7
   console.log(str.lastIndexOf('l')); // Output: 9
   ```

6. **Changing Case:**
   - Converting the case of a string.

   ```javascript
   const str = 'Hello';

   console.log(str.toUpperCase()); // Output: 'HELLO'
   console.log(str.toLowerCase()); // Output: 'hello'
   ```

7. **Trimming Whitespace:**
   - Removing leading and trailing whitespace.

   ```javascript
   const str = '   Hello, World!   ';

   console.log(str.trim()); // Output: 'Hello, World!'
   ```

8. **Replacing Substrings:**
   - Replacing occurrences of a substring.

   ```javascript
   const str = 'Hello, John';

   const newStr = str.replace('John', 'Alice');
   console.log(newStr); // Output: 'Hello, Alice'
   ```

These are just a few examples of common string operations in JavaScript. Strings are fundamental data types, and there are various methods and techniques available for manipulating and working with them.


---


Absolutely! In ES6, several new string methods were introduced to make string manipulation more convenient and expressive. Here are some of the commonly used string methods:

1. **`startsWith`:**
   - Checks if a string starts with a specified prefix.

   ```javascript
   const str = 'Hello, World!';

   console.log(str.startsWith('Hello')); // Output: true
   console.log(str.startsWith('World')); // Output: false
   ```

2. **`endsWith`:**
   - Checks if a string ends with a specified suffix.

   ```javascript
   const str = 'Hello, World!';

   console.log(str.endsWith('World!')); // Output: true
   console.log(str.endsWith('Hello')); // Output: false
   ```

3. **`includes`:**
   - Checks if a string contains a specified substring.

   ```javascript
   const str = 'Hello, World!';

   console.log(str.includes('World')); // Output: true
   console.log(str.includes('JavaScript')); // Output: false
   ```

4. **`repeat`:**
   - Returns a new string containing the specified number of copies of the original string.

   ```javascript
   const repeatedStr = 'abc'.repeat(3);

   console.log(repeatedStr); // Output: 'abcabcabc'
   ```

5. **`trimStart` and `trimEnd` (ES2019/ES10):**
   - Removes leading or trailing whitespace from a string.

   ```javascript
   const str = '   Hello, World!   ';

   console.log(str.trimStart()); // Output: 'Hello, World!   '
   console.log(str.trimEnd()); // Output: '   Hello, World!'
   ```

These string methods provide a concise and efficient way to perform common string operations, such as checking prefixes or suffixes, searching for substrings, repeating strings, and formatting with padding.
