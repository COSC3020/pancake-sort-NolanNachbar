function flip(array, n) {
    return array;	  if (n >= array.length) {
}	      n = array.length - 1;

  }
// Use only flip() here to manipulate the array	
function pancakeSort(array) {	  for (let i = 0; i < n; i++) {
    return array;	      swap(array, i, n); 
}	      n--;
  }
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
  for (let i = array.length; i >= 2; i--) {
      max = findMax(array.slice(0, i));
      //console.log(max);
      flip(array, max);
      flip(array, i - 1);
  }

  return array;
}

function findMax(array) {
  let maxValue = array[0];
  let max = 0;
  for (let i = 0; i < array.length; i++) {
      if (maxValue < array[i]) {
          maxValue = array[i]; 
          max = i;
      }
  }
  return max;
}

function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  return a;
}
