# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

Recall my implementation,
```js
function flip(array, r) {
    var l = 0;
    while(l < r){
      var temp = array[r];
      array[r] = array[l];
      array[l] = temp;
      l++;
      r--;
    }
}

// This will sort by first finding the maximum element in the not sorted part of the array then it will flip that element to the front and finally it will flip that to the very back
function pancakeSort(array) {
  for (var i = array.length; i > 1; i--){
    var maxindex = panhelp(array,i);
    if(maxindex != i - 1){
      flip(array, maxindex);
      flip(array, i - 1);
    }
  }
    return array;
}

// This function will find the largest element in the array
function panhelp(array, size){
  var index = 0;

  for (var i = 1; i < size; i++){
    if (array[i] > array[index]) index = i;
  }
  return index;
}
```

## Comparisons
To find the max element in the unsorted array it needs to look through the entire unsorted array each iteration, this means $\Theta(n^2)$ comparisons.

## Flips
The way that the sorting works is that it will first finding the maximum element in the not sorted part of the array then it will flip that element to the front and finally it will flip that to the very back. So for every element it will flip it twice, $2n$ flips. Thus the asymptotic runtime is $\Theta(n)$. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I looked at this to help me understand how to go about implementing it, mainly the functionality behind the flipping. 
https://www.geeksforgeeks.org/pancake-sorting/

I looked at this to make sure I was counting the comparisons right. 
https://github.com/COSC3020/pancake-sort-Hinckley28
