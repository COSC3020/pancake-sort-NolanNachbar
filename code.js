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

function panhelp(array,size){
  var index = 0;
  
  for (var i = 1; i < size; i++){
    if (array[i] > array[index]) index = i;
  }
  return index;
}

console.log(pancakeSort([3,54,3,43,2,4,9]));
