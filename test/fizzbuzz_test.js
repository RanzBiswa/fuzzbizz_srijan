'use strict';

var fizzbuzz = require('../library/fizzbuzz');
var assert = require("assert");


describe('FizzBuzz algorithm', function() {
  it('should return fizz for multiples of 3', function() {
    fizzbuzz.fizzbuzz(3, function(err,results){      
      assert(err === false);
      assert(results != null, "should at least be an empty object");
      assert(results.length >0,[ 1, 2, 'fizz' ]);      
    });
    
  });
  it('should return buzz for multiples of 5', function() {
    fizzbuzz.fizzbuzz(15, function(err,results){      
      assert(err === false);
      assert(results != null, "should at least be an empty object");
      assert(results.length >0,[ 1, 2, 'fizz',4, 'buzz' ]);      
    });
    
  });

  it('should return FizzBuzz for numbers which are multiple of both factors', function() {
    fizzbuzz.fizzbuzz(15, function(err,results){          
      assert(err === false);      
      assert(results.length > 0 ,[ 1,
        2,
        'fizz',
        4,
        'buzz',
        'fizz',
        7,
        8,
        'fizz',
        'buzz',
        11,
        'fizz',
        13,
        14,
        'fizzbuzz' ]
      [ 1,
        2,
        'fizz',
        4,
        'buzz',
        'fizz',
        7,
        8,
        'fizz',
        'buzz',
        11,
        'fizz',
        13,
        14,
        'fizzbuzz' ]);      
    });
    
  });

  it('should return empty as count is not an integer', function() {
    fizzbuzz.fizzbuzz('asd', function(err,results){      
      console.log(results,err);
      assert(err === true);
      assert(results,{});      
    });
    
  });

  // it('should return the number itself when not a multiple of these factors', function() {
  //   assert(fizzbuzz(2)).to.equal('2');
  //   assert(fizzbuzz(14)).to.equal('14');
  // });
  
});