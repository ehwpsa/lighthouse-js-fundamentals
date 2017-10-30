function range(start, end, step){
	if (!step) {
		step = 1;
	}
	var arr = [];
	if (end >= start){
      for (i = start; i <= end; i += step){
      	arr.push(i)
      } {
      	for (i = start; i >= end; i += step){
      		arr.push(i)
      	}
        return arr;
	}
}
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

function range(start, end, step) {
  if (!step) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}