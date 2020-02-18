describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4])).toEqual([[1,2], [3, 4]])
    expect(split([1, 2, 3, 4, 5])).toEqual([[1,2], [3, 4, 5]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([ [1,2], [3, 4] ])).toEqual([1, 2, 3, 4])
    expect(merge([ [1,2], [3, 4, 5] ])).toEqual([1, 2, 3, 4, 5])
    expect(merge([ [1], [2] ])).toEqual([1, 2])
  });
});

describe('Merge Sort function', function(){
  it('returns a sorted array', function(){
    // test the merging algorithm
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])

    expect(mergeSort([500, 20, 50, -100, 800, 300, -300, 500])).toEqual([-300, -100, 20, 50, 300, 500, 500, 800])
  });
});
