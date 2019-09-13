# fizzbuzz REST API

This API is designed to return a array of numbers upto count(number passed in the request) with the below conditions.
If a number is divisible by 3, it would be replaced by "fizz"
If a number is divisible by 5, it would be replaced by "buzz"
If a number is divisible by 3 or 5, it would be replaced by "fizzbuzz"
# Files
server.js  - Entry point of the server which holds the server hosting.
library/fizzbuzz.js -- file which holds the code for doing fizz buzz.
test/ fizzbuzz_test.js -- test file written in mocha chai package
