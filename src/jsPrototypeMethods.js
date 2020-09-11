// PROTOTYPE METHODS:

	// Arrays

			// concat*
					// merges two or more arrays - does not change existing arrays but returns a new one
					// const array3 = array1.concat(array2)
			// find + findIndex*
					// returns the first item / index of the first element in the array that satisfies the testing function (otherwise returns -1)
					// const isLargeNumber = e => e > 13
					// console.log(array1.find(isLargeNumber))
					// console.log(array1.findIndex(isLargeNumber))
			// filter*
					// creates new array with elements that pass the test implemented by provided function
					// const results = words.filter(word => word.length > 6)
			// forEach*
					// executes a provided function for each array element
					// array1.forEach(e => console.log(e))
			// includes*
					// determines whether an array includes  acertain value among it's entries, returning true or false
					// let x = array1.includes('cat')
			// indexOf*
					// returns first index at which a given element can be found in the array, otherwise returns -1. Can specify where in array to start from
					// let x = array1.indexOf('cat')
					// let skipFirstTwoItems = array1.indexOf('cat', 1)
			// join
					// concats all the array elements into a new string, separated by commas or a specifided separator string.
					// let x = elements.join()
					// let x = elements.join('-')
			// map*
					// creates a new array populated with the results of calling a provided function on every element in the calling array
					// const map1 = array1.map(x => x * 2)
			// pop*
					// removes last element from array and returns that element
			// push*
					// adds element to the end of an array and returns new length of array
			// reverse*
					// reverses an array in place (first element becomes last, vice versa)
			// shift*
					// removes first element in an array, and returns that element
			// slice*
					// returns a shallow copy of a portion of an array into a new array object selected from start to end
					// const numbers = [1, 2, 3, 4, 5];
					// numbers.slice(2) // [3, 4, 5]
					// numbers.slice(2, 4) // [3, 4]
			// sort*
					// sorts elements of an array in place and returns the sorted array - default sort is ascending (after converting them to strings) in UTF-16
					// const array1 = [1, 30, 4, 21, 100000]
					// array1.sort(); // [1, 100000, 21, 30, 4]
			// splice*
					// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
					// const months = ['Jan', 'Mar', 'Apr', 'Jun'];
					// months.splice(1, 0, 'Feb') // inserts at index 1
					// months.splice(4, 1, 'May') // replaces 1 element at index 4
					// console.log(months) // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
			// toString
					// converts array to string, including commas but no spaces
			// unshift*
					// adds one or more elements to beginning of array, and returns new length of that array
					// const array1 = [1, 2, 3];
					// array1.unshift(4, 5) // returns 5
					// console.log(array1) // [4, 5, 1, 2, 3]

	// Objects

			// assign
					// copies all enumerable own properties from one or more source objects to a target object, and returns target
			// create
					// creates a new object using the existing object as a prototype of the newly created object
			// hasOwnProperty*
					// returns bool indicating whether object has specified property as it's own property (as opposed to inheriting it)
					// var hasPropertyTest = {property1: true}; // true

	// Functions

			// apply*
					// calls a function with a given `this` value, and arguments provided as an array (or an array-like object)
			// bind*
					// creates a new function that, when called, has it's `this` keyword set to the provided value,
					// with a given sequence of arguments preceding any provided when the new function is called
					// useful for binding functions to `this` in OOP
			// call*
					// calls a function with a given `this` value andarguments provided individually
			// toString
					// returns source code of function as string

	// String

			// charAt*
					// returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string (location in the string array)
			// concat*
					// concatenates the string arguments to the calling string and returns a new string
					// const str1 = "Hello"; const str2 = "World"
					// console.log(str2.concat(', ', str1)); // World, Hello
			// endsWith
			// includes*
					// determines whether one string may be found within another string, and returns true or false
			// indexOf & lastIndexOf*
					// 
			// match
			// repeat
			// replace*
					// replace reutnrs a new string with some or all matches of a pattern replaced by a replacement.
					// Pattern can be string or RegExp, and replacement can be a string or a function to be called for each match.
					// If pattern is a string, only the first occurence will be replaced
			// search
					// executes a search for a match between a regex and this string obj
			// slice*
					// extracts a section of a string and returns it as a new string, without modifying the original string
					// console.log(str.slice(4, 19)) // quick brown fox
			// split*
					// divides a string into an ordered list of subtrings, puts these substrings into an array, and returns the array.
					// division is done by searching for a pattern where the pattern is provided as the first parameter in the method's call
			// substring*
			// toLowerCase*
			// toUpperCase*
			// trim*
					// removes whitespace from hoth ends of a string (space, tab, nbsp, etc.)
			// trimEnd
			// trimStart
			// valueOf*

	// Bool

			// apply*
			// bind*
			// call*
			// toString

	// Number
	
			// isFinite
			// isInteger
			// isNaN
			// isSafeInteger
			// parseFloat
			// parseInt
			// toExponential
			// toFixed
			// toLocaleString
			// toPrecision
			// toString
			// valueOf*

	// Math

			// abs
			// acos
			// acosh
			// asin
			// asinh
			// atan
			// atan2
			// atanh
			// cbrt
			// ceil
			// clz32
			// cos
			// cosh
			// exp
			// expm1
			// floor
			// fround
			// hypot
			// imul
			// log
			// log10
			// log1p
			// log2
			// max*
			// min*
			// pow
			// random
			// round
			// sign
			// sin
			// sinh
			// sqrt
			// tan
			// tanh
			// trunc

	// Date

				// UTC
				// now
				// parse*
				// getDate*
				// getDay
				// getFullYear*
				// getHours
				// getMilliseconds
				// getMinutes
				// getMonth
				// getSeconds
				// getTime
				// getTimezoneOffset
				// getUTCDate
				// getUTCDay
				// getUTCFullYear
				// getUTCHours
				// getUTCMilliseconds
				// getUTCMinutes
				// getUTCMonth
				// getUTCSeconds
				// setDate
				// setFullYear
				// setHours
				// setMilliseconds
				// setMinutes
				// setMonth
				// setSeconds
				// setTime
				// setUTCDate
				// setUTCFullYear
				// setUTCHours
				// setUTCMilliseconds
				// setUTCMinutes
				// setUTCMonth
				// setUTCSeconds
				// toDateString
				// toISOString
				// toJSON
				// toLocaleDateString*
				// toLocaleString*
				// toLocaleTimeString*
				// toSource
				// toString
				// toTimeString
				// toUTCString
				// valueOf

	// less common ones:

	// Symbols
			
			// for
			// keyFor
			// toString
			// valueOf

	// Map

			// clear
			// delete
			// entries
			// forEach
			// get
			// has
			// keys
			// set
			// values


	// Set
	
			// add
			// clear
			// delete
			// entries
			// forEach
			// has
			// values

	//